import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/navigation/Navbar";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import "./globals.css";
import BurgerMenu from "@/components/navigation/BurgerMenu";
import { GlobalStateProvider } from "@/hooks/contexts/GlobalStateContext";
import Modal from "@/components/modals/Modal";

export default function Home() {
  return (
    <GlobalStateProvider>
      <Navbar />
      <BurgerMenu />
      <Modal />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Footer />
    </GlobalStateProvider>
  );
}
