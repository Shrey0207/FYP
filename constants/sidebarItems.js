import { FaHome } from "react-icons/fa";
import { MdBarChart } from "react-icons/md";
import { BsCreditCardFill } from "react-icons/bs";
import { HiWrench } from "react-icons/hi2";
import { IoRocketSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { IoDocument } from "react-icons/io5";

export const SIDEBAR_ITEMS = {
    categories: {
        "SidebarOne": [
            {
                icon: <FaHome/>,
                SidebarName: "Dashboard",
                path: "/dashboard",
            },
            {
                icon: <MdBarChart/>,
                SidebarName: "Tables",
                path: "/tables",
            },
            {
                icon: <BsCreditCardFill/>,
                SidebarName: "Billing",
                path: "/billing",
            },
            {
                icon: <HiWrench/>,
                SidebarName: "RTL",
                path: "/rtl",
            },
        ],
        "SidebarTwo": [
            {
                icon: <IoRocketSharp/>,
                SidebarName: "Profile",
                path: "/profile",
            },
            {
                icon: <IoPerson/>,
                SidebarName: "SignIn",
                path: "/sign-in",
            },
            {
                icon: <IoDocument/>,
                SidebarName: "SignUp",
                path: "/sign-up",
            },
        ]
    }
}