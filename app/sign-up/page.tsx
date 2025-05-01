"use client";

import AuthPagesNavbar from "@/utils/AuthPagesNavbar";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import AuthPagesFooter from "@/utils/AuthPagesFooter";
import { getAuth } from "firebase/auth";
import AuthResponsiveNav from "@/utils/AuthResponsiveNav";

const SignUp = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openResNav, setOpenResNav] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        router.push("/sign-in");
        toast.success("Signed up successfully 🎉", {
          position: "top-right",
          autoClose: 2000,
        });
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-right",
          autoClose: 2000,
        });
      });
  };
const auth = getAuth();

const handleOpenResNav = () => {
  setOpenResNav(!openResNav);
};

  return (
    <div className="w-full h-auto flex items-center gap-0 overflow-y-auto">
      <AuthPagesNavbar handleOpenResNav={handleOpenResNav} openResNav={openResNav} />
      {openResNav && <AuthResponsiveNav />}
      <div
        style={{
          backgroundImage: "url(/sign-up-background.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="w-1/2 h-full max-[1024px]:hidden"
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center"
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              color: "white",
              letterSpacing: "8px",
              marginBottom: "8px",
            }}
          >
            INSPIRED BY THE FUTURE:
          </Typography>
          <Typography
            sx={{
              fontSize: "36px",
              fontWeight: "600",
              color: "white",
              letterSpacing: "8px",
              marginBottom: "8px",
            }}
          >
            THE VISION UI DASHB
            <span className="opacity-[0.7]">O</span>
            <span className="opacity-[0.5]">ARD</span>
          </Typography>
        </Box>
      </div>
      {/* ////////////////////////// */}
      <div
        style={{
          background:
            "linear-gradient(159.02deg, rgb(15, 18, 59) 14.25%, rgb(9, 13, 46) 56.45%, rgb(2, 5, 21) 86.14%) transparent",
        }}
        className="w-1/2 overflow-y-auto overflow-x-none h-full max-[1024px]:w-full max-[1024px]:flex max-[1024px]:justify-center"
      >
        <div 
        className="mr-[100px] w-[450px] h-full mt-[160px] max-[768px]:mt-[90px] ml-[65px] flex flex-col max-[1024px]:mx-auto max-[768px]:w-full"
        >
          <div
          className="pt-6 px-6 mx-[50px] w-auto mb-[35px] max-[1024px]:mb-0 max-[480px]:mx-0"
          >
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "600",
                marginBottom: "10px",
                textAlign: "center",
                lineHeight: "35px",
              }}
            >
              Welcome!
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              Use these awesome forms to login or create new account in your
              project for free.
            </Typography>
          </div>

          <div
          className="w-full px-6 mt-[60px] max-[768px]:mt-10 mb-[50px] h-auto max-[480px]:mx-0"
          >
            <div
              style={{
                background: "rgb(19, 21, 56)",
                border: "2px solid transparent",
                borderImage:
                  "radial-gradient(94.43% 69.43% at 50% 50%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%) 1",
                overflow: "hidden",
              }}
              className="w-full h-auto p-[45px] rounded-[20px] max-[768px]:p-5"
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "white",
                  fontWeight: "600",
                  textAlign: "center",
                  marginBottom: "24px",
                }}
              >
                Register with
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "25px",
                }}
              >
                <button
                  className="w-[74px] h-[74px] max-[768px]:w-[60px] max-[768px]:h-[60px] max-[768px]:p-4 border-2 p-6 border-transparent text-[22px]"
                  style={{
                    borderImage:
                      "radial-gradient(94.43% 69.43% at 50% 50%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%) 1",
                    overflow: "hidden",
                  }}
                >
                  <FaFacebook />
                </button>
                <button
                  className="w-[74px] h-[74px] max-[768px]:w-[60px] max-[768px]:h-[60px] max-[768px]:p-4 border-2 p-6 border-transparent text-[22px] ml-4"
                  style={{
                    borderImage:
                      "radial-gradient(94.43% 69.43% at 50% 50%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%) 1",
                    overflow: "hidden",
                  }}
                >
                  <FaApple />
                </button>
                <button
                  className="w-[74px] h-[74px] max-[768px]:w-[60px] max-[768px]:h-[60px] max-[768px]:p-4 border-2 p-6 border-transparent text-[22px] ml-4"
                  style={{
                    borderImage:
                      "radial-gradient(94.43% 69.43% at 50% 50%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%) 1",
                    overflow: "hidden",
                  }}
                >
                  <FaGoogle />
                </button>
              </Box>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#a0aec0",
                  marginBottom: "14px",
                  textAlign: "center",
                }}
              >
                or
              </Typography>
              {/* /////////////// */}
              <Box
                sx={{
                  width: "full",
                  height: "auto",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <label
                    htmlFor="nameInput"
                    className="text-sm font-semibold mb-2 ml-1 h-8 pt-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="nameInput"
                    className="w-[300px] max-[768px]:w-full h-10 rounded-[15px] bg-[rgb(15, 21, 53)] py-2 px-3 text-sm active:outline-[1px] outline-blue-400 placeholder:text-xs"
                    style={{
                      border: "2px solid rgb(74, 85, 104)",
                    }}
                    placeholder="Your full name..."
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "24px",
                  }}
                >
                  <label
                    htmlFor="emailInput"
                    className="text-sm font-semibold mb-2 ml-1 h-8 pt-1"
                  >
                    Email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    type="email"
                    id="emailInput"
                    className="w-[300px] max-[768px]:w-full h-10 rounded-[15px] bg-[rgb(15, 21, 53)] py-2 px-3 text-sm active:outline-[1px] outline-blue-400 placeholder:text-xs"
                    style={{
                      border: "2px solid rgb(74, 85, 104)",
                    }}
                    placeholder="Your email..."
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "24px",
                  }}
                >
                  <label
                    htmlFor="passwordInput"
                    className="text-sm font-semibold mb-2 ml-1 h-8 pt-1"
                  >
                    Password
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    type="password"
                    id="passwordInput"
                    className="w-[300px] max-[768px]:w-full h-10 rounded-[15px] bg-[rgb(15, 21, 53)] py-2 px-3 text-sm active:outline-[1px] outline-blue-400 placeholder:text-xs"
                    style={{
                      border: "2px solid rgb(74, 85, 104)",
                    }}
                    placeholder="Your password..."
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "20px",
                  }}
                >
                  <div className="relative inline-block w-10 h-5 mr-2">
                    <input
                      type="checkbox"
                      id="toggle"
                      className="sr-only peer"
                      defaultChecked
                    />
                    <label
                      htmlFor="toggle"
                      className="block w-10 h-5 bg-transparent border border-gray-700 rounded-full cursor-pointer transition-colors duration-300 peer-checked:bg-blue-500 peer-checked:border-none"
                    ></label>
                    <div className="absolute w-4 h-4 bg-white rounded-full top-0.5 left-0.5 shadow-md transition-transform duration-300 peer-checked:translate-x-5"></div>
                  </div>
                  <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
                    Remember me
                  </Typography>
                </Box>
                <form onSubmit={onSubmit}>
                  <button
                    type="submit"
                    className="text-xs font-semibold bg-[#0075ff] w-full py-3 px-6 rounded-[10px] hover:scale-[1.02] transition-all duration-300 my-8"
                  >
                    SIGN UP
                  </button>
                </form>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#a0aec0",
                    textAlign: "center",
                  }}
                >
                  Already have an account?{" "}
                  <Link href="/sign-in" className="text-white font-semibold">
                    Sign in
                  </Link>
                </Typography>
              </Box>
            </div>
          </div>
          <AuthPagesFooter />
        </div>
      </div>
    </div>
  );
};

export default SignUp;