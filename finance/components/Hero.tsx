import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-20 md:mt-32 pt-10">
      <section className="relative max-w-xl">
        {/* Candle Image Positioned */}
        <Image
          src="/images/candle.svg"
          alt="hero-img"
          width={80}
          height={80}
          className="absolute -top-6 -left-6 w-16 h-16 md:w-20 md:h-20"
        />

        {/* Main Heading */}
        <p className="text-4xl font-bold leading-tight pl-8 md:pl-12">
          Committed To People Committed To
          <span className="text-[#8976FD]"> The Future</span>
        </p>

        {/* Short aligned description */}
        <p className="text-lg mt-4 text-gray-700 pl-8 md:pl-12">
          We build digital solutions that serve people today and shape the
          future.
        </p>

        {/* CTA Button */}
        <Link href="/#">
          <Button className="bg-[#8976FD] px-5 py-3 mt-6 hover:bg-purple-800 cursor-pointer ml-8 md:ml-12">
            Get Started Now
          </Button>
        </Link>
      </section>

      <section className="w-full max-w-sm md:max-w-full">
        <Image
          src="/images/hero-img.svg"
          alt="Illustration showing commitment to the future"
          width={500}
          height={500}
          priority
          className="w-full h-auto"
        />
      </section>
    </div>
  );
};

export default Hero;
