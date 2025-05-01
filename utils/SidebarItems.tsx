"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SIDEBAR_ITEMS } from "@/constants/sidebarItems";

interface SidebarItemsProps {
  closeSidebar: () => void;
}

const SidebarItems: React.FC<SidebarItemsProps> = ({ closeSidebar }) => {
  const pathname = usePathname();

  const handleClick = () => {
    if (window.innerWidth < 1440) {
      closeSidebar();
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {Object.entries(SIDEBAR_ITEMS.categories).map(([category, items]) => (
        <div key={category}>
          {category !== "SidebarOne" && (
            <h1 className="uppercase text-xs font-semibold mx-4 mt-3 py-2">Account Pages</h1>
          )}

          {items.map((item) => (
            <Link 
              key={item.path} 
              href={item.path}
              onClick={handleClick}
              className={`flex items-center gap-4 py-[10px] pr-3 pl-4 w-full rounded-2xl cursor-pointer transition-all
                ${pathname === item.path ? "bg-[#1a1f37] text-white" : "text-white "}`}
            >
              <div 
                className={`w-8 h-8 flex items-center justify-center rounded-xl 
                  ${pathname === item.path ? "bg-[#0075ff] text-white" : "bg-[#1a1f37] text-[#0075ff]"}`}
              >
                {item.icon}
              </div>
              <p className="text-sm font-normal">{item.SidebarName}</p>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SidebarItems;