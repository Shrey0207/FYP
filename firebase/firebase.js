import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRtmHXi4rIH8fixVRW9xvkKBA7OKrpbLA",
  authDomain: "nanushka-ecommerce-website.firebaseapp.com",
  projectId: "nanushka-ecommerce-website",
  storageBucket: "nanushka-ecommerce-website.appspot.com", 
  messagingSenderId: "22765561345",
  appId: "1:22765561345:web:010e62b844844279bc4200",
  measurementId: "G-FGL243QBGL",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const Firebase = () => {
  console.log("Firebase initialized");
};

export default Firebase;