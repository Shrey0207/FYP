"use client";
import React from 'react'
import {  IoWallet } from "react-icons/io5";
import { Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material";
import { MdOutlineAttachMoney, MdElectricBolt } from "react-icons/md";
import { GiChemicalDrop } from "react-icons/gi";
import { RiFlashlightFill } from "react-icons/ri";
import { GiElectric } from "react-icons/gi";
import { IoDocumentText } from "react-icons/io5";
import { IoCart } from "react-icons/io5";
import { useTranslation } from 'react-i18next';

const MyComponent = styled("div")({
    display: "flex",
    alignItems: "center",
    gap: "4px",
  });
  const Component = styled("div")({
    width: "100%",
    height: "auto",
    display: "flex",
    gap: "30px",
    background: "transparent",
    border: "none",
    marginTop: "20px"
  })

  interface DashFirstComponentProps {
    route: string;
  }
  
  const DashFirstComponent: React.FC<DashFirstComponentProps> = ({ route }) => {
    const { t, i18n } = useTranslation();
  
    React.useEffect(() => {
      if (route === '/rtl') {
        i18n.changeLanguage('ar'); 
      } else {
        i18n.changeLanguage('en'); 
      }
    }, [route, i18n]);

  return (
    <Component id='dashFirstDiv'>
    <Paper
      sx={{
        padding: "17px",
        height: 87,
        display: "flex",
        justifyContent: "space-between",
        background:
          "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%) border-box",
        borderRadius: "20px",
      }}
      className='w-[377px] max-[1440px]:w-full '
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontSize: "12px",
            color: "#a0aec0",
          }}
        >
          {t("Current")}
        </Typography>
        <MyComponent>
          <Typography
            sx={{
              fontSize: "20px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            $53,000
          </Typography>
        </MyComponent>
      </Box>
      <Box
        sx={{
          width: "48px",
          height: "48px",
          background: "#0075ff",
          borderRadius: "15px",
          color: "white",
          fontSize: "24px ",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <GiElectric />
      </Box>
    </Paper>
    <Paper
      sx={{
        padding: "17px",
        height: 87,
        display: "flex",
        justifyContent: "space-between",
        background:
          "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%) border-box",
        borderRadius: "20px",
      }}
     className='w-[377px] max-[1440px]:w-full'
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontSize: "12px",
            color: "#a0aec0",
          }}
        >
          {t("Voltage")}
        </Typography>
        <MyComponent>
          <Typography
            sx={{
              fontSize: "20px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            23,000
          </Typography>
        </MyComponent>
      </Box>
      <Box
        sx={{
          width: "48px",
          height: "48px",
          background: "#0075ff",
          borderRadius: "15px",
          color: "white",
          fontSize: "24px ",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        V
      </Box>
    </Paper>
    <Paper
      sx={{
        padding: "17px",
        height: 87,
        display: "flex",
        justifyContent: "space-between",
        background:
          "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%) border-box",
        borderRadius: "20px",
      }}
      className='w-[377px] max-[1440px]:w-full'
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontSize: "12px",
            color: "#a0aec0",
          }}
        >
        {t("Glucose Concentration")}
        </Typography>
        <MyComponent>
          <Typography
            sx={{
              fontSize: "20px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            +3,462
          </Typography>
        </MyComponent>
      </Box>
      <Box
        sx={{
          width: "48px",
          height: "48px",
          background: "#0075ff",
          borderRadius: "15px",
          color: "white",
          fontSize: "24px ",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <GiChemicalDrop/>
      </Box>
    </Paper>
    <Paper
      sx={{
        padding: "17px",
        height: 87,
        display: "flex",
        justifyContent: "space-between",
        background:
          "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%) border-box",
        borderRadius: "20px",
      }}
      className='w-[377px] max-[1440px]:w-full'
      >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontSize: "12px",
            color: "#a0aec0",
          }}
        >
          {t("Peak Current")}
        </Typography>
        <MyComponent>
          <Typography
            sx={{
              fontSize: "20px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            $103,430
          </Typography>
        </MyComponent>
      </Box>
      <Box
        sx={{
          width: "48px",
          height: "48px",
          background: "#0075ff",
          borderRadius: "15px",
          color: "white",
          fontSize: "24px ",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <RiFlashlightFill />
      </Box>
    </Paper>
    </Component>
  )
}

export default DashFirstComponent
