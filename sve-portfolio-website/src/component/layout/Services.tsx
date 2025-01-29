import Service from "@/static/Service";

function Services() {
  return (
    <div className="bg-slate-800">
      <img
        className="w-full h-44"
        src="/transitions/transition_gradient.svg"
        alt="transition"
      />
      <p className="flex text-4xl my-8 justify-center text-white font-bold ">
        Services
      </p>
      <div className="flex desktop:flex-row mobile:flex-col mobile:items-center flex-grow justify-around text-center">
        <Service
          headline="Service 1"
          description="Service 1 description"
          image="/icons/dashboard.svg"
        />
        <Service
          headline="Service 2"
          description="Service 2 description"
          image="/icons/music-equalizer.svg"
        />
        <Service
          headline="Service 3"
          description="Service 3 description"
          image="/icons/desktop-code.svg"
        />
      </div>
    </div>
  );
}

export default Services;
