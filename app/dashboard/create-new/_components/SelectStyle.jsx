"use client";
import Image from "next/image";
import React, { useState } from "react";

const SelectStyle = ({ onUserSelect }) => {
  const styleOptions = [
    {
      name: "Cartoon",
      image: "/cartoon.jpg",
    },
    {
      name: "Comic",
      image: "/comic.jpg",
    },
    {
      name: "GTA",
      image: "/gta.jpg",
    },
    {
      name: "Historic",
      image: "/historic.jpg",
    },
    {
      name: "Real",
      image: "/real.jpg",
    },
    {
      name: "Watercolor",
      image: "/watercolor.jpg",
    },
  ];

  const [selectedOption, setSelectedOption] = useState();

  return (
    <div className="mt-7">
      <h2 className="font-bold text-2xl text-primary">Style</h2>
      <p className="text-gray-500">Select your video style</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5 mt-3">
        {styleOptions.map((item, index) => (
          <div
            className={`relative hover:scale-105 transition-all cursor-pointer rounded-xl
          ${selectedOption == item.name && "border-4 border-primary"}
          `}
          >
            <Image
              src={item.image}
              width={100}
              height={100}
              className="h-48 object-cover rounded-lg w-full"
              onClick={() => {
                setSelectedOption(item.name);
                onUserSelect("imageStyle", item.name);
              }}
            />
            <h2 className="absolute p-1 bg-black text-white text-center rounded-b-lg bottom-0 w-full">
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectStyle;
