import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-10">
      <section className="max-w-xl">
        <Image
          src={"/images/hero-img"}
          alt="hero-img"
          width={500}
          height={500}
          className=""
        />
        <p className="text-5xl font-bold leading-tight">
          Committed To People
          <br />
          <span className="text-[#8976FD]">Committed To The Future</span>
        </p>

        <p className="text-lg mt-4 text-gray-700">
          An enim nullam tempor sapien gravida donec enim ipsum porta justo
          congue magna at
        </p>

        <Link href="/#">
          <Button className="bg-[#8976FD] px-5 py-3 mt-6 hover:bg-purple-800 cursor-pointer">
            Get Started Now
          </Button>
        </Link>
      </section>

      <section className="w-full max-w-sm md:max-w-full">
        <Image
          src="/images/hero-img"
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
