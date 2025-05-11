'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import {
  Box,
  Typography,
  Grid,
  Button,
  Paper,
  TextField,
  useTheme,
  useMediaQuery,
} from '@mui/material';

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

const CyclicVoltammetryPage = () => {
  const [formData, setFormData] = useState({
    cycles: 3,
    startVoltage: 0,
    endVoltage: 0,
    maxVoltage: 100,
    minVoltage: -100,
    stepVoltage: 5,
    scanRate: 100,
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleReset = () => {
    setFormData({
      cycles: 3,
      startVoltage: 0,
      endVoltage: 0,
      maxVoltage: 100,
      minVoltage: -100,
      stepVoltage: 5,
      scanRate: 100,
    });
  };

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
        Cyclic Voltammetry
      </Typography>

      <Grid container spacing={4}>
        {/* Form Section */}
        <Grid item xs={12} md={4}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              borderRadius: 2,
              background: 'linear-gradient(127deg, rgba(6,11,40,0.94) 19%, rgba(10,14,35,0.49) 77%)',
            }}
          >
            <Typography variant="h6" color="white" fontWeight={600} gutterBottom>
              Cyclic Voltammetry Controls
            </Typography>

            <form onSubmit={handleSubmit}>
              {[ 
                { label: '# cycles', name: 'cycles', min: 1 },
                { label: 'Start voltage (mV)', name: 'startVoltage', min: -600, max: 600 },
                { label: 'End voltage (mV)', name: 'endVoltage', min: -600, max: 600 },
                { label: 'Max. voltage (mV)', name: 'maxVoltage', min: -600, max: 600 },
                { label: 'Min. voltage (mV)', name: 'minVoltage', min: -600, max: 600 },
                { label: 'Step voltage (mV)', name: 'stepVoltage', min: 1, max: 100 },
                { label: 'Scan rate (mV/s)', name: 'scanRate', min: 1, max: 10000 },
              ].map(({ label, name, min, max }) => (
                <TextField
                  key={name}
                  label={label}
                  name={name}
                  type="number"
                  value={formData[name as keyof typeof formData]}
                  onChange={handleChange}
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

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                <Button
                  type="reset"
                  onClick={handleReset}
                  variant="outlined"
                  sx={{
                    borderColor: 'gray',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#2d3748',
                    },
                  }}
                >
                  Reset
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: '#4fd1c5',
                    color: '#1a202c',
                    '&:hover': {
                      backgroundColor: '#38b2ac',
                    },
                  }}
                >
                  Submit
                </Button>
              </Box>
            </form>
          </Paper>
        </Grid>

        {/* Graph Section */}
        <Grid item xs={12} md={8}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              borderRadius: 2,
              background: 'linear-gradient(127deg, rgba(6,11,40,0.94) 19%, rgba(10,14,35,0.49) 77%)',
            }}
          >
            <Typography variant="h6" color="white" fontWeight={600} align="center" gutterBottom>
              Graph Output
            </Typography>
            <Box sx={{ width: '100%', height: isMobile ? '300px' : '400px' }}>
            <Plot
            data={[
              {
                x: [0, 1, 2, 3],
                y: [0, 2, 1, 4],
                type: 'scatter',
                mode: 'lines+markers',
                marker: { color: 'red' },
              },
            ]}
            layout={{
              autosize: true,
              paper_bgcolor: '#0f172a',
              plot_bgcolor: '#0f172a',
              font: { color: 'white' },
              margin: { t: 20, b: 60, l: 70, r: 20 },
              xaxis: {
                title: {
                  text: 'Voltage (mV)',
                  font: {
                    color: 'white',
                  },
                },
              },
              yaxis: {
                title: {
                  text: 'Current (µA)',
                  font: {
                    color: 'white',
                  },
                },
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
};

export default CyclicVoltammetryPage;
