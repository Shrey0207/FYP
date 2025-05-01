import Footer from "@/components/Footer";
import ProfileComponent from "@/dashboardComponents/ProfileComponent";
import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";
const Profile = () => {
  return (
    <div className="pt-[110px] max-[768px]:pt-[130px] overflow-y-auto w-full h-full px-6 max-[768px]:px-5 ml-[17.125rem] max-[1440px]:ml-0"
    style={{
      transition: "margin-left 300ms cubic-bezier(0.4, 0, 0.2, 1), margin-right 300ms cubic-bezier(0.4, 0, 0.2, 1)",
    }}>
      <div
        style={{
          background:
            "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%) border-box",
        }}
        className="mt-5 py-[22px] px-[24px] w-full h-auto flex items-center justify-between rounded-[20px] max-[768px]:flex-col"
      >
        <div
         className="flex items-center max-[768px]:flex-col max-[768px]:justify-center max-[768px]:mb-2"
        >
          <div
            className="h-[74px] w-[74px] mr-12 max-[768px]:mr-0 max-[768px]:"
          >
            <img src="/box-image.png" alt="image" className="rounded-[15px]" />
          </div>
          <Box>
            <Typography
              sx={{ fontSize: "18px", fontWeight: "600", color: "white" }}
            >
              Mark Johnson
            </Typography>
            <Typography sx={{ fontSize: "14px", color: "#a0aec0" }}>
              mark@simmmple.com
            </Typography>
          </Box>
        </div>
        <div className="w-auto flex max-[1024px]:w-1/2 max-[1024px]:flex-col max-[768px]:w-full">
          <button className="w-[150px] padding-[10px] rounded-[10px] flex justify-center gap-1 bg-blue-500 p-[10px] max-[1024px]:w-full">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              color="white"
              className="MuiTab-iconWrapper"
              height="16px"
              width="16px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M440.9 136.3a4 4 0 000-6.91L288.16 40.65a64.14 64.14 0 00-64.33 0L71.12 129.39a4 4 0 000 6.91L254 243.88a4 4 0 004.06 0zM54 163.51a4 4 0 00-6 3.49v173.89a48 48 0 0023.84 41.39L234 479.51a4 4 0 006-3.46V274.3a4 4 0 00-2-3.46zM272 275v201a4 4 0 006 3.46l162.15-97.23A48 48 0 00464 340.89V167a4 4 0 00-6-3.45l-184 108a4 4 0 00-2 3.45z"></path>
            </svg>
            <p className="text-xs">OVERVIEW</p>
          </button>
          <button className="w-[150px] padding-[10px] rounded-[10px] flex justify-center gap-1 p-[10px] max-[1024px]:w-full">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              color="white"
              className="MuiTab-iconWrapper"
              height="16px"
              width="16px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M428 224H288a48 48 0 01-48-48V36a4 4 0 00-4-4h-92a64 64 0 00-64 64v320a64 64 0 0064 64h224a64 64 0 0064-64V228a4 4 0 00-4-4z"></path>
              <path d="M419.22 188.59L275.41 44.78a2 2 0 00-3.41 1.41V176a16 16 0 0016 16h129.81a2 2 0 001.41-3.41z"></path>
            </svg>
            <p className="text-xs">TEAMS</p>
          </button>
          <button className="w-[150px] padding-[10px] rounded-[10px] flex justify-center gap-1 p-[10px] max-[1024px]:w-full">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              color="white"
              className="MuiTab-iconWrapper"
              height="16px"
              width="16px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M469.54 120.52a16 16 0 00-25.54-4L382.56 178a16.12 16.12 0 01-22.63 0l-26.56-26.6a16 16 0 010-22.63l61.18-61.19a16 16 0 00-4.78-25.92C343.56 21 285.88 31.78 249.51 67.88c-30.9 30.68-40.11 78.62-25.25 131.53a15.89 15.89 0 01-4.49 16L53.29 367.46a64.17 64.17 0 1090.6 90.64l153.68-166.85a15.9 15.9 0 0115.77-4.57 179.3 179.3 0 0046.22 6.37c33.4 0 62.71-10.81 83.85-31.64 39.15-38.57 45.12-103.99 26.13-140.89zM99.48 447.15a32 32 0 1128.34-28.35 32 32 0 01-28.34 28.35z"></path>
            </svg>
            <p className="text-xs">PROJECTS</p>
          </button>
        </div>
      </div>
      {/* ////////////////////////// */}
      <div
      className="flex w-full items-center gap-[30px] mt-10 mb-6 max-[1440px]:flex-col"
       >
        <div
          className="w-[24%] p-[22px] flex flex-col justify-between rounded-[20px] h-[400px] max-[1440px]:h-[376px] max-[1440px]:w-full bg-[url(/welcome-profile-background.webp)] 
          bg-cover bg-no-repeat"
        >
          <Box>
            <Typography sx={{ fontSize: "30px", fontWeight: "600" }}>
              Welcome back!
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>
              Nice to see you, Mark Johnson
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
              Tap to record
            </Typography>
            <span>
              <IoMdArrowRoundForward />
            </span>
          </Box>
        </div>
        {/* /////////// */}
        <Paper
          sx={{
            padding: "22px",
            background:
              "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%) border-box",
            borderRadius: "20px",
          }}
          className="w-1/2 max-[1440px]:w-full"
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ marginBottom: "30px" }}>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "white",
                  fontWeight: "600",
                  marginBottom: "6px",
                }}
              >
                Car Information
              </Typography>
              <Typography sx={{ fontSize: "14px", color: "#a0aec0" }}>
                Hello, Mark Johnson!Your Card is ready.
              </Typography>
            </Box>
            <div className="flex max-[1680px]:flex-col max-[1440px]:flex-row max-[768px]:flex-col">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "270px",
                  paddingTop: "20px",

                }}
              >
                <Box
                  sx={{ width: "170px", height: "170px", position: "relative" }}
                >
                  <CircularProgress
                    variant="determinate"
                    value={68}
                    size={170}
                    style={{
                      rotate: "10deg",
                      position: "relative",
                      color: "#06bd8f",
                      borderRadius: "50%",
                    }}
                  />
                  <Box
                    sx={{
                      width: "82px",
                      height: "85px",
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      textAlign: "center",
                    }}
                  >
                    <img
                      src="/green-lightning.svg"
                      alt=""
                      className="mx-auto"
                    />
                    <Typography
                      sx={{
                        fontSize: "36px",
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      68%
                    </Typography>
                    <Typography sx={{ fontSize: "12px", color: "#a0aec0" }}>
                      Current load
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  sx={{
                    marginTop: "18px",
                    fontSize: "18px",
                    color: "white",
                    fontWeight: "600",
                  }}
                >
                  0h 58 min
                </Typography>
                <Typography sx={{ fontSize: "14px", color: "#a0aec0" }}>
                  Time to full charge
                </Typography>
              </Box>
              <div className="h-auto w-full grid grid-cols-2 ml-[50px] mt-6 gap-6 max-[1680px]:ml-0 max-[1680px]:gap-4 max-[1440px]:ml-6 max-[768px]:ml-0 max-[768px]:grid-cols-1">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "18px",
                    borderRadius: "20px",
                    width: "100%",
                    height: "111px",
                    background:
                      "linear-gradient(126.97deg, rgb(6, 11, 40) 28.26%, rgb(10, 14, 35) 91.2%)",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "#a0aec0",
                        fontWeight: "600",
                      }}
                    >
                      Battery Health
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "24px",
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      76%
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "56px",
                      height: "56px",
                      background: "#0075ff",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img src="/car-profile.svg" alt="" />
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "18px",
                    borderRadius: "20px",
                    width: "100%",
                    height: "111px",
                    background:
                      "linear-gradient(126.97deg, rgb(6, 11, 40) 28.26%, rgb(10, 14, 35) 91.2%)",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "#a0aec0",
                        fontWeight: "600",
                      }}
                    >
                      Efficiency
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "24px",
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      +20%
                    </Typography>
                  </Box>
                  <img src="/green-graph-line.svg" alt="" />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "18px",
                    borderRadius: "20px",
                    width: "100%",
                    height: "111px",
                    background:
                      "linear-gradient(126.97deg, rgb(6, 11, 40) 28.26%, rgb(10, 14, 35) 91.2%)",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "#a0aec0",
                        fontWeight: "600",
                      }}
                    >
                      Consumption
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "24px",
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      163W/km
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "56px",
                      height: "56px",
                      background: "#0075ff",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img src="/white-lightning.svg" alt="" />
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "18px",
                    borderRadius: "20px",
                    width: "100%",
                    height: "111px",
                    background:
                      "linear-gradient(126.97deg, rgb(6, 11, 40) 28.26%, rgb(10, 14, 35) 91.2%)",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "#a0aec0",
                        fontWeight: "600",
                      }}
                    >
                      This week
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "24px",
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      1.342km
                    </Typography>
                  </Box>
                  <img src="/blue-graph-line.svg" alt="" />
                </Box>
              </div>
            </div>
          </Box>
        </Paper>
        {/* /////////// */}
        <div
          style={{
            background:
              "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%) border-box",
          }}
          className="w-[24%] p-[22px] rounded-[20px] max-[1440px]:w-full"
        >
          <Typography sx={{fontSize: "18px", fontWeight: "600", color: "white", marginBottom: "16px"}}>Profile Information</Typography>
          <Typography sx={{fontSize: "14px", color: "#a0aec0", marginBottom: "32px"}}>
            Hi, I’m Mark Johnson, Decisions: If you can’t decide, the answer is
            no. If two equally difficult paths, choose the one more painful in
            the short term (pain avoidance is creating an illusion of equality).
          </Typography>
          <Box sx={{display: "flex",gap: "6px", paddingY: "8px", paddingRight: "16px"}}>
            <Typography sx={{fontSize: "14px", color: "#a0aec0"}}>Full Name:</Typography>
            <Typography sx={{fontSize: "14px"}}>Mark Johnson</Typography>
          </Box>
          <Box sx={{display: "flex",gap: "6px", paddingY: "8px", paddingRight: "16px"}}>
          <Typography sx={{fontSize: "14px", color: "#a0aec0"}}>Mobile:</Typography>
          <Typography sx={{fontSize: "14px"}}>(44) 123 1234 123</Typography>
          </Box>
          <Box sx={{display: "flex",gap: "6px", paddingY: "8px", paddingRight: "16px"}}>
          <Typography sx={{fontSize: "14px", color: "#a0aec0"}}>Email: </Typography>
          <Typography sx={{fontSize: "14px"}}> mark@simmmple.com</Typography>
          </Box>
          <Box sx={{display: "flex",gap: "6px", paddingY: "8px", paddingRight: "16px"}}>
          <Typography sx={{fontSize: "14px", color: "#a0aec0"}}>Location:</Typography>
          <Typography sx={{fontSize: "14px"}}>United States</Typography>
          </Box> 
          <Box sx={{display: "flex",gap: "6px", paddingY: "8px", paddingRight: "16px"}}>
          <Typography sx={{fontSize: "14px", color: "#a0aec0"}}>Social:</Typography>
          <Box sx={{display: "flex", alignItems: "center", gap: "6px"}}>
          <AiFillFacebook />
          <FaTwitter/>
          <FaInstagram/>
          </Box>
          </Box>
        </div>
      </div>
      <ProfileComponent/>
      <Footer/>
    </div>
  );
};

export default Profile;
