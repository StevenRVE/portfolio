"use client";

import UseScrollFade from "@/hooks/useScrollFade";
import MenuItem from "@/components/navigation/MenuItem";
import ContactButton from "../buttons/ContactButton";

const Navbar = () => {
  const isAtTop = UseScrollFade();

  return (
    <div
      className={`hidden lg:sticky -mt-14 top-0 z-50 ${
        isAtTop
          ? "opacity-100"
          : "opacity-0 hover:opacity-100 transition-opacity duration-500"
      } lg:flex justify-end items-center h-14 w-full bg-gradient-to-r from-transparent to-black text-white`}
    >
      <div className="flex justify-around text-2x1 w-1/2 items-center">
        <MenuItem title={"About"} />
        <MenuItem title={"Projects"} />
        <MenuItem title={"Services"} />
        <ContactButton title={"Contact"} />
      </div>
    </div>
  );
};

export default Navbar;
