import AuthHamburger from "@/utils/AuthHamburger";
import { Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoPerson, IoPersonCircle } from "react-icons/io5";
import { MdDonutLarge, MdVpnKey } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

interface AuthPagesNavbarProps {
  handleOpenResNav: () => void;
  openResNav: boolean;
}

export const AuthPagesNavbar:React.FC<AuthPagesNavbarProps> = ({ handleOpenResNav, openResNav }) => {
  return (
    <div className="h-[75px] bg-transparent z-50 w-[60%] max-[1440px]:w-[80%] mx-auto mt-3 rounded-2xl mx-5 border border-gray-500 backdrop-blur-xl fixed top-1 py-4 px-6 left-1/2 transform translate-x-[-50%] flex items-center justify-between">
      <a href="/">
        <img src="/vision-ui-logo.png" alt="logo" className=" w-[129px]" />
      </a>
      <div 
      className="w-auto flex items-center max-[1024px]:hidden"
      >
        <Link href="/" className="flex items-center p-2 mx-2 gap-1">
          <MdDonutLarge style={{ marginBottom: "2px" }} />
          <Typography
            sx={{
              fontSize: "14px",
            }}
          >
            Dashboard
          </Typography>
        </Link>
        <Link href="/profile" className="flex items-center p-2 mx-2 gap-1">
          <IoPerson style={{ marginBottom: "2px" }} />
          <Typography
            sx={{
              fontSize: "14px",
            }}
          >
            Profile
          </Typography>
        </Link>
        <Link href="/sign-up" className="flex items-center p-2 mx-2 gap-1">
          <IoPersonCircle style={{ marginBottom: "2px" }} />
          <Typography
            sx={{
              fontSize: "14px",
            }}
          >
            Sign Up
          </Typography>
        </Link>
        <Link href="/sign-in" className="flex items-center p-2 mx-2 gap-1">
          <MdVpnKey style={{ marginBottom: "2px" }} />
          <Typography
            sx={{
              fontSize: "14px",
            }}
          >
            Sign In
          </Typography>
        </Link>
      </div>
      <button className="text-[12px] font-semibold bg-[#0075ff] py-3 px-6 rounded-[10px] max-[1024px]:hidden">
        BUY NOW
      </button>
      <div className='min-[1024px]:hidden'>
                {!openResNav ? 
                <div onClick={handleOpenResNav}>
              <GiHamburgerMenu />
                </div>
                : 
                <div onClick={handleOpenResNav}>
              <RxCross2/>
                </div>}
              </div>
    </div>
  );
};

export default AuthPagesNavbar;
