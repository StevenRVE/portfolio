"use client";

import Arrow from "@/components/ui/Arrow";
import Link from "next/link";
import SocialMedia from "@/components/ui/SocialMedia";
import TypingAnimation from "@/components/ui/TypingAnimation";
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
          <div className="lg:flex hidden mt-6 justify-start w-[15vw]">
            <SocialMedia size={100} />
          </div>
        </div>
        <div className="lg:w-2/5 w-full order-first lg:order-last">
          <Image
            src="/images/portrait-steven-no-bg.webp"
            alt="Portrait"
            width={500}
            height={500}
            className="object-contain mb-10 lg:mb-0"
          />
        </div>
        <div className="flex lg:absolute bottom-10 inset-0 items-end p-0 justify-center">
          <Link href={"/#About"} aria-label="About" className="px-4 pb-4 pt-2">
            <Arrow />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
