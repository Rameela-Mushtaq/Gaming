"use client";
import { useSidebar } from "@/context/SidebarContext";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const { openSidebar } = useSidebar();

  return (
    <header className="bg-gradient-to-r from-[#04022a] to-[#1f276c] text-white w-full h-16 flex items-center justify-between border-b border-[#6f6f6f] px-4 md:px-6 relative gap-2">
      <div className="flex items-center gap-2">
        {/* Hamburger for mobile */}
        <button className="md:hidden" onClick={openSidebar}>
          <Menu size={24} />
        </button>
        <Image 
         src="/images/logo1.png"
         alt="box"
         width={250}
         height={80}
         className="md:w-full md:h-full sm:w-[200px] sm:h-[40px] w-[100px] h-[20px]"
        />
      </div>
      <div className="text-[#0e161d] sm:text-base text-sm flex items-center gap-3 font-medium">
        <button className="bg-[#1effd7] sm:px-3 px-2 py-1.5 rounded-md">Sign In</button>
        <button className="bg-[#fff964] sm:px-3 px-2 py-1.5 rounded-md">Sign Up</button>
        <Image 
         src="/images/box.png"
         alt="box"
         width={36}
         height={36}
         className="sm:flex hidden"
        />
      </div>
    </header>
  );
}
