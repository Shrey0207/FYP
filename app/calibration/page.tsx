'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  useMediaQuery,
  useTheme,
} from '@mui/material';
import dynamic from 'next/dynamic';

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

export default function CalibrationPage() {
  const [active, setActive] = useState('false');
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

  const handleCalibrate = async () => {
    try {
      await axios.post('/api/calibrate', {
        active: active === 'true',
        gain,
        ...formData,
      });
      alert('Calibration settings submitted.');
    } catch (err) {
      console.error(err);
      alert('Failed to submit calibration.');
    }
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
        {/* Form Section */}
        <Grid item xs={12} md={6}>
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
                  control={<Radio sx={{ color: 'gray', '&.Mui-checked': { color: '#4fd1c5' } }} />}
                  label={<Typography color="white">Active</Typography>}
                />
                <FormControlLabel
                  value="false"
                  control={<Radio sx={{ color: 'gray', '&.Mui-checked': { color: '#4fd1c5' } }} />}
                  label={<Typography color="white">Inactive</Typography>}
                />
              </RadioGroup>
            </FormControl>

            {/* TIA Gain */}
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel
                id="tia-gain-label"
                sx={{ color: '#cbd5e0', paddingBottom: '8px' }}
              >
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

            {/* Inputs */}
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

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#4fd1c5',
                  color: '#1a202c',
                  '&:hover': {
                    backgroundColor: '#38b2ac',
                  },
                }}
                onClick={handleCalibrate}
              >
                Calibrate
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Graph Section */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              borderRadius: 2,
              background:
                'linear-gradient(127deg, rgba(6,11,40,0.94) 19%, rgba(10,14,35,0.49) 77%)',
            }}
          >
            <Typography variant="h6" color="white" fontWeight={600} align="center" gutterBottom>
              Scope Display
            </Typography>
            <Box sx={{ width: '100%', height: isMobile ? '300px' : '400px' }}>
             // Corrected Layout for Plot Component
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
                xaxis: { title: { text: 'Time (s)' }, gridcolor: '#2d3748' }, // Corrected
                yaxis: { title: { text: 'Current (µA)' }, side: 'left', gridcolor: '#2d3748' }, // Corrected
                yaxis2: {
                title: { text: 'Voltage (mV)' }, // Corrected
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
