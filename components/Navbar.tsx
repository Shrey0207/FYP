'use client'

import { Box, Paper, Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { AiFillHome } from 'react-icons/ai';
import { FaBell, FaSearch } from 'react-icons/fa';
import { HiMiniSlash } from 'react-icons/hi2';
import { IoPersonCircleSharp, IoSettingsSharp } from 'react-icons/io5';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
interface NavbarProps {
  handleOpenSidebar: () => void;
  openSidebar: boolean;
}

const Navbar:React.FC<NavbarProps> = ({ handleOpenSidebar, openSidebar }) => {
  const pathName = usePathname();
const [nameOfPath, setNameOfPath] = useState("");
const [scrolled, setScrolled] = useState(false);


useEffect(() => {
  if (pathName === "/tables") {
    setNameOfPath("Tables");
  } else if (pathName === "/billing") {
    setNameOfPath("Billing");
  } else if (pathName === "/rtl") {
    setNameOfPath("RTL");
  } else if (pathName === "/profile") {
    setNameOfPath("Profile");
  } else {
    setNameOfPath("Dashboard");
  }
}, [pathName]);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 180) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  window.addEventListener("scroll", handleScroll);
}, [setScrolled]);


  return (
    <>
    {
      pathName !== "/sign-in" && pathName !== "/sign-up" &&(
    <div className={`h-[75px] fixed bg-transparent z-50 w-[83%] max-[1650px]:w-[80%] 
    backdrop-blur-xl py-2 top-3 rounded-2xl mx-auto right-5 max-[1440px]:w-[97%] max-[768px]:h-auto max-[768px]:w-[96%] max-[768px]:right-2 ${!scrolled ? "border border-white " : "border-none"}`}>
      <div
      className='w-full h-full flex items-center justify-between py-1 px-4 max-[768px]:flex-col max-[768px]:items-start'>
        <Box>
        <Box sx={{
          display: "flex",
          alignItems: "center",
          color: "#a0aec0"
        }}>
          <AiFillHome/>
          <HiMiniSlash/>
          <p className='text-[14px] text-white'>{nameOfPath}</p>
          
        </Box>
        <Typography sx={{fontWeight: "600"}}>{nameOfPath}</Typography>
      </Box>

      <div
      className='flex items-center gap-[10px] pr-[6px] max-[768px]:w-full max-[768px]:justify-between max-[768px]:mt-2'>
        <Paper sx={{
          height: "38px",
          display: "flex",
          alignItems: "center",
          borderRadius: "15px",
          border: "0.0625rem solid rgba(226, 232, 240, 0.3)",
          background: "rgb(15, 21, 53)"
        }} 
        className='w-[220px] max-[768px]:w-fit'>
          <div className='mx-[10px] text-[#718096]'>
          <FaSearch/>
          </div>
          <input type="text" className='text-[12px] max-[768px]:w-[70px] placeholder:text-[#a0aec0] text-[#a0aec0] placeholder:text-[12px] outline-none' placeholder='Type here...' />
        </Paper>
        <div className='flex items-center gap-4'>
        <Link href="/sign-in">
        <Box sx={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          fontSize: "30px"
        }}>
          <IoPersonCircleSharp/>
          <p className='text-[14px] font-semibold max-[768px]:hidden'>Sign in</p>
        </Box>
        </Link>

        <div className='min-[1440px]:hidden cursor-pointer'>
          {!openSidebar ? 
          <div onClick={handleOpenSidebar}>
        <GiHamburgerMenu />
          </div>
          : 
          <div onClick={handleOpenSidebar}>
        <RxCross2/>
          </div>}
        </div>

     <div className='max-[768px]:hidden'>
        <IoSettingsSharp/>
     </div>
     <div className='max-[768px]:hidden'>
        <FaBell/>
     </div>
        </div>
      </div>
        </div>
    </div>
      )
    }
    </>
  )
}

export default Navbar