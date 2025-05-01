import { Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { IoPerson, IoPersonCircle } from 'react-icons/io5'
import { MdDonutLarge, MdVpnKey } from 'react-icons/md'

const AuthResponsiveNav = () => {
  return (
    <div className='fixed left-[15%] mt-1 w-[70%] top-24 border border-gray-500 bg-gradient-to-tr from-[#0f123b] via-[#090d2e] to-[#020515] rounded-[15px] p-2'>
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
  )
}

export default AuthResponsiveNav
