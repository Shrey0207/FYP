"use client";

import React from "react";
import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material";
import { IoArrowForward } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";
import { FaBatteryFull, FaBatteryHalf, FaBatteryQuarter, FaBatteryEmpty } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Component = styled("div")({
  width: "100%",
  height: "auto",
  display: "flex",
  gap: "20px",
  background: "transparent",
  border: "none",
  paddingTop: "18px",
  fontFamily: "Plus Jakarta Sans",
});

const handleRecordClick = () => {
  console.log("Recording triggered");
  // In later steps, we'll:
  // 1. Show a "Recording..." state on charts
  // 2. Simulate/fetch sensor data
  // 3. Update UI with real values
};


interface DashComponentProps {
  route: string;
}

const DashSecondComponent: React.FC<DashComponentProps> = ({ route }) => {
  const { t, i18n } = useTranslation();
  React.useEffect(() => {
    if (route === "/rtl") {
      i18n.changeLanguage("ar");
    } else {
      i18n.changeLanguage("en");
    }
  }, [route, i18n]);

  // Hardcoded battery percentage (simulate dynamic later)
  const batteryLevel = 65; // percentage

  // Determine icon and color based on battery level
  const getBatteryIcon = () => {
    if (batteryLevel >= 75) return <FaBatteryFull />;
    if (batteryLevel >= 50) return <FaBatteryHalf />;
    if (batteryLevel >= 25) return <FaBatteryQuarter />;
    return <FaBatteryEmpty />;
  };

  const getBatteryColor = () => {
    if (batteryLevel >= 75) return "#4caf50"; // green
    if (batteryLevel >= 50) return "#ff9800"; // orange
    if (batteryLevel >= 25) return "#ff5722"; // deep orange
    return "#f44336"; // red
  };

  return (
    <Component className="DashSecond">
      {/* Welcome Back Card (unchanged) */}
      <Paper
        sx={{
          backgroundImage: "url(/card-one-background.png)",
          borderRadius: "20px",
          backgroundRepeat: "no-repeat",
        }}
        className="w-[648px] h-[340px] max-[1440px]:w-full max-[1440px]:bg-cover max-[1440px]:bg-center"
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            paddingX: "22px",
            paddingY: "32px",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography sx={{ color: "#a0a3c0", fontSize: "14px" }}>
              {t("Welcome back,")}
            </Typography>
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "600",
                color: "white",
                marginBottom: "18px",
              }}
            >
              Piyush Kumar
            </Typography>
            <Typography sx={{ color: "#a0a3c0", width: "180px" }}>
              {t("Glad to see you again! Ask me anything.")}
            </Typography>
          </Box>
          <button
            onClick={handleRecordClick}
            style={{
              background: "transparent",
              border: "none",
              color: "white",
              fontSize: "14px",
              display: "flex",
              gap: "4px",
              alignItems: "center",
              cursor: "pointer",
              padding: 0,
              fontFamily: "inherit",
            }}
          >
            {t("Tap to record")}
            <IoArrowForward />
          </button>

        </Box>
      </Paper>
      {/* Glucose Concentration Card */}
      {/* Glucose Concentration Card */}
<Paper
  className="w-[515px] h-[340px] max-[1440px]:w-full max-[768px]:h-auto"
  sx={{
    borderRadius: "20px",
    background:
      "linear-gradient(126.97deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%)",
    padding: "22px",
    boxShadow: "rgba(0, 0, 0, 0.05) 0rem 1.25rem 1.6875rem 0rem",
  }}
>
  <Typography sx={{ fontSize: "18px", fontWeight: "600", color: "white", mb: 4 }}>
    {t("Glucose Concentration")}
  </Typography>

  {/* Circular Graph Section Only */}
  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        value={80}
        size={200}
        thickness={4}
        sx={{ color: "rgba(10, 10, 10, 0.1)" }}
      />
      <CircularProgress
        variant="determinate"
        value={80}
        size={200}
        thickness={4}
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          color: "transparent",
          "& .MuiCircularProgress-circle": {
            stroke: "url(#glucoseProgressGradient)",
          },
          rotate: "30deg",
        }}
      />
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="glucoseProgressGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#06b189" />
            <stop offset="130%" stopColor="rgba(7, 138, 94, 0.11)" />
          </linearGradient>
        </defs>
      </svg>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "200px",
          height: "200px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ color: "#a0aec0", fontSize: "14px", fontWeight: "600" }}>
          {t("Concentration")}
        </Typography>
        <Typography sx={{ color: "white", fontSize: "48px", fontWeight: "600" }}>
          5.1
        </Typography>
        <Typography sx={{ color: "#a0aec0", fontSize: "14px", fontWeight: "600" }}>
          mM
        </Typography>
      </Box>
    </Box>
  </Box>
</Paper>

      {/* Battery Status Card */}
      <Paper
        className="w-[382px] h-[340px] max-[1440px]:w-full"
        sx={{
          borderRadius: "20px",
          background:
            "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%) border-box;",
          padding: "22px",
        }}
      >
        <Typography
          sx={{
            fontSize: "18px",
            color: "white",
            fontWeight: "600",
            marginBottom: "4px",
          }}
        >
          {t("Battery Status")}
        </Typography>
        <Typography sx={{ fontSize: "14px", color: "#a0aec0" }}>
          {t("Sensor device level")}
        </Typography>

        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "auto",
            mt: 4,
          }}
        >
          <Box
            sx={{
              marginX: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CircularProgress
              variant="determinate"
              value={batteryLevel}
              size={170}
              sx={{
                color: getBatteryColor(),
              }}
            />
          </Box>
          <Box
            sx={{
              width: "50px",
              height: "50px",
              borderRadius: "100%",
              justifyContent: "center",
              alignItems: "center",
              background: getBatteryColor(),
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: "12px",
              color: "white",
              fontSize: "28px",
              display: "flex",
            }}
          >
            {getBatteryIcon()}
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "82px",
              position: "absolute",
              background:
                "linear-gradient(126.97deg, rgb(6, 11, 40) 28.26%, rgb(10, 14, 35) 91.2%)",
              borderRadius: "20px",
              bottom: "-35px",
              left: "0px",
              paddingY: "18px",
              paddingX: "22px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontSize: "12px", color: "#a0aec0" }}>0%</Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "30px",
                  color: "white",
                  lineHeight: "30px",
                  fontWeight: "600",
                }}
              >
                {batteryLevel}%
              </Typography>
              <Typography sx={{ fontSize: "12px", color: "#a0aec0" }}>
                {t("Current charge")}
              </Typography>
            </Box>
            <Typography sx={{ fontSize: "12px", color: "#a0aec0" }}>100%</Typography>
          </Box>
        </Box>
      </Paper>
    </Component>
  );
};

export default DashSecondComponent;
