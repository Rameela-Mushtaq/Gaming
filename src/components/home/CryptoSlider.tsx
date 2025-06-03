"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import {
  Bitcoin,
  Triangle,
  Coins,
  Zap,
  Dog,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"; // Lucide-only icons

const cryptoData = [
  {
    name: "BTC",
    icon: <Bitcoin className="text-orange-500 w-6 h-6" />,
    change: "+0.273%",
    price: "105231.91",
    volume: "1.50B",
  },
  {
    name: "ETH",
    icon: <Bitcoin className="text-blue-400 w-6 h-6" />, // Placeholder for ETH
    change: "+4.551%",
    price: "2607.09",
    volume: "1.39B",
  },
  {
    name: "NOT",
    icon: <Triangle className="text-white w-6 h-6" />,
    change: "+2.013%",
    price: "0.002281",
    volume: "3.28M",
  },
  {
    name: "BNB",
    icon: <Zap className="text-yellow-400 w-6 h-6" />,
    change: "+1.228%",
    price: "665.92",
    volume: "109.54M",
  },
  {
    name: "XRP",
    icon: <Coins className="text-gray-300 w-6 h-6" />,
    change: "+1.524%",
    price: "2.1983",
    volume: "215.71M",
  },
  {
    name: "DOGE",
    icon: <Dog className="text-yellow-300 w-6 h-6" />,
    change: "+2.307%",
    price: "0.19557",
    volume: "140.05M",
  },
];

const CryptoSlider: React.FC = () => {
  const slider = useRef<Slider | null>(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 830, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className=" sm:px-4 py-6 text-white relative flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <div className="lg:text-2xl md:text-xl text-lg font-semibold">
          Crypto futures
        </div>

        {/* Custom Lucide Arrows */}
        <div className="absolute top-3 right-3 md:flex hidden gap-3">
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
        {cryptoData.map((crypto, idx) => (
          <div key={idx} className="px-2">
            <div className="bg-gradient-to-b from-[#04022a] to-[#1f276c] rounded-md p-4 shadow-md">
              <div className="flex items-center space-x-3 mb-2">
                {crypto.icon}
                <span className="text-lg font-bold">{crypto.name}</span>
                <span className="text-green-500 font-semibold">
                  {crypto.change}
                </span>
              </div>
              <div className="text-xl font-semibold">{crypto.price}</div>
              <div className="text-sm text-gray-300 mt-1">
                24H VOL:{" "}
                <span className="font-bold text-white">{crypto.volume}</span>
              </div>
              <div className="text-sm text-gray-300">
                LEVERAGE:{" "}
                <span className="text-yellow-400 font-semibold">1000X</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CryptoSlider;
