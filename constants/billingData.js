import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaExclamation } from "react-icons/fa6";

export const BILLING_DATA = {
    categories: {
        "BoxOne" : [
            {
                invoiceDate: "March, 01, 2020",
                serialNumber: "#MS-415646",
                price: "$180",
            },
            {
                invoiceDate: "February, 10, 2021",
                serialNumber: "#RV-126749",
                price: "$250",
            },
            {
                invoiceDate: "April, 05, 2020",
                serialNumber: "#QW-103578",
                price: "$120",
            },
            {
                invoiceDate: "June, 25, 2019",
                serialNumber: "#MS-415646",
                price: "$180",
            },
            {
                invoiceDate: "March, 01, 2019",
                serialNumber: "#AR-803481",
                price: "$300",
            },
        ],
        "BoxTwo" : [
            {
                name: "Oliver Liam",
                companyName: "viking burrito",
                emailAdress: "oliver@burrito.com",
                vatNumbet: "FRB1235476"
            },
            {
                name: "Lucas Harper",
                companyName: "stone tech zone",
                emailAdress: " lucas@stone-tech.com",
                vatNumbet: "FRB1235476"
            },
            {
                name: "Ethan James",
                companyName: " fiber notion",
                emailAdress: "ethan@fiber.com",
                vatNumbet: "FRB1235476"
            },
        ],
        "BoxThreeOne": [
            {
                name: "Netflix",
                date: "27 March 2020, at 12:30 PM",
                price: "-$2,500",
                borderColor: "#a0aec0",
                icon: <FaArrowDown/>,
                textColor: "#a0aec0"
            },
            {
                name: "Apple",
                date: "27 March 2020, at 04:30 AM",
                price: "+$2,000",
                borderColor: "#01b574",
                icon: <FaArrowUp/>,
                textColor: "#01b574"
            },
        ],
        "BoxThreeTwo": [
            {
                name: "Stripe",
                date: "26 March 2020, at 13:45 PM",
                price: "+$750",
                borderColor: "#01b574",
                icon: <FaArrowUp/>,
                textColor: "#01b574"
            },
            {
                name: "Hubspot",
                date: "26 March 2020, at 12:30 PM",
                price: "+$1,000",
                borderColor: "#01b574",
                icon: <FaArrowUp/>,
                textColor: "#01b574"
            },
            {
                name: "Hubspot",
                date: "26 March 2020, at 08:30 AM",
                price: "+$2,500",
                borderColor: "#01b574",
                icon: <FaArrowUp/>,
                textColor: "#01b574"
            },
            {
                name: "Webflow",
                date: "26 March 2020, at 05:00 AM",
                price: "Pending",
                borderColor: "#a0aec0",
                icon: <FaExclamation/>,
                textColor: "#a0aec0"
            },
        ]
    }
}