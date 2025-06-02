"use client";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const games = [
  {
    image: "/images/big1.png",
    gamer: "Gamertag",
    amount: "$321.3",
  },
  {
    image: "/images/big2.png",
    gamer: "Gamertag",
    amount: "$321.3",
  },
  {
    image: "/images/big3.png",
    gamer: "Gamertag",
    amount: "$321.3",
  },
  {
    image: "/images/big4.png",
    gamer: "Gamertag",
    amount: "$321.3",
  },
  {
    image: "/images/big1.png",
    gamer: "Gamertag",
    amount: "$321.3",
  },
  {
    image: "/images/big2.png",
    gamer: "Gamertag",
    amount: "$321.3",
  },
  {
    image: "/images/big3.png",
    gamer: "Gamertag",
    amount: "$321.3",
  },
  {
    image: "/images/big4.png",
    gamer: "Gamertag",
    amount: "$321.3",
  },
  {
    image: "/images/big1.png",
    gamer: "Gamertag",
    amount: "$321.3",
  },
  {
    image: "/images/big2.png",
    gamer: "Gamertag",
    amount: "$321.3",
  },
  {
    image: "/images/big3.png",
    gamer: "Gamertag",
    amount: "$321.3",
  },
  {
    image: "/images/big4.png",
    gamer: "Gamertag",
    amount: "$321.3",
  },
];

export default function BigWins() {
  return (
    <div className="flex flex-col gap-5 px-4 py-8 overflow-hidden">
      <div className="flex items-center gap-2">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
        </span>
        <div className="lg:text-2xl md:text-xl text-lg font-semibold">
          Recent Big Wins
        </div>
      </div>
      <div className="flex gap-4 animate-recruiter w-[200%]">
        {[...games, ...games].map((game, index) => (
          <div
            key={index}
            className="bg-[#180d51] rounded-lg p-2 text-center text-white min-w-[120px] min-h-[70px]"
          >
            <div className="relative w-full h-32 rounded overflow-hidden">
              <Image
                src={game.image}
                alt="big wins"
                fill
                className="object-cover rounded"
              />
            </div>
            <p className="mt-2 text-sm text-gray-300">{game.gamer}</p>
            <p className="text-green-500 font-semibold">{game.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
