import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-10 md:pt-5">
      {/* Text Section */}
      <section className="relative max-w-lg text-center md:text-left">
        <p className="text-4xl font-bold leading-tight">
          Manage Your Business
          <span className="relative inline-block mx-1">
            <span className="relative z-10 text-[#5BC17F] px-2">Finance</span>
            <svg
              className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
              viewBox="0 0 150 70"
              preserveAspectRatio="none"
            >
              <ellipse
                cx="75"
                cy="35"
                rx="70"
                ry="28"
                stroke="#FFD375"
                strokeWidth="4"
                fill="none"
                transform="rotate(-3 75 35)"
              />
            </svg>
          </span>
          Easily
        </p>

        <p className="text-lg mt-4 text-gray-700">
          We build digital solutions that serve people today and shape the
          future.
        </p>

        <Link href="/#">
          <Button className="bg-[#5BC17F] px-5 py-3 mt-6 hover:bg-green-800 cursor-pointer">
            Get Started Now
          </Button>
        </Link>
      </section>

      <section className="relative w-full max-w-[400px] md:max-w-[500px] mt-12 md:mt-0">
        {/* Mobile Image */}
        <Image
          src="/images/mobile.svg"
          alt="Mobile app interface illustration"
          width={420}
          height={420}
          priority
          className="w-full h-auto relative z-0"
        />

        {/* Balance Image – moved further right (20%) */}

        {/* Analytics Image – moved further left (20%) */}
      </section>
    </div>
  );
};

export default Hero;
