import React from 'react'


interface HamburgerProps {
    onClick: () => void;
    isOpen: boolean;
  }

  export const AuthHamburger: React.FC<HamburgerProps> = ({ onClick, isOpen }) => {
  return (
      <div className='lg:hidden' >
<button
        className="relative w-6 h-4 cursor-pointer block min-[1024px]:hidden"
        onClick={onClick} 
      >
        <span
          className={`absolute w-full h-[2px] bg-white rounded transition-all duration-300 ease-in-out top-0 left-0 
          ${isOpen ? "rotate-43 top-[8px] left-[0px]" : ""}`}
        />
        <span
          className={`absolute w-full h-[2px] bg-white rounded transition-all duration-300 ease-in-out top-1/2 left-0 -translate-y-1/2 
          ${isOpen ? "opacity-0 w-0" : ""}`}
        />
        <span
          className={`absolute w-full h-[2px] bg-white rounded transition-all duration-300 ease-in-out top-full left-0 -translate-y-full 
          ${isOpen ? "-rotate-45 bottom-[10px] left-[0px]" : ""}`}
        />
      </button>
      </div>
  )
}

export default AuthHamburger
