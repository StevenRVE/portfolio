"use client";

import { useGlobalState } from "@/hooks/contexts/GlobalStateContext";
import { useEffect } from "react";

const ContactButton = ({ title }: { title: string }) => {
  const { isModalOpen, toggleModal, exitMenu } = useGlobalState();

  const handleClick = () => {
    toggleModal();
    exitMenu();
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [isModalOpen]);

  return (
    <div className="flex items-center cursor-pointer">
      <div
        aira-label={title}
        className={
          "transition ease-in-out duration-300 text-center border-2 border-white rounded-3xl px-3 py-1 hover:bg-white hover:text-black"
        }
        onClick={handleClick}
      >
        {title}
      </div>
    </div>
  );
};

export default ContactButton;
