import React from 'react'
import DashFirstComponent from "@/dashboardComponents/DashFirstComponent";
import DashLastComponent from "@/dashboardComponents/DashLastComponent";
import DashSecondComponent from "@/dashboardComponents/DashSecondComponent";
import DashThirdComponent from "@/dashboardComponents/DashThirdComponent";
import Footer from '@/components/Footer';

const RTLComponent:React.FC = () => {
  return (
    <div className="dashboard w-full h-auto p-6 max-[768px]:p-5 relative overflow-y-auto z-0 pt-[110px] max-[768px]:pt-[130px] ml-[17.125rem] max-[1440px]:ml-0"
    style={{
      transition: "margin-left 300ms cubic-bezier(0.4, 0, 0.2, 1), margin-right 300ms cubic-bezier(0.4, 0, 0.2, 1)",
    }}>
    <DashFirstComponent route='/rtl'/>
    <DashSecondComponent route="/rtl"/>
    <DashThirdComponent route="/rtl"/>
    <DashLastComponent route="/rtl"/>
    <Footer/>
  </div>
  )
}

export default RTLComponent
