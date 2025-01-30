"use client";

import Arrow from "@/static/Arrow";
import Link from "next/link";
import SocialMedia from "@/static/SocialMedia";
import TypingAnimation from "../../static/TypingAnimation";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      id="Hero"
      className="flex items-center min-h-screen px-20 bg-gradient-to-r from-gradientLeft to-gradientRight"
    >
      <div className="flex items-center w-full lg:flex-row lg:items-center flex-col">
        <div className="flex flex-col z-20 pointer-events-none text-white lg:w-3/5 w-full text-left">
          <p className="lg:text-[5vw] text-[8vw] font-bold text-lightcyan w-full">
            Hello, I&apos;m Steven
          </p>
          <p className="lg:text-[3vw] text-[5vw]">
            a developer specializing in audio software development with
            <TypingAnimation />
          </p>
          <div className="lg:flex hidden mt-6 justify-start w-[17vw]">
            <SocialMedia size={200} />
          </div>
        </div>
        <div className="lg:w-2/5 w-full order-first lg:order-last">
          <Image
            src="/images/portrait-steven-no-bg.webp"
            alt="Portrait"
            layout="fill"
          />
        </div>
        <div className="lg:absolute lg:bottom-10 inset-0 flex items-end py-2 justify-center z-10">
          <Link href={"/#About"} aria-label="About">
            <Arrow />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
