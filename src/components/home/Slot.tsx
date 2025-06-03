"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type SlotProps = {
  title?: string;
  images: string[];
  slidesToShow?: number;
};

const Slot: React.FC<SlotProps> = ({
  title = "Games",
  images,
  slidesToShow = 5,
}) => {
  const slider = useRef<Slider | null>(null);

  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    swipe: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: Math.min(slidesToShow, 4) },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: Math.min(slidesToShow, 3) },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: Math.min(slidesToShow, 2) },
      },
    ],
  };

  return (
    <div className="relative sm:px-4 flex flex-col gap-6 text-white">
      <div className="flex items-center gap-4 px-3">
        <div className="lg:text-2xl md:text-xl text-lg font-semibold">
          {title}
        </div>

        {/* Custom Lucide Arrows */}
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
        {images.map((src, index) => (
          <div key={index} className="px-2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <div>
                <Image
                src={src}
                alt={`Game ${index + 1}`}
                width={300}
                height={400}
                className="w-full h-auto object-cover"
              />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slot;
