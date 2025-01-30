import Summary from "@/static/Summary";
import Timeline from "@/static/Timeline";
import Image from "next/image";

const About = () => {
  return (
    <div id="About" className="bg-slate-800">
      <Image
        src="/transitions/transition_gradient.svg"
        alt="transition"
        width={1920}
        height={176}
      />
      <div className="flex justify-center items-center text-white">
        <div className="flex desktop:w-1/2 mobile:w-full mobile:p-4 flex-col desktop:p-20">
          <Summary />
        </div>
        <div className="desktop:flex mobile:hidden w-1/2 flex-col pl-10">
          {<Timeline />}
        </div>
      </div>
    </div>
  );
};

export default About;
