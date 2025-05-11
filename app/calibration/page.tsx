'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Grid,
  Paper,
  Button,
  useMediaQuery,
  useTheme,
  Switch,
  FormControlLabel,
} from '@mui/material';
import dynamic from 'next/dynamic';

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

export default function CalibrationPage() {
  const [active, setActive] = useState(false);
  const [gain, setGain] = useState(7);
  const [formData, setFormData] = useState({
    voltage: 100,
    avgReadings: 1,
    delay: 500,
    maxPoints: 100,
  });

  const [time, setTime] = useState<number[]>([]);
  const [current, setCurrent] = useState<number[]>([]);
  const [voltage, setVoltage] = useState<number[]>([]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleFormChange = (key: keyof typeof formData, value: number) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    const fetchScopeData = async () => {
      try {
        const response = await axios.get('/api/scope-data');
        const { time, current, voltage } = response.data;
        setTime(time);
        setCurrent(current);
        setVoltage(voltage);
      } catch (error) {
        console.error('Error fetching scope data:', error);
      }
    };

    fetchScopeData();
  }, []);

  return (
    <Box
      sx={{
        height: '100vh',
        overflowY: 'auto',
        backgroundColor: '#0f172a',
        pt: '110px',
        ml: { xs: 0, md: '240px' },
        px: { xs: 2, md: 4 },
        pb: 6,
      }}
    >
      <Typography
        variant="h4"
        color="white"
        fontWeight={600}
        gutterBottom
        align="center"
        sx={{ mb: 4 }}
      >
        Calibration
      </Typography>

      <Grid container spacing={4}>
        {/* LEFT COLUMN */}
        <Grid item xs={12} md={4} container spacing={3} direction="column">
          {/* Add New Sensor Section */}
          <Grid item>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 2,
                background:
                  'linear-gradient(127deg, rgba(6,11,40,0.94) 19%, rgba(10,14,35,0.49) 77%)',
                textAlign: 'center',
              }}
            >
              <Typography variant="h6" color="white" fontWeight={600} gutterBottom>
                Add New Sensor
              </Typography>
              <Typography color="gray" fontSize="0.9rem" mb={2}>
                Setup a new sensor device and configure it separately.
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  color: '#4fd1c5',
                  borderColor: '#4fd1c5',
                  '&:hover': {
                    backgroundColor: '#2d3748',
                    borderColor: '#38b2ac',
                    color: '#38b2ac',
                  },
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: 600,
                  fontSize: '0.95rem',
                }}
              >
                Calibrate New Sensor
              </Button>
            </Paper>
          </Grid>

          {/* Calibration Controls Form */}
          <Grid item>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 2,
                background:
                  'linear-gradient(127deg, rgba(6,11,40,0.94) 19%, rgba(10,14,35,0.49) 77%)',
              }}
            >
              <Typography variant="h6" color="white" fontWeight={600} gutterBottom>
                Calibration Controls
              </Typography>

              {/* TIA Gain */}
              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel id="tia-gain-label" sx={{ color: '#cbd5e0', pb: 1 }}>
                  TIA Gain
                </InputLabel>
                <Select
                  labelId="tia-gain-label"
                  id="lmpGain_id"
                  value={gain}
                  onChange={(e) => setGain(Number(e.target.value))}
                  sx={{
                    color: 'white',
                    backgroundColor: '#2d3748',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#4fd1c5',
                    },
                    '& .MuiSelect-icon': {
                      color: '#a0aec0',
                    },
                  }}
                >
                  {[7, 6, 5, 4, 3, 2, 1, 0].map((v) => (
                    <MenuItem key={v} value={v}>
                      {[
                        'External resistor',
                        '2.75 kΩ',
                        '3.5 kΩ',
                        '7 kΩ',
                        '14 kΩ',
                        '35 kΩ',
                        '120 kΩ',
                        '350 kΩ',
                      ][7 - v]}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Form Inputs */}
              {[ 
                { label: 'Cell set voltage (mV)', key: 'voltage', min: -792, max: 792 },
                { label: '# readings avg/point', key: 'avgReadings', min: 1, max: 1000000 },
                { label: 'Delay between points (ms)', key: 'delay', min: 1, max: 1000 },
                { label: 'Max # points', key: 'maxPoints', min: 1, max: 10000 },
              ].map(({ label, key, min, max }) => (
                <TextField
                  key={key}
                  label={label}
                  name={key}
                  type="number"
                  value={formData[key as keyof typeof formData]}
                  onChange={(e) =>
                    handleFormChange(key as keyof typeof formData, Number(e.target.value))
                  }
                  inputProps={{ min, max }}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  sx={{
                    '& .MuiInputLabel-root': { color: 'white' },
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: '#2d3748',
                      color: 'white',
                      '& fieldset': {
                        borderColor: '#4fd1c5',
                      },
                    },
                  }}
                />
              ))}

              {/* Toggle Switch for Active/Inactive */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                <Typography color="white" fontWeight={500}>
                  Status: {active ? 'Active' : 'Inactive'}
                </Typography>
                <FormControlLabel
                  control={
                    <Switch
                      checked={active}
                      onChange={(e) => setActive(e.target.checked)}
                      sx={{
                        '& .MuiSwitch-switchBase.Mui-checked': {
                          color: '#4fd1c5',
                        },
                        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                          backgroundColor: '#4fd1c5',
                        },
                        '& .MuiSwitch-track': {
                          backgroundColor: '#718096',
                        },
                      }}
                    />
                  }
                  label=""
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* RIGHT COLUMN - GRAPH */}
        <Grid item xs={12} md={8}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              borderRadius: 2,
              height: '100%',
              background:
                'linear-gradient(127deg, rgba(6,11,40,0.94) 19%, rgba(10,14,35,0.49) 77%)',
            }}
          >
            <Typography variant="h6" color="white" fontWeight={600} align="center" gutterBottom>
              Scope Display
            </Typography>
            <Box sx={{ width: '100%', height: isMobile ? '300px' : '600px' }}>
              <Plot
                data={[
                  {
                    x: time,
                    y: current,
                    mode: 'lines',
                    name: 'Current (µA)',
                    yaxis: 'y1',
                    line: { color: '#4fd1c5' },
                  },
                  {
                    x: time,
                    y: voltage,
                    mode: 'lines',
                    name: 'Voltage (mV)',
                    yaxis: 'y2',
                    line: { color: '#90cdf4' },
                  },
                ]}
                layout={{
                  autosize: true,
                  paper_bgcolor: '#0f172a',
                  plot_bgcolor: '#0f172a',
                  font: { color: 'white' },
                  margin: { t: 20, b: 40, l: 40, r: 20 },
                  xaxis: { title: { text: 'Time (s)' }, gridcolor: '#2d3748' },
                  yaxis: {
                    title: { text: 'Current (µA)' },
                    side: 'left',
                    gridcolor: '#2d3748',
                  },
                  yaxis2: {
                    title: { text: 'Voltage (mV)' },
                    overlaying: 'y',
                    side: 'right',
                    gridcolor: '#2d3748',
                  },
                }}
                useResizeHandler
                style={{ width: '100%', height: '100%' }}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
