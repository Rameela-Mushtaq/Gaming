"use client";
import { Calendar, Gamepad2, DollarSign } from "lucide-react";

const Navbar = () => {
  const navItems = [
    {
      title: "COD PK (Under 12 Only)",
      date: "30 Jun, 2025",
      game: "Call Of Duty",
      price: "Free",
    },
    {
      title: "Counter Strike GO",
      date: "30 Jun, 2025",
      game: "Counter Strike GO",
      price: "1000",
    },
    {
      title: "COD PK (Under 12 Only)",
      date: "30 Jun, 2025",
      game: "Call Of Duty",
      price: "Free",
    },
  ];

  return (
    <div className="bg-[#17263A] text-white text-sm px-10 py-4 flex items-center justify-center gap-1 clip-navbar">
      <div className="overflow-y-auto flex scrollbar-hide">
        {navItems.map((item, idx) => (
        <div
          key={idx}
          className="flex items-center space-x-3"
        >
          <span className="font-bold cursor-pointer hover:text-red-500 ml-4 whitespace-nowrap text-sm">
            {item.title}
          </span>
          <div className="w-[1px] bg-[#90A7CB] h-4" />
          <div className="flex items-center space-x-1 text-[#90A7CB] text-xs whitespace-nowrap">
            <Calendar size={14} />
            <span className="md:flex hidden mt-1 ">{item.date}</span>
          </div>
          <div className="w-[2px] bg-[#90A7CB] h-4" />
          <div className="flex items-center space-x-1 text-[#90A7CB] whitespace-nowrap text-xs">
            <Gamepad2 size={14} />
            <span className="md:flex hidden mt-1 ">{item.game}</span>
          </div>
          <div className="w-[2px] bg-[#90A7CB] h-4" />
          <div className="flex items-center space-x-1 text-[#90A7CB] whitespace-nowrap text-xs">
            <DollarSign size={14} />
            <span className="md:flex hidden mt-1 ">{item.price}</span>
          </div>
           {idx !== navItems.length - 1 && (
              <div className="w-[2px] bg-white h-8 rotate-[30deg] mx-3" />
            )}
        </div>
      ))}
      </div>
    </div>
  );
};

export default Navbar;
