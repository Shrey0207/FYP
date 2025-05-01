import imageOne from "@/public/profile-box-image-one.webp"
import imageTwo from "@/public/profile-box-image-two.png"
import imageThree from "@/public/profile-box-image-three.webp"

export const PROFILE_BOXES_DATA = {
    categories: {
        "BoxOneDataOne": [
            {
                description: "Email me when someone follows me",
                inverse: true
            },
            {
                description: "Email me when someone answers on my post",
                inverse: false
            },
            {
                description: "Email me when someone mentions me",
                inverse: true
            },
        ],
        "BoxOneDataTwo":[
            {
                description: "New launches and projects",
                inverse: false
            },
            {
                description: "Monthly product updates",
                inverse: true
            },
            {
                description: "Subscribe to newsletter",
                inverse: true
            },
            {
                description: "Receive mails weekly",
                inverse: false
            }
        ],
        "BoxTwoData" : [
            {
                image: imageOne,
                title: "Project #2",
                heading: "Modern",
                description: "As Uber works through a huge amount of internal management turmoil.",
                inverse: true

            },
            {
                image: imageTwo,
                title: "Project #1",
                heading: "Scandinavian",
                description: "Music is something that every person has his or her own specific opinion about.",
                inverse: true

            },
            {
                image: imageThree,
                title: "Project #3",
                heading: "Minimalist",
                description: "Different people have different taste, and various types of music.",
                inverse: true
            },
        ]
    } 
}