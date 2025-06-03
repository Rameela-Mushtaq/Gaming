"use client";
import Image from "next/image";
import React from "react";
import BigWins from "./BigWins";
import CryptoSlider from "./CryptoSlider";
import Slot from "./Slot";
import LiveSports from "./LiveSports";
import BuyCryptoBanner from "./BuyCryptoBanner";
import LatestBetsTable from "./LatestBetsTable";
import FeedbackSection from "./FeedbackSection";

const slotImages = [
  "/images/slot1.png",
  "/images/slot2.png",
  "/images/slot3.png",
  "/images/slot4.png",
  "/images/slot5.png",
  "/images/slot6.png",
];

const originImages = [
  "/images/origin1.png",
  "/images/origin2.png",
  "/images/origin3.png",
  "/images/origin4.png",
  "/images/origin5.png",
];

const liveImages = [
  "/images/live1.jpg",
  "/images/live2.png",
  "/images/live3.png",
  "/images/live4.png",
  "/images/live2.png",
];

const Home = () => {
  return (
    <div className="flex flex-col md:gap-10 sm:gap-6 gap-4 relative">
      {/* top dashboard card */}
      <div className="flex bg-gradient-to-r from-[#945238] to-[#180d51] rounded-2xl sm:px-4 px-3  relative">
        <div className="relative w-[45%] sm:flex hidden">
          <div className="absolute left-0 bottom-0 xl:pl-8 z-50">
            <Image
              src="/images/bunny.png"
              alt="bunny"
              width={372}
              height={428}
              className="z-50"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col md:gap-5 gap-4 sm:py-16 py-12 sm:items-start  items-center">
          <div className="lg:text-5xl md:text-3xl text-2xl font-bold sm:text-start text-center lg:leading-14 leading-8">
            Welcome to the Decentralized Crypto Casino
          </div>
          <div className="md:text-base text-sm text-[#1effd7] sm:text-start text-center">
            380% up to 1800 USDT+ 150 Free Lootbox
          </div>
          <button className="bg-[#1effd7] text-[#0e161d] font-medium px-3 py-2 rounded-md w-fit">
            Sign Up Now
          </button>
        </div>
      </div>

      {/* Big wins cards */}
      <div className="pt-4 sm:px-4">
        <BigWins />
      </div>

      {/* Sports Cards */}
      <div className="flex items-center gap-4 sm:px-4 pt-4 sm:flex-row flex-col">
        <div className="sm:w-[50%] flex items-center bg-[#201839] pt-6 pb-10 px-6 rounded-lg relative w-full">
          <div className="flex flex-col gap-4 z-10">
            <div className="lg:text-2xl md:text-xl text-lg font-semibold">
              Sports
            </div>
            <div className="md:text-base text-sm text-[#c5ddf0]">
              Bet on over 80+ sports worldwide
            </div>
            <button className="bg-[#1effd7] text-[#0e161d] font-medium px-5 py-2 rounded-md w-fit">
              Play
            </button>
          </div>
          <div className="absolute bottom-0 right-0">
            <Image
              src="/images/sport.png"
              alt="sport"
              width={360}
              height={180}
            />
          </div>
        </div>
        <div className="flex-1 flex items-center bg-[#201839] pt-6 pb-10 px-6  rounded-lg relative w-full">
          <div className="flex flex-col gap-4 z-10">
            <div className="lg:text-2xl md:text-xl text-lg font-semibold">
              Casino
            </div>
            <div className="md:text-base text-sm text-[#c5ddf0]">
              Bet on 10,000 Games worldwide
            </div>
            <button className="bg-[#1effd7] text-[#0e161d] font-medium px-5 py-2 rounded-md w-fit">
              Play
            </button>
          </div>
          <div className="absolute bottom-0 right-0">
            <Image
              src="/images/casino.png"
              alt="sport"
              width={360}
              height={180}
            />
          </div>
        </div>
      </div>

      {/* CryptoSlider */}
      <div>
        <CryptoSlider />
      </div>

      {/* Slot */}
      <div className="pt-2">
        <Slot title="Slots" images={slotImages} />
      </div>

      {/* Originals */}
      <div className="pt-2">
        <Slot title="Originals" images={originImages} />
      </div>

      {/* Live Casino */}
      <div className="pt-2">
        <Slot title="Live Casino" images={liveImages} />
      </div>

      {/* Live Sports */}
      <div>
        <LiveSports />
      </div>

      {/* Banner */}
      <div className="sm:px-4">
        <BuyCryptoBanner />
      </div>

      {/* Latest Bets Table */}
      <div className="sm:px-4">
        <LatestBetsTable />
      </div>

      <div className="sm:px-4">
        <FeedbackSection />
      </div>
    </div>
  );
};

export default Home;
