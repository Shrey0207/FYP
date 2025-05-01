import {
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
import Image from "next/image";
import React from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { TABLES_DATA } from "@/constants/tablesData"
import Footer from "@/components/Footer";

const Tables = () => {
  const tablesData = TABLES_DATA;
  return (
    <div className="pt-[110px] max-[768px]:pt-[130px] overflow-y-auto w-full h-full px-6 max-[768px]:px-5 pb-6 ml-[17.125rem] max-[1440px]:ml-0"
    style={{
      transition: "margin-left 300ms cubic-bezier(0.4, 0, 0.2, 1), margin-right 300ms cubic-bezier(0.4, 0, 0.2, 1)",
    }}>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          marginTop: "20px"
        }}
      >
        <Paper
          sx={{
            width: "100%",
            background:
              "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%) border-box",
            padding: "22px",
            borderRadius: "20px",
            overflowX: "auto"
          }}
        >
          <Box
            sx={{
              width: "100%",
              marginBottom: "22px",
            }}
          >
            <Typography
              className=" text-white"
              sx={{ fontWeight: "600", fontSize: "18px" }}
            >
              Authors table
            </Typography>
          </Box>
          <Table sx={{ width: "100%", color: "white" }}>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ color: "#a0aec0", fontSize: "11px", fontWeight: "600", borderBottom: "1px solid #2d3748", paddingLeft:"0px" }}
                >
                  AUTHOR
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ color: "#a0aec0", fontSize: "11px", fontWeight: "600", borderBottom: "1px solid #2d3748" }}
                >
                  FUNCTION
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "#a0aec0", fontSize: "11px", fontWeight: "600" , borderBottom: "1px solid #2d3748"}}
                >
                  STATUS
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "#a0aec0", fontSize: "11px", fontWeight: "600" , borderBottom: "1px solid #2d3748"}}
                >
                  EMPLOYED
                </TableCell>
                <TableCell
                  align="center"
                  
                  sx={{ color: "#a0aec0", fontSize: "11px", fontWeight: "600", borderBottom: "1px solid #2d3748" }}
                >
                  ACTION
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

                {tablesData.categories.FirstTableData.map((item, index: number) => (
                  <TableRow key={index}>
                    <TableCell 
                    sx={{
                        paddingLeft: "0px",
                        borderBottom: "1px solid #2d3748"
                    }}>
                        <div
                        style={{ display: "flex" }}
                        className="max-[768px]:w-[200px]">
                            <Box sx={{marginRight: "16px"}}>
                                <Image
                                className="rounded-xl"
                                src={item.avatar}
                                alt=""
                                width="36"
                                height="36"/>
                            </Box>
                            <Box>
                            <Typography sx={{fontSize: "14px", color: "white", fontWeight: "600"}}>
                                {item.authorName}
                            </Typography>
                            <Typography
                            sx={{color: "#a0aec0", fontSize: "12px"}}>
                                {item.authorEmail}
                            </Typography>
                            </Box>

                        </div>
                    </TableCell>
                    <TableCell sx={{
                      borderBottom: "1px solid #2d3748"
                    }}>
                        <Box>
                        <Typography sx={{fontSize: "12px", color: "white", fontWeight: "600"}}>
                                {item.destination}
                            </Typography>
                            <Typography
                            sx={{color: "#a0aec0", fontSize: "12px"}}>
                            {item.role}
                            </Typography>
                        </Box>
                    </TableCell>
                    <TableCell
                    sx={{
                      borderBottom: "1px solid #2d3748"
                    }}
                    align="center">
                        <span className={`${item.status === "Online" ? "bg-[#01b574]" : "bg-transparent border"} bg-[#01b574] text-[11px] text-white pt-[5.98px] px-[8.06px] pb-[4.16px] rounded-lg`}
                        >
                            {item.status}
                        </span>
                    </TableCell>
                    <TableCell align="center" sx={{fontSize: "12px", color: "white", fontWeight: "600", borderBottom: "1px solid #2d3748"}}>{item.date}</TableCell>
                    <TableCell sx={{fontSize: "12px", color: "#a0aec0", fontWeight: "600", borderBottom: "1px solid #2d3748"}} align="center">Edit</TableCell>

                </TableRow>        
                ))
                 }                      
            </TableBody>
          </Table>
        </Paper>
        {/* ////////////////// */}
        <Paper
         sx={{
            width: "100%",
            background:
              "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%) border-box",
            padding: "22px",
            borderRadius: "20px",
            overflowX: "auto"
          }}
        >
            <Box
            sx={{
              width: "100%",
              marginBottom: "22px",
            }}
          >
            <Typography
              className=" text-white"
              sx={{ fontWeight: "600", fontSize: "18px" }}
            >
              Projects table
            </Typography>
          </Box>
          <Table sx={{ width: "100%", color: "white" }}>

            <TableHead>
                <TableRow>
                <TableCell
                  sx={{ color: "#a0aec0", fontSize: "11px", fontWeight: "600", borderBottom: "1px solid #2d3748", paddingLeft:"0px" }}
                >
                  PROJECT
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ color: "#a0aec0", fontSize: "11px", fontWeight: "600", borderBottom: "1px solid #2d3748" }}
                >
                  BUDGET
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "#a0aec0", fontSize: "11px", fontWeight: "600" , borderBottom: "1px solid #2d3748"}}
                >
                  STATUS
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "#a0aec0", fontSize: "11px", fontWeight: "600" , borderBottom: "1px solid #2d3748"}}
                >
                  COMPLETION
                </TableCell>
                <TableCell
                  align="center"
                  
                  sx={{ color: "#a0aec0", fontSize: "11px", fontWeight: "600", borderBottom: "1px solid #2d3748" }}
                >
                  ACTION
                </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {
              tablesData.categories.SecondTableData.map((item, index: number) => (

              <TableRow sx={{ height: "57px" }} key={index}>
                <TableCell sx={{borderBottom: "1px solid #2d3748"}}>
                  <div
                    style={{ display: "flex", alignItems: "center", height: "62px"}}
                    className="max-[768px]:w-[215px]"
                  >
                    <Box sx={{marginRight: "16px"}}>
                                <img
                                className="rounded-xl w-5 h-5"
                                src={item.icon}
                                alt="lll"
                                />
                            </Box>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "white",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </div>
                </TableCell>

                <TableCell align="left" sx={{ padding: "8px", borderBottom: "1px solid #2d3748" }}>
                  <Typography
                    sx={{ fontSize: "14px", color: "white", fontWeight: "600" }}
                  >
                    {item.budget}
                  </Typography>
                </TableCell>

                <TableCell align="center" sx={{color: "white", fontSize: "14px", fontWeight: "600", borderBottom: "1px solid #2d3748"}}>
                  {item.status}
                </TableCell>

                <TableCell align="center" sx={{  borderBottom: "1px solid #2d3748"}}>
                  <Box>
                    <Typography
                      sx={{ fontWeight: "600", fontSize: "14px" }}
                      className=" text-white"
                    >
                      {item.completition}
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
                <TableCell align="center" sx={{color: "#a0aec0", borderBottom: "1px solid #2d3748"}}>
                 <SlOptionsVertical/>
                </TableCell>
              </TableRow>
              ))
              }              
            </TableBody>
          </Table>
        </Paper>
        <Footer/>
      </Box>
    </div>
  );
};

export default Tables;
