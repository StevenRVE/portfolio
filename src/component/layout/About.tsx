import Summary from "@/static/Summary";
import Timeline from "@/static/Timeline";
import Image from "next/image";
import transition from "../../../public/transitions/waves-gradient.svg";

const About = () => {
  return (
    <div id="About" className="bg-slate-800">
      <div className="w-full h-40 relative">
        <Image
          src={transition}
          alt="transition"
          fill
          className="w-full h-auto"
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center text-white">
        <div className="flex lg:w-1/2 w-full flex-col p-20">
          <Summary />
        </div>
        <div className="lg:flex lg:w-1/2 flex-col pl-10 m-10">
          {/* TODO: make year bar hidden in small mode*/}
          {<Timeline />}
        </div>
      </div>
    </div>
  );
};

export default About;
