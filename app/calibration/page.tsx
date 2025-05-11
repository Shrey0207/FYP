"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Grid,
  Paper,
  Button,
} from "@mui/material";
import Footer from "@/components/Footer";
import Plotly from "plotly.js-dist-min";

export default function CalibrationPage() {
  const [active, setActive] = useState("false");
  const [gain, setGain] = useState(7);
  const [time, setTime] = useState<number[]>([]);
  const [current, setCurrent] = useState<number[]>([]);
  const [voltage, setVoltage] = useState<number[]>([]);

  // Form state
  const [formData, setFormData] = useState({
    voltage: 100,
    avgReadings: 1,
    delay: 500,
    maxPoints: 100,
  });

  const handleFormChange = (key: keyof typeof formData, value: number) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleCalibrate = async () => {
    try {
      await axios.post("/api/calibrate", {
        active: active === "true",
        gain,
        ...formData,
      });
      alert("Calibration settings submitted.");
    } catch (err) {
      console.error(err);
      alert("Failed to submit calibration.");
    }
  };

  useEffect(() => {
    const fetchScopeData = async () => {
      try {
        const response = await axios.get("/api/scope-data");
        const { time, current, voltage } = response.data;
        setTime(time);
        setCurrent(current);
        setVoltage(voltage);
      } catch (error) {
        console.error("Error fetching scope data:", error);
      }
    };

    fetchScopeData();
  }, []);

  useEffect(() => {
    if (time.length && current.length && voltage.length) {
      const trace1 = {
        x: time,
        y: current,
        mode: "lines",
        name: "Current (µA)",
        yaxis: "y1",
        line: { color: "#4fd1c5" },
      };

      const trace2 = {
        x: time,
        y: voltage,
        mode: "lines",
        name: "Voltage (mV)",
        yaxis: "y2",
        line: { color: "#90cdf4" },
      };

      const layout: Partial<Plotly.Layout> = {
        margin: { t: 30, b: 50, l: 50, r: 60 },
        paper_bgcolor: "transparent",
        plot_bgcolor: "transparent",
        font: { color: "#e2e8f0" },
        xaxis: {
          title: { text: "Time (s)" },
          gridcolor: "#2d3748",
        },
        yaxis: {
          title: { text: "Current (µA)" },
          side: "left" as const,
          gridcolor: "#2d3748",
        },
        yaxis2: {
          title: { text: "Voltage (mV)" },
          overlaying: "y",
          side: "right" as const,
          gridcolor: "#2d3748",
        },
      };

      Plotly.newPlot("plotly-scope-2yaxis", [trace1, trace2], layout, {
        responsive: true,
        displayModeBar: false,
      });
    }
  }, [time, current, voltage]);

  return (
    <Box
      component="main"
      className="pt-[110px] max-[768px]:pt-[130px] overflow-y-auto w-full h-full px-6 max-[768px]:px-5 ml-[17.125rem] max-[1440px]:ml-0"
      sx={{ transition: "margin-left .3s ease, margin-right .3s ease" }}
    >
      {/* Header */}
      <Paper
        sx={{
          mb: 4,
          p: 3,
          borderRadius: 2,
          background:
            "linear-gradient(127deg, rgba(6,11,40,0.94) 19%, rgba(10,14,35,0.49) 77%)",
        }}
      >
        <Typography variant="h5" color="white" fontWeight={600}>
          Calibration Page
        </Typography>
        <Typography variant="body2" color="#a0aec0" mt={1}>
          Setup your sensor or device calibration here.
        </Typography>
      </Paper>

      <Grid container spacing={4}>
        {/* Form Section */}
        <Grid item xs={12} md={6}>
          <Box className="space-y-6">
            <Typography variant="h6" color="white">
              Controls
            </Typography>

            {/* Active / Inactive */}
            <FormControl component="fieldset" sx={{ mb: 2 }}>
              <Typography color="white" sx={{ mb: 1 }}>
                Status
              </Typography>
              <RadioGroup
                row
                value={active}
                onChange={(e) => setActive(e.target.value)}
              >
                <FormControlLabel
                  value="true"
                  control={<Radio sx={{ color: "gray", "&.Mui-checked": { color: "#4fd1c5" } }} />}
                  label={<Typography color="white">Active</Typography>}
                />
                <FormControlLabel
                  value="false"
                  control={<Radio sx={{ color: "gray", "&.Mui-checked": { color: "#4fd1c5" } }} />}
                  label={<Typography color="white">Inactive</Typography>}
                />
              </RadioGroup>
            </FormControl>

            {/* TIA Gain */}
            <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel
                id="tia-gain-label"
                sx={{
                color: "#cbd5e0",
                paddingBottom: "8px", // Increase space between label and input box
                }}
            >
                TIA Gain
            </InputLabel>
            <Select
                labelId="tia-gain-label"
                id="lmpGain_id"
                value={gain}
                onChange={(e) => setGain(Number(e.target.value))}
                sx={{
                color: "white",
                ".MuiOutlinedInput-notchedOutline": { borderColor: "transparent" }, // Remove border
                backgroundColor: "#2d3748", // Set background to match other input fields
                paddingTop: "8px", // Ensure padding is consistent
                paddingBottom: "8px", // Ensures space is consistent with the other input fields
                "& .MuiSelect-icon": { color: "#a0aec0" }, // Set icon color to match theme
                }}
            >
                {[7, 6, 5, 4, 3, 2, 1, 0].map((v) => (
                <MenuItem key={v} value={v}>
                    {[
                    "External resistor",
                    "2.75 kΩ",
                    "3.5 kΩ",
                    "7 kΩ",
                    "14 kΩ",
                    "35 kΩ",
                    "120 kΩ",
                    "350 kΩ",
                    ][7 - v]}
                </MenuItem>
                ))}
            </Select>
            </FormControl>



            {/* Numeric inputs */}
            <Grid container spacing={2}>
              {[
                { key: "voltage", label: "Cell set voltage (mV)", min: -792, max: 792 },
                { key: "avgReadings", label: "# readings avg/point", min: 1, max: 1000000 },
                { key: "delay", label: "Delay between points (ms)", min: 1, max: 1000 },
                { key: "maxPoints", label: "Max # points", min: 1, max: 10000 },
              ].map(({ key, label, min, max }) => (
                <Grid item xs={12} sm={6} key={key}>
                  <TextField
                    label={label}
                    type="number"
                    value={formData[key as keyof typeof formData]}
                    inputProps={{ min, max }}
                    fullWidth
                    variant="outlined"
                    InputLabelProps={{ style: { color: "#cbd5e0" } }}
                    InputProps={{ style: { color: "white" } }}
                    onChange={(e) => handleFormChange(key as keyof typeof formData, Number(e.target.value))}
                  />
                </Grid>
              ))}
            </Grid>

            <Button
              variant="contained"
              sx={{
                mt: 2,
                bgcolor: "#4fd1c5",
                color: "black",
                fontWeight: 600,
                "&:hover": { bgcolor: "#38b2ac" },
              }}
              onClick={handleCalibrate}
            >
              Calibrate
            </Button>
          </Box>
        </Grid>

        {/* Graph Section */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 3,
              height: "100%",
              borderRadius: 2,
              background:
                "linear-gradient(127deg, rgba(6,11,40,0.94) 19%, rgba(10,14,35,0.49) 77%)",
            }}
          >
            <Typography variant="h6" color="white" align="center" gutterBottom>
              Scope display
            </Typography>
            <Box id="plotly-scope-2yaxis" sx={{ width: "100%", height: 400 }} />
          </Paper>
        </Grid>
      </Grid>

      <Box mt={6}>
      </Box>
    </Box>
  );
}
