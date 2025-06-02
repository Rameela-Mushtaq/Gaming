"use client";
import Image from "next/image";
import React from "react";
import BigWins from "./BigWins";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 relative">
      <div className="flex bg-gradient-to-r from-[#945238] to-[#180d51] rounded-2xl sm:px-4 px-3  relative">
        <div className="relative w-[45%] sm:flex hidden">
          <div className="absolute left-0 bottom-0 xl:pl-8 z-50">
            <Image src="/images/bunny.png" alt="bunny" width={372} height={428} className="z-50"/>
          </div>
        </div>
        <div className="flex-1 flex flex-col md:gap-5 gap-4 sm:py-16 py-12 sm:items-start  items-center">
          <div className="lg:text-5xl md:text-3xl text-2xl font-bold sm:text-start text-center lg:leading-14 leading-8">
            Welcome to the Decentralized Crypto Casino
          </div>
          <div className="md:text-base text-sm text-[#1effd7] sm:text-start text-center">380% up to 1800 USDT+ 150 Free Lootbox</div>
          <button className="bg-[#1effd7] text-[#0e161d] font-medium px-3 py-2 rounded-md w-fit">Sign Up Now</button>
        </div>
      </div>

      <div>
        <BigWins />
      </div>
    </div>
  );
};

export default Home;
