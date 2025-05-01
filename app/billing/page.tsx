import { Box, Grid2, Paper, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { SlOptions } from "react-icons/sl";
import { HiPencil } from "react-icons/hi2";
import { IoDocumentText } from "react-icons/io5";
import { BILLING_DATA } from "@/constants/billingData";
import { FaCalendarAlt, FaTrash } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";
import Footer from "@/components/Footer";

interface BoxThreeItems {
  name: string;
  date: string;
  price: string;
  borderColor: string;
  icon: React.JSX.Element;
  textColor: string;
}

const Billig = () => {
  const boxOneData = BILLING_DATA || [];
  return (
    <div className="pt-[110px] max-[768px]:pt-[130px] overflow-y-auto w-full h-full px-6 max-[768px]:px-5 ml-[17.125rem] max-[1440px]:ml-0"
    style={{
      transition: "margin-left 300ms cubic-bezier(0.4, 0, 0.2, 1), margin-right 300ms cubic-bezier(0.4, 0, 0.2, 1)",
    }}>
    <div
        style={{
          display: "flex",
          width: "100%",
          height: "auto",
          gap: "30px",
          marginBottom: "24px",
          marginTop: "20px"
        }}
        className="billingMainDiv"
      >
        <div className="billingMainDivTwo w-[75%] gap-[24px]">
          <div
            className="billingDivOne w-full flex items-center mb-[28px] gap-[24px] max-[1440px]:flex-col"
          >
            <Grid2
              sx={{
                width: "100%",
                padding: "22px",
                backgroundImage: "url(/billing-background-card.webp)",
                borderRadius: "20px",
                position: "relative",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
            >
              <div
                className="px-4 pb-4 w-full max-[600px]:px-0"
              >
                <div
                  className="flex items-center justify-between"
                >
                  <Typography
                    sx={{ fontSize: "18px", fontWeight: "600", color: "white" }}
                  >
                    Vision UI
                  </Typography>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    color="white"
                    height="48px"
                    width="48px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M12 6.654a6.786 6.786 0 0 1 2.596 5.344A6.786 6.786 0 0 1 12 17.34a6.786 6.786 0 0 1-2.596-5.343A6.786 6.786 0 0 1 12 6.654zm-.87-.582A7.783 7.783 0 0 0 8.4 12a7.783 7.783 0 0 0 2.728 5.926 6.798 6.798 0 1 1 .003-11.854zm1.742 11.854A7.783 7.783 0 0 0 15.6 12a7.783 7.783 0 0 0-2.73-5.928 6.798 6.798 0 1 1 .003 11.854z"></path>
                    </g>
                  </svg>
                </div>
                <Typography
                  sx={{
                    marginTop: "70px",
                    paddingBottom: "8px",
                    fontSize: "24px",
                    fontWeight: "600",
                    color: "white",
                  }}
                  className="cardDetail"
                >
                  7812 2139 0823 7916
                </Typography>
                <Box>
                  <Box>
                    <Typography sx={{ fontSize: "10px", fontWeight: "600" }}>
                      VALID THRU
                    </Typography>
                    <Typography sx={{ fontWeight: "600" }}>05/24</Typography>
                  </Box>
                  <Box></Box>
                </Box>
              </div>
            </Grid2>
            {/* ///////////////// */}
            <Grid2
              sx={{
                borderRadius: "20px",
                padding: "30px",
                background:
                  "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%) border-box",
                  width: "100%"
              }}
            >
              <Box
                sx={{
                  padding: "20px",
                  backgroundImage: "url(/grid2-background.png)",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  borderRadius: "18px",
                  marginBottom: "32px",
                }}
              >
                <div
                  className="flex items-center justify-between"
                >
                  <Typography
                    sx={{ fontSize: "12px", fontWeight: "600", color: "white" }}
                  >
                    Credit Balance
                  </Typography>
                  <Typography>
                    <SlOptions />
                  </Typography>
                </div>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <p
                    style={{
                      lineHeight: "46px",
                    }}
                    className="text-[36px] font-semibold text-white max-[768px]:text-[28px]"
                  >
                    $25,215
                  </p>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Image
                      src="/graph-billing.svg"
                      width={58}
                      height={20}
                      alt="hii"
                    />
                  </Box>
                </Box>
              </Box>
              <Typography
                sx={{
                  fontSize: "10px",
                  color: "#a0aec0",
                  fontWeight: "600",
                  marginBottom: "8px",
                }}
              >
                NEWEST
              </Typography>
              <div
                className="flex items-center justify-between"
              >
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <Box
                    sx={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "50%",
                      background: "#22294eb3",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="rgb(1, 181, 116)"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      color="#01b574"
                      height="20px"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0V0z"></path>
                      <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"></path>
                    </svg>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <span className="text-[14px] font-semibold">
                      Bill & Taxes
                    </span>
                    <span className="text-[14px] font-semibold text-[#a0aec0]">
                      Today, 16:36
                    </span>
                  </Box>
                </Box>
                <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
                  -$154.50
                </Typography>
              </div>
            </Grid2>
          </div>
          {/* //////////////////// */}
          <Grid2
            sx={{
              width: "100%",
              padding: "20px",
              borderRadius: "20px",
              background:
                "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%) border-box",
            }}
          >
            <div
              className="flex items-center justify-between mb-8 w-full max-[400px]:flex-col"
            >
              <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                Payment Method
              </Typography>
              <button className="w-[141px] h-10 bg-[#0075ff] rounded-xl text-white text-xs font-semibold">
                ADD NEW CARD
              </button>
            </div>
            <div
              className="flex items-center justify-between w-full gap-6 max-[768px]:flex-col"
            >
              <Box
                sx={{
                  paddingY: "22px",
                  paddingX: "20px",
                  border: "2px solid rgb(74, 85, 104)",
                  display: "flex",
                  borderRadius: "20px",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <svg
                    width="21px"
                    viewBox="0 0 21 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="6.63158"
                      cy="7.49999"
                      r="6.63158"
                      fill="#EB001B"
                    ></circle>
                    <circle
                      cx="14.3685"
                      cy="7.49999"
                      r="6.63158"
                      fill="#F79E1B"
                    ></circle>
                  </svg>
                  <span className="ml-4 font-semibold">
                    7812 2139 0823 XXXX
                  </span>
                </Box>
                <HiPencil />
              </Box>
              <Box
                sx={{
                  paddingY: "22px",
                  paddingX: "20px",
                  border: "2px solid rgb(74, 85, 104)",
                  display: "flex",
                  borderRadius: "20px",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <svg
                    width="25px"
                    viewBox="0 0 25 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.6708 2.96349C12.6568 4.15055 13.653 4.81298 14.4034 5.20684C15.1744 5.61099 15.4333 5.87013 15.4304 6.23147C15.4245 6.78459 14.8153 7.02862 14.2452 7.03812C13.2505 7.05475 12.6723 6.74889 12.2125 6.51753L11.8542 8.32341C12.3155 8.55247 13.1696 8.75217 14.0554 8.76087C16.1345 8.76087 17.4947 7.65543 17.5021 5.94145C17.5102 3.76625 14.7087 3.64579 14.7278 2.67348C14.7344 2.37871 14.9956 2.06408 15.568 1.98406C15.8512 1.94368 16.6332 1.91274 17.5198 2.35252L17.8677 0.605286C17.391 0.418253 16.7782 0.239136 16.0153 0.239136C14.0583 0.239136 12.6819 1.35962 12.6708 2.96349V2.96349ZM21.2115 0.389687C20.8319 0.389687 20.5118 0.628245 20.3691 0.99433L17.3991 8.63249H19.4767L19.8901 7.40183H22.429L22.6689 8.63249H24.5L22.902 0.389687H21.2115ZM21.5021 2.61641L22.1016 5.7116H20.4596L21.5021 2.61641ZM10.1518 0.389687L8.51418 8.63249H10.4939L12.1308 0.389687H10.1518ZM7.22303 0.389687L5.16233 6.00003L4.32878 1.22966C4.23097 0.697187 3.84472 0.389687 3.41579 0.389687H0.0471011L0 0.629037C0.691574 0.790671 1.47729 1.0514 1.95326 1.33033C2.24457 1.50067 2.32775 1.64964 2.42336 2.05458L4.00214 8.63249H6.0945L9.3021 0.389687H7.22303Z"
                      fill="white"
                    ></path>
                  </svg>
                  <span className="ml-4 font-semibold">
                    7812 2139 0823 XXXX
                  </span>
                </Box>
                <HiPencil />
              </Box>
            </div>
          </Grid2>
        </div>
        {/* /////////////// */}
        <div
        className="billingDivTwo w-[511px]"
          style={{
            background:
              "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%) border-box",
            height: "auto",
            borderRadius: "20px",
            padding: "22px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "28px",
              width: "100%",
            }}
          >
            <Typography sx={{ fontWeight: "600" }}>Invoices</Typography>
            <button className="w-[120px] h-8 bg-[#0075ff] rounded-xl text-white text-xs font-semibold">
              VIEW ALL
            </button>
          </Box>
          {boxOneData.categories?.BoxOne?.map((item, index: number) => (
            <Box key={index}>
              <Box
                sx={{
                  marginBottom: "31px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
                    {item.invoiceDate}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#a0aec0",
                      marginTop: "4px",
                    }}
                  >
                    {item.serialNumber}
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", gap: "15px", alignItems: "center" }}
                >
                  <Typography sx={{ fontSize: "14px", color: "#a0aec0" }}>
                    {item.price}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      fontWeight: "600",
                      gap: "3px",
                    }}
                  >
                    <IoDocumentText />
                    <Typography sx={{ fontSize: "14px", color: "#a0aec0" }}>
                      PDF
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </div>
      </div>
      {/* /////////////// */}
      <div
        className="flex items-center h-auto w-full gap-6 max-[1024px]:flex-col"
       >
        <Paper
          sx={{
            height: "auto",
            borderRadius: "20px",
            padding: "22px",
            background:
              "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%) border-box",
          }}
          className="max-[1024px]:w-full w-[57%]"
        >
          <Box sx={{ color: "white", fontSize: "18px", fontWeight: "600" }}>
            Billing Information
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "auto",
              marginTop: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "48px",
            }}
          >
            {boxOneData.categories?.BoxTwo?.map((item, index: number) => (
              <Box
                sx={{
                  width: "100%",
                  height: "auto",
                  padding: "24px",
                  background:
                    "linear-gradient(127.09deg, rgba(24, 29, 60, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)",
                  borderRadius: "20px",
                }}
                key={index}
              >
                <Box
                  sx={{
                    display: "flex",
                    height: "33px",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "5px",
                  }}
                >
                  <Typography
                    sx={{ fontSize: "14px", fontWeight: "600", color: "white", marginRight: "6px" }}
                  >
                    {item.name}
                  </Typography>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "2px",
                        color: "#e31a1a",
                        fontSize: "12px",
                        "&:hover": {
                          cursor: "pointer",
                          color: "#ce4747",
                        },
                      }}
                    >
                      <FaTrash />
                      <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
                        DELETE
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "2px",
                        color: "#a0aec0",
                        fontSize: "12px",
                        "&:hover": {
                          cursor: "pointer",
                          color: "white",
                        },
                      }}
                    >
                      <RiPencilFill />
                      <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
                        EDIT
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    fontSize: "12px",
                    color: "#a0aec0",
                  }}
                >
                  <span>Company Name:</span>
                  <span>{item.companyName}</span>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    fontSize: "12px",
                    color: "#a0aec0",
                  }}
                >
                  <span>Email Address:</span>
                  <span>{item.emailAdress}</span>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    fontSize: "12px",
                    color: "#a0aec0",
                  }}
                >
                  <span>VAT Number:</span>
                  <span>{item.vatNumbet}</span>
                </Box>
              </Box>
            ))}
          </Box>
        </Paper>
        {/* /////////// */}
        <Paper
          sx={{
            height: "100%",
            borderRadius: "20px",
            background:
              "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%) border-box",
            paddingTop: "22px",
            paddingLeft: "22px",
            paddingRight: "22px",
            paddingBottom: "70px",
          }}
          className="max-[1024px]:w-full w-[40%]"
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "18px",
            }}
          >
            <Typography
              sx={{ fontSize: "18px", fontWeight: "600", color: "white" }}
            >
              Your Transaction's
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                color: "white",
              }}
            >
              <FaCalendarAlt />
              <Typography sx={{ color: "#a0aec0", fontSize: "14px" }}>
                23 - 30 March 2020
              </Typography>
            </Box>
          </Box>

          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "600",
              color: "#a0aec0",
              marginBottom: "16px",
              height: "32px"
            }}
          >
            NEWEST
          </Typography>
          {boxOneData.categories?.BoxThreeOne?.map(
            (item: BoxThreeItems, index: number) => (
              <Box
                sx={{
                  width: "100%",
                  marginBottom: "8px",
                  paddingTop: "8px",
                  paddingRight: "16px",
                  paddingBottom: "8px",
                  height: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                key={index}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <div
                    className={`w-[35px] h-[35px] rounded-full border border-[${item.borderColor}] mr-[16px] flex items-center justify-center text-[${item.textColor}]`}
                  >
                    {item.icon}
                  </div>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography sx={{ fontSize: "12px", color: "#a0aec0" }}>
                      {item.date}
                    </Typography>
                  </Box>
                </Box>
                <p className={`text-[14px] text-[${item.textColor}]`}>{item.price}</p>
              </Box>
            )
          )}

          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "600",
              color: "#a0aec0",
              marginBottom: "18px",
              height: "32px",
              paddingTop: "18px"
            }}
          >
            YESTERDAY
          </Typography>
          {boxOneData.categories?.BoxThreeTwo?.map(
            (item: BoxThreeItems, index: number) => (
              <Box
                sx={{
                  width: "100%",
                  marginBottom: "8px",
                  paddingTop: "8px",
                  paddingRight: "16px",
                  paddingBottom: "8px",
                  height: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                key={index}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <div
                    className={`w-[35px] h-[35px] rounded-full border border-[${item.borderColor}] mr-[16px] flex items-center justify-center text-[${item.textColor}]`}
                  >
                    {item.icon}
                  </div>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography sx={{ fontSize: "12px", color: "#a0aec0" }}>
                      {item.date}
                    </Typography>
                  </Box>
                </Box>
                <p className={`text-[14px] text-[${item.textColor}]`}>{item.price}</p>
              </Box>
            )
          )}
        </Paper>
      </div>
      <Footer/>
    </div>
  );
};

export default Billig;
