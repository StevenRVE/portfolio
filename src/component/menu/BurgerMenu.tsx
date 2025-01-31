"use client";

import { useGlobalState } from "@/contexts/GlobalStateContext";
import { useEffect } from "react";
import SocialMedia from "@/static/SocialMedia";
import Burger from "./elements/Burger";
import Close from "./elements/Close";
import Menu from "./elements/Menu";

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
      <div className="fixed top-0 right-0 p-2 z-50" onClick={toggleMenu}>
        {/* Tried to change this to <button> but descendant issue? */}
        {isMenuOpen ? <Close /> : <Burger />}
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
