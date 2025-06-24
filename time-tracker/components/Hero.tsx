import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-90px)] flex flex-col items-center justify-center gap-6 text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold max-w-2xl pt-[80px] md:pt-[1px]">
        A Collaborative Time Tracker You Actually Need
      </h1>

      <p className="text-gray-600 max-w-xl">
        Stay on top of your tasks, track team productivity, and simplify your
        workflow — all in one intuitive platform built for teams that value time
        and clarity.
      </p>

      <div className="mt-6 flex gap-4">
        <Link
          href="#"
          className="px-5 py-3  bg-[#FF553E] text-white  rounded-full hover:bg-orange-800 "
        >
          Start 14 Day Trial
        </Link>
      </div>
    </div>
  );
};

export default Hero;
