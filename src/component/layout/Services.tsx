import Service from "@/static/Service";
import ContactButton from "../menu/elements/ContactButton";
import Image from "next/image";
import serviceIcon1 from "../../../public/icons/dashboard.svg";
import serviceIcon2 from "../../../public/icons/music-equalizer.svg";
import serviceIcon3 from "../../../public/icons/desktop-code.svg";
import transitionGradient from "../../../public/transitions/waves-gradient.svg";

const Services = () => {
  return (
    <div
      id="Services"
      className="flex text-white min-h-full flex-col items-center bg-grey"
    >
      <div className="w-full h-20 relative">
        <Image
          src={transitionGradient}
          alt="transition"
          fill
          className="w-full h-auto"
        />
      </div>
      <p className="flex text-4xl my-8 justify-center text-white font-bold ">
        Services
      </p>
      <div className="flex lg:flex-row flex-col text-center justify-center">
        <Service
          headline="Audio Plugin Development"
          description="Service 1 description"
          image={serviceIcon1}
        />
        <Service
          headline="Audio Software Development"
          description="Service 2 description"
          image={serviceIcon2}
        />
        <Service
          headline="Audio Plugin Quality Assurance"
          description="Testing VSTs, AUs, LV2, and AAX plugins"
          image={serviceIcon3}
        />
      </div>
      <p className="flex flex-col lg:text-3xl text-2xl font-bold text-center items-center m-12">
        More information coming soon!
      </p>
      <button className="mb-12 text-2xl">
        {/* TODO: Make button bigger */}
        <ContactButton title={"Let's work together"} />
      </button>
    </div>
  );
};

export default Services;
