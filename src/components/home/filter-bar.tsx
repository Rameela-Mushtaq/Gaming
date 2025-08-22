"use client";
import { useState } from "react";
import CustomSelect from "../shared/CustomSelect";

const FilterBar = () => {
  const [showUpcoming, setShowUpcoming] = useState(false);

  return (
    <div className=" text-white flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
      {/* Toggle Button */}
      <div className="flex items-center space-x-3">
        <span className="whitespace-nowrap">Show Upcoming Only</span>
        <button
          onClick={() => setShowUpcoming(!showUpcoming)}
          className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 bg-gray-500`}
        >
          <div
            className={`w-5 h-5 bg-red-500 rounded-full shadow-md transform transition-transform duration-300 cursor-pointer ${
              showUpcoming ? "translate-x-6" : "translate-x-0"
            }`}
          ></div>
        </button>
      </div>

      {/* Filter Dropdowns */}
      <div className="flex gap-3 w-full md:w-auto sm:flex-nowrap flex-wrap">
        <CustomSelect
          placeholder="Select Time"
          options={[
            { value: "today", label: "Today" },
            { value: "this-week", label: "This Week" },
            { value: "this-month", label: "This Month" },
          ]}
        />
        <CustomSelect
          placeholder="All Games"
          options={[
            { value: "game1", label: "Game 1" },
            { value: "game2", label: "Game 2" },
          ]}
        />
        <CustomSelect
          placeholder="Sort By"
          options={[
            { value: "date", label: "Date" },
            { value: "prize", label: "Prize" },
            { value: "popularity", label: "Popularity" },
          ]}
        />
      </div>
    </div>
  );
};

export default FilterBar;
