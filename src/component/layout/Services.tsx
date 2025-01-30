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
      <div className="flex lg:flex-row flex-col justify-around text-center m-10">
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
      <p className="flex flex-col lg:text-[40px] text-[20px] font-bold text-center items-center mb-4">
        More information coming soon!
        <ContactButton title={"Contact"} />
      </div>
    </div>
  );
};

export default Services;
