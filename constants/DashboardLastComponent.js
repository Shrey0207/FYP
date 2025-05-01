import { FaBell } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { IoWallet } from "react-icons/io5";
import { FaDropbox } from "react-icons/fa";
import { SiAdobexd } from "react-icons/si";

export const DASH_LAST_DATA = {
  categories: {
    BoxOne: [
      {
        name: "Chakra Vision UI Version",
        budget: "$14,000",
        completion: "60%",
        avatar: [
          "/avatar1.webp",
          "/avatar2.webp",
          "/avatar3.webp",
          "/avatar4.webp",
        ],
        images: "/iconOne.svg",
        percentage: 60,
      },
      {
        name: "Add Progress Track",
        budget: "$3,000",
        completion: "10%",
        avatar: ["/avatar2.webp", "/avatar4.webp"],
        images: "/iconTwo.svg",
        percentage: 10,
      },
      {
        name: "Fix Platform Errors",
        budget: "Not set",
        completion: "100%",
        avatar: [" /avatar1.webp", "/avatar2.webp"],
        images: "/iconThree.svg",
        percentage: 100,
      },
      {
        name: "Launch our Mobile App",
        budget: "$20,500",
        completion: "100%",
        avatar: [
          "/avatar4.webp",
          "/avatar3.webp",
          "/avatar2.webp",
          "/avatar1.webp",
        ],
        images: "/iconFour.svg",
        percentage: 100,
      },
      {
        name: "Add the New Pricing Page",
        budget: "$500",
        completion: "25%",
        avatar: ["/avatar4.webp"],
        images: "/iconFive.svg",
        percentage: 25,
      },
      {
        name: "Redesign New Online Shop",
        budget: "$2,000",
        completion: "40%",
        avatar: ["/avatar1.webp", "/avatar2.webp"],
        images: "/iconSix.svg",
        percentage: 40,
      },
    ],
    BoxTwo: [
      {
        icon: <FaBell />,
        title: "$24,000,Design changes",
        orderDate: "22 DEC 7:20 PM",
        color: "rgb(0, 117, 255)",
      },
      {
        icon: <IoLogoCss3 />,
        title: "New order #1832412",
        orderDate: "21 DEC 11 PM",
        color: "rgb(227, 26, 26)",
      },
      {
        icon: <IoCart />,
        title: "Server payments for April",
        orderDate: "21 DEC 9:34 PM",
        color: "rgb(66, 153, 225)",
      },
      {
        icon: <IoWallet />,
        title: "New card added for order #4395133",
        orderDate: "20 DEC 2:20 AM",
        color: "rgb(255, 181, 71)",
      },
      {
        icon: <FaDropbox />,
        title: "New card added for order #4395133",
        orderDate: "18 DEC 4:54 AM",
        color: "rgb(159, 122, 234)",
      },
      {
        icon: <SiAdobexd />,
        title: "New order #9583120",
        orderDate: "17 DEC",
        color: "#bd3eb2",
      },
    ],
  },
};
