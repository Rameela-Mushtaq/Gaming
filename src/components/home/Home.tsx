"use client";
import { useSidebar } from "@/context/SidebarContext";
import { Menu } from "lucide-react";
import React from "react";
import FilterBar from "./filter-bar";
import { tournaments } from "@/data";
import TournamentCard from "./tournament-card";
import Image from "next/image";

const Home = () => {
  const { openSidebar } = useSidebar();
  return (
    <div className="flex flex-col">
      <div className="flex justify-between lg:justify-end items-center bg-[#040C15] px-3 py-6">
        <div className="flex items-center gap-4 lg:hidden">
          <Image src="/images/logo.png" alt="logo" width={100} height={80} />
          {/* Hamburger button */}
          <button className="hover:bg-gray-700 rounded" onClick={openSidebar}>
            <Menu size={24} />
          </button>
        </div>
        <div className="w-[64px] h-[64px] rounded-full border-2 border-red-500 overflow-hidden">
          <Image
            src="/images/2.png"
            alt="circle"
            width={64}
            height={64}
            className="object-cover"
          />
        </div>
      </div>
      <div className="p-4">
        <div className="flex gap-4 items-center justify-between">
          <h1 className="text-2xl text-white hidden md:block font-grifter font-bold">
            Tournaments
          </h1>

          <FilterBar />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 my-6 items-center">
          {tournaments.map((tournament) => (
            <TournamentCard key={tournament.id} {...tournament} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Home;
