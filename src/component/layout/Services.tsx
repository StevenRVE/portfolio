import Service from "@/static/Service";
import ContactButton from "../menu/elements/ContactButton";
import Image from "next/image";
import serviceIcon1 from "@/public/icons/dashboard.svg";
import serviceIcon2 from "@/public/icons/music-equalizer.svg";
import serviceIcon3 from "@/public/icons/desktop-code.svg";

const Services = () => {
  return (
    <div
      id="Services"
      className="flex text-white min-h-full flex-col items-center bg-slate-800"
    >
      <Image
        src="/transitions/transition_gradient.svg"
        alt="transition"
        width={1920}
        height={176}
      />
      <p className="flex text-4xl my-8 justify-center text-white font-bold ">
        Services
      </p>
      <div className="flex desktop:flex-row mobile:flex-col mobile:items-center justify-around text-center w-full">
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
          headline="Web Development"
          description="Service 3 description"
          image={serviceIcon3}
        />
      </div>
      <p className="flex flex-col desktop:text-[40px] mobile:text-[24x] font-bold text-center items-center mb-4">
        More information coming soon!
        <ContactButton title={"Contact"} />
      </p>
    </div>
  );
};

export default Services;
