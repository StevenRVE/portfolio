"use client";

import Arrow from "@/static/Arrow";
import Link from "next/link";
import SocialMedia from "@/static/SocialMedia";
import Typing from "@/static/Typing";

const Hero = () => {
  return (
    <div
      id="Hero"
      className="flex items-center min-h-screen px-20 bg-gradient-to-r from-gradientLeft to-gradientRight"
    >
      <div className="flex flex-row items-center w-full desktop:flex-row desktop:items-center mobile:flex-col-reverse">
        <div className="flex flex-col z-20 pointer-events-none text-white w-3/5 desktop:w-3/5 mobile:w-full mobile:text-center">
          <p className="desktop:text-[5vw] mobile:text-[8vw] font-bold text-lightcyan w-full">
            Hello, I'm Steven
          </p>
          <p className="desktop:text-[3vw] mobile:text-[5vw]">
            a developer specializing in audio software development with
            <Typing />
          </p>
          <div className="flex mobile:hidden mt-6 justify-start w-[17vw]">
            <SocialMedia size={200} />
          </div>
        </div>
        <img
          className="w-2/5 mobile:w-full mobile:max-w-xl object-contain self-center animate-scalepulse"
          src="/images/portrait-steven-no-bg.webp"
          alt="Portrait"
        />
        <div className="desktop:absolute desktop:bottom-10 inset-0 flex items-end py-2 justify-center z-10">
          <Link href={"/#About"} aria-label="About">
            <Arrow />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
