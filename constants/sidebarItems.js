import { FaHome } from "react-icons/fa";              // Dashboard
import { GiHistogram } from "react-icons/gi";         // Calibration
import { MdScience } from "react-icons/md";           // Experimentation
import { MdHistory } from "react-icons/md";           // History
import { HiWrench } from "react-icons/hi2";           // Settings
import { IoPerson } from "react-icons/io5";           // Profile

export const SIDEBAR_ITEMS = {
  categories: {
    SidebarOne: [
      {
        icon: <FaHome />,
        SidebarName: "Dashboard",
        path: "/dashboard",
      },
      {
        icon: <GiHistogram />,
        SidebarName: "Calibration",
        path: "/calibration",
      },
      {
        icon: <MdScience />,
        SidebarName: "Experimentation",
        path: "/experimentation",
      },
      {
        icon: <MdHistory />,
        SidebarName: "History",
        path: "/history",
      },
      {
        icon: <HiWrench />,
        SidebarName: "Settings",
        path: "/settings",
      },
    ],
    SidebarTwo: [
      {
        icon: <IoPerson />,
        SidebarName: "Profile",
        path: "/profile",
      }
    ],
  },
};
