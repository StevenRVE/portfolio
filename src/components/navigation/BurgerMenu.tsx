"use client";

import { useGlobalState } from "@/hooks/contexts/GlobalStateContext";
import { useEffect } from "react";
import SocialMedia from "@/components/ui/SocialMedia";
import BurgerButton from "../buttons/BurgerButton";
import CloseButton from "../buttons/CloseButton";
import Menu from "../navigation/Menu";

const BurgerMenu = () => {
  const { isMenuOpen, toggleMenu, exitMenu } = useGlobalState();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }

    window.addEventListener("resize", exitMenu);

    return () => {
      window.removeEventListener("resize", exitMenu);
    };
  }, [isMenuOpen, toggleMenu, exitMenu]);

  return (
    <div className="lg:hidden">
      <div className="fixed top-0 right-0 p-2 z-50">
        {isMenuOpen ? (
          <CloseButton onClick={exitMenu} />
        ) : (
          <BurgerButton onClick={toggleMenu} />
        )}
      </div>
      {isMenuOpen ? (
        <div className="flex justify-between pt-20 fixed flex-col text-white text-4xl pl-5 bg-black backdrop-blur-md bg-opacity-40 w-full h-full z-40">
          <Menu />
          <SocialMedia size={42} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default BurgerMenu;
