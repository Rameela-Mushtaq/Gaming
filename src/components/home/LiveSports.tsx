"use client";

import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

// Sample dataset
const matches = [
  {
    league: "Soccer - Toulon Tournament",
    homeTeam: "Mali",
    homeFlag: "/images/flag1.png",
    awayTeam: "Panama",
    awayFlag: "/images/flag2.png",
    score: "0:1",
    status: "Halftime",
    odds: ["3.7", "draw 3.0", "2.15", "+3"],
  },
  {
    league: "Soccer - Championship Women",
    homeTeam: "Shatin",
    homeFlag: "/images/flag3.png",
    awayTeam: "Kitchee",
    awayFlag: "/images/flag4.png",
    score: "0:0",
    status: "1st half",
    odds: ["1.0", "draw 0.0", "1.28", "+1"],
  },
  {
    league: "FIFA - Premier League",
    homeTeam: "Arsenal FC",
    homeFlag: "/images/flag1.png",
    awayTeam: "Chelsea FC",
    awayFlag: "/images/flag3.png",
    score: "1:2",
    status: "1st half",
    odds: ["7.4", "draw 3.25", "1.5", "+1"],
  },
];

const LiveSports = () => {
  const slider = useRef<Slider | null>(null);

  const settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    swipe: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="relative sm:px-4 text-white flex flex-col gap-4">
      <div className="flex items-center justify-between mb-4 px-2">
        <div className="lg:text-2xl md:text-xl text-lg font-semibold">
          Live Sports
        </div>
        <div className="absolute top-[-2] right-8 sm:flex hidden gap-3">
          <button
            onClick={() => slider.current?.slickPrev()}
            className="group px-2.5 py-2.5 hover:bg-orange flex justify-center items-center border-2 border-contents rounded-full hover:bg-[#201839]"
          >
            <ChevronLeft className="w-6 h-6 group-hover:text-white text-contents" />
          </button>

          <button
            onClick={() => slider.current?.slickNext()}
            className="group px-2.5 py-2.5 hover:bg-orange flex justify-center items-center border-2 border-contents rounded-full hover:bg-[#201839]"
          >
            <ChevronRight className="w-6 h-6 group-hover:text-white text-contents" />
          </button>
        </div>
      </div>

      <Slider ref={slider} {...settings}>
        {matches.map((match, index) => (
          <div key={index} className="px-2">
            <div className="bg-gradient-to-b from-[#04022a] to-[#1f276c] flex flex-col justify-between gap-3 rounded-md p-4 min-h-[200px]">
              <div className="flex justify-between mb-2">
                <p className="text-sm md:text-base font-semibold">{match.league}</p>
                <span className="text-xs bg-green-600 px-2 h-fit py-0.5 rounded-md text-black">
                  Live
                </span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <div className="text-center">
                  <Image
                    src={match.homeFlag}
                    alt={match.homeTeam}
                    width={48}
                    height={48}
                  />
                  <p className="text-sm mt-1">{match.homeTeam}</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{match.score}</p>
                  <p className="text-xs text-gray-400">{match.status}</p>
                </div>
                <div className="text-center flex justify-center items-center flex-col">
                  <Image
                    src={match.awayFlag}
                    alt={match.awayTeam}
                    width={48}
                    height={48}
                  />
                  <p className="text-sm mt-1">{match.awayTeam}</p>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2 text-center text-xs font-medium">
                {match.odds.map((odd, i) => (
                  <div key={i} className="bg-[#201839] p-1 rounded-md">
                    {odd}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LiveSports;
