"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  options: Option[];
  placeholder?: string;
  value?: string;
  onChange?: (val: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  placeholder = "Select...",
  value,
  onChange,
}) => {
  const [open, setOpen] = useState(false);

  const selected = options.find((o) => o.value === value);

  return (
    <div className="relative w-40 cursor-pointer">
  <div
      onClick={() => setOpen(!open)}
      className=" bg-[#17263A] px-3 py-3 text-sm flex items-center justify-between text-white"
    >
      <span>{selected ? selected.label : placeholder}</span>
      <ChevronDown
        size={18}
        className={`transition-transform ${open ? "rotate-180" : "rotate-0"}`}
      />
    </div>

  {/* Dropdown */}
  {open && (
    <div className="absolute mt-2 left-0 w-full clip-custom bg-red-500 p-[2px] z-20">
      <div className="clip-custom bg-[#17263A] shadow-lg">
        {options.map((option) => (
          <div
            key={option.value}
            onClick={() => {
              onChange?.(option.value);
              setOpen(false);
            }}
            className="px-3 py-3 hover:bg-gray-700 cursor-pointer text-sm"
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  )}
</div>

  );
};

export default CustomSelect;
