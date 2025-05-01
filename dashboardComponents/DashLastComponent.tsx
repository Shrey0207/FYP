'use client'

import {
  Avatar,
  Box,
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { AvatarGroup } from "@mui/material"
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { DASH_LAST_DATA } from "@/constants/DashboardLastComponent";
import { useTranslation } from "react-i18next";

interface DashComponentProps {
  route: string;
}

const DashLastComponent: React.FC<DashComponentProps> = ({ route }) => {
  const dashData = DASH_LAST_DATA;
  const { t, i18n } = useTranslation();
    
  React.useEffect(() => {
    if (route === '/rtl') {
      i18n.changeLanguage('ar'); 
    } else {
      i18n.changeLanguage('en'); 
    }
  }, [route, i18n]);

  return (
    <div
      className="w-full h-auto mt-6 flex items-center gap-[30px] mb-6 max-[768px]:flex-col"
    >
      <Paper
        sx={{
          padding: "24px",
          background:
            "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%) border-box",
          height: "auto",
          borderRadius: "20px",
        }}
        className="lastBoxOne w-[65%] max-[768px]:w-full max-[1024px]:w-1/2 max-[1024px]:overflow-x-auto"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "32px",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "18px",
                color: "white",
                fontWeight: "600",
              }}
            >
              {t("Projects")}
            </Typography>
            <Box
              sx={{
                color: "green",
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <FaCheckCircle />
              <Typography
                sx={{ color: "#a0aec0", fontSize: "14px", fontWeight: "600" }}
              >
                30 {t("done this month")}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ color: "#a0aec0", paddingX: "16px" }}>
            <SlOptionsVertical />
          </Box>
        </Box>
        {/* /// */}
        <Box sx={{ width: "100%" }}>
          <Table sx={{ width: "100%", color: "white" }} className="dashTable">
            <TableHead>
              <TableRow>
                <TableCell
                align="center"
                  sx={{ color: "#a0aec0", fontSize: "12px", fontWeight: "600" , borderBottom: "1px solid #2d3748" }}
                >
                  {t("COMPANIES")}
                </TableCell>
                <TableCell
                  sx={{ color: "#a0aec0", fontSize: "12px", fontWeight: "600" , borderBottom: "1px solid #2d3748"}}
                >
                  {t("MEMBERS")}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "#a0aec0", fontSize: "12px", fontWeight: "600" , borderBottom: "1px solid #2d3748"}}
                >
                  {t("BUDGET")}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "#a0aec0", fontSize: "12px", fontWeight: "600" , borderBottom: "1px solid #2d3748"}}
                >
                  {t("COMPLETION")}
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {dashData.categories.BoxOne.map((item, index: number) => (
                <TableRow sx={{ height: "57px" }} key={index}>
                  <TableCell sx={{
                     borderBottom: "1px solid #2d3748"
                  }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                      }}
                    >
                      <img src={item.images} alt="tables images" />
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "white",
                        }}
                      >
                        {t(`dashData.boxOne.item${index + 1}.name`)} 
                      </Typography>
                    </Box>
                  </TableCell>

                  <TableCell align="left" 
                  sx={{
                    borderBottom: "1px solid #2d3748"
                 }}>
                    <AvatarGroup>
                      {item.avatar.map((imgSrc, idx) => (
                        <Avatar
                          key={idx}
                          sx={{
                            width: "20px",
                            height: "20.5px",
                          }}
                          alt={`Avatar ${idx}`}
                          src={imgSrc}
                        />
                      ))}
                    </AvatarGroup>
                  </TableCell>

                  <TableCell align="center" sx={{ padding: "8px" , borderBottom: "1px solid #2d3748"}} 
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      {item.budget}
                    </Typography>
                  </TableCell>

                  <TableCell
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      padding: "16.8px",
                      borderBottom: "1px solid #2d3748"
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{ fontWeight: "600", fontSize: "14px" }}
                        className=" text-white"
                      >
                        {item.completion}
                      </Typography>
                      <LinearProgress
                        sx={{
                          borderRadius: "20px",
                          background: "#2d2e5f",
                          height: "6px",
                          width: "128px",
                          marginX: "auto",
                        }}
                        variant="determinate"
                        value={item.percentage}
                      />
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Paper>
      {/* ///////////////////////////////////////////// */}
      <Paper
      className=" w-[33%] max-[1024px]:w-1/2 max-[768px]:w-full"
        sx={{
          paddingY: "28px",
          paddingX: "17px",
          background:
            "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%) border-box",
          borderRadius: "20px",
        }}
      >
        <Box
          sx={{
            marginBottom: "32px",
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              color: "white",
              fontWeight: "600",
            }}
          >
            {t("Orders overview")}
          </Typography>
          <Box
            sx={{
              color: "green",
              fontSize: "15px",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <FaCheckCircle />
            <Typography
              sx={{ color: "#a0aec0", fontSize: "14px", fontWeight: "600" }}
            >
              +30% {t("this month")}
            </Typography>
          </Box>
        </Box>

        {/* /////////////// */}

        {dashData.categories.BoxTwo.map((item, index: number) => (
          <div key={index}>
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                marginBottom: "29px",
              }}
              color={item.color}
            >
              <div className="mt-1">{item.icon}</div>
              <Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "white",
                    fontWeight: "600",
                  }}
                >
                  {t(`dashData.boxTwo.item${index + 1}.title`)}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#a0aec0",
                  }}
                >
                  {item.orderDate}
                </Typography>
              </Box>
            </Box>
          </div>
        ))}
      </Paper>
    </div>
  );
};

export default DashLastComponent;
