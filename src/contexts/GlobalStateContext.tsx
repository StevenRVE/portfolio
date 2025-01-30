"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";
import { GlobalState } from "../types/types.d";

const GlobalStateContext = createContext<GlobalState | undefined>(undefined);

export const useGlobalState = (): GlobalState => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};

export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  // Toggles
  const toggleMenu = (): void => {
    setMenuOpen((prevState) => !prevState);
  };

  const toggleModal = (): void => {
    setModalOpen((prevState) => !prevState);
  };

  // Exits
  const exitMenu = (): void => {
    setMenuOpen(false);
  };

  const exitModal = (): void => {
    setModalOpen(false);
  };

  // Global state
  const value: GlobalState = {
    isMenuOpen,
    isModalOpen,
    toggleMenu,
    toggleModal,
    exitMenu,
    exitModal,
  };

  return (
    <GlobalStateContext.Provider value={value}>
      {children}
    </GlobalStateContext.Provider>
  );
};
