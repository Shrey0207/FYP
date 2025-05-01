'use client'

import AuthPagesFooter from "@/utils/AuthPagesFooter";
import AuthPagesNavbar from "@/utils/AuthPagesNavbar";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { auth } from "@/firebase/firebase";
import { toast, ToastContainer } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import AuthResponsiveNav from "@/utils/AuthResponsiveNav";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [openResNav, setOpenResNav] = useState(false);
    const navigate = useRouter();

    const onLogin = () => {
        setErrorMessage("");
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setEmail("");
                setPassword("");
                toast.success("Logged in successfully!", { position: "top-right", autoClose: 2000 });
                toast("Redirecting you to the main page.", { position: "top-right", delay: 200, autoClose: 2000 });
                setTimeout(() => navigate.push("/"), 2000);
            })
            .catch((error) => {
                const errorCode = error.code;
                if (errorCode === "auth/user-not-found") {
                    setErrorMessage("No user found with this email.");
                } else if (errorCode === "auth/wrong-password") {
                    setErrorMessage("Incorrect password. Please try again.");
                } else if (errorCode === "auth/invalid-email") {
                    setErrorMessage("Please enter a valid email address.");
                } else {
                    setErrorMessage("Login failed. Please check your credentials.");
                }
                toast.error("Wrong credentials entered!", { position: "top-right", autoClose: 2000 });
            });
    };

    const handleOpenResNav = () => {
        setOpenResNav(!openResNav);
    };
    const handleCloseResNav = () => {
        setOpenResNav(false)
    }

    return (
        <div className="w-full relative h-full flex items-center gap-0">
            <AuthPagesNavbar handleOpenResNav={handleOpenResNav} openResNav={openResNav} />
            {openResNav && <AuthResponsiveNav />}
            <div
             onClick={handleCloseResNav}
                style={{
                    backgroundImage: "url(/sign-in-background.webp)",
                    backgroundPosition: "center",
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
            <div
             onClick={handleCloseResNav}
                style={{
                    background:
                        "linear-gradient(159.02deg, rgb(15, 18, 59) 14.25%, rgb(9, 13, 46) 56.45%, rgb(2, 5, 21) 86.14%) transparent",
                }}
                className="w-1/2 overflow-y-auto overflow-x-none h-full max-[1024px]:w-full max-[1024px]:flex max-[1024px]:justify-center"
            >
                <div
                    className="mr-[100px] w-[450px] h-full mt-[160px] ml-[65px] flex flex-col max-[1024px]:mx-auto max-[768px]:w-full"
                >
                    <div
                        className="pt-6 px-6 mx-[50px] w-auto mb-[35px] max-[480px]:mx-0"
                    >
                        <Typography
                            sx={{
                                fontSize: "30px",
                                fontWeight: "600",
                                marginBottom: "10px",
                            }}
                        >
                            Nice to see you!
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "14px",
                                fontWeight: "500",
                            }}
                        >
                            Enter your email and password to sign in
                        </Typography>
                    </div>

                    <div
                        className="mb-[50px] px-6 w-auto mx-[50px] h-auto max-[480px]:mx-0"
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
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
                                name="email"
                                type="email"
                                id="emailInput"
                                className="w-[300px] max-[768px]:w-full h-10 rounded-[15px] bg-[rgb(15, 21, 53)] py-2 px-3 text-sm active:outline-[1px] outline-blue-400 placeholder:text-xs"
                                style={{
                                    border: "2px solid rgb(74, 85, 104)",
                                }}
                                placeholder="Your email..."
                            />
                            {errorMessage && <div className="text-red-500 py-2 text-xs">{errorMessage}</div>}
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
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                name="password"
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
                            sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}
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
                        <button
                            type="submit"
                            onClick={onLogin}
                            className="text-xs font-semibold bg-[#0075ff] w-full py-3 px-6 rounded-[10px] hover:scale-[1.02] transition-all duration-300 my-8">
                            SIGN IN
                        </button>
                        <Typography
                            sx={{ fontSize: "14px", color: "#a0aec0", textAlign: "center" }}
                        >
                            Don't have an account?{" "}
                            <Link href="/sign-up" className="text-white font-semibold">
                                Sign up
                            </Link>
                        </Typography>
                    </div>
                    <AuthPagesFooter />
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignIn;