import Service from "@/static/Service";
import ContactButton from "../menu/elements/ContactButton";

const Services = () => {
  return (
    <div
      id="Services"
      className="flex text-white min-h-full flex-col items-center bg-slate-800"
    >
      <img
        className="w-full h-44"
        src="/transitions/transition_gradient.svg"
        alt="transition"
      />
      <p className="flex text-4xl my-8 justify-center text-white font-bold ">
        Services
      </p>
      <div className="flex desktop:flex-row mobile:flex-col mobile:items-center justify-around text-center w-full">
        <Service
          headline="Audio Plugin Development"
          description="Service 1 description"
          image="/icons/dashboard.svg"
        />
        <Service
          headline="Audio Software Development"
          description="Service 2 description"
          image="/icons/music-equalizer.svg"
        />
        <Service
          headline="Web Development"
          description="Service 3 description"
          image="/icons/desktop-code.svg"
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
