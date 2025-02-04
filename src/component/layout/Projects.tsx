import Project from "../../static/Project";
import projectData from "../../../public/data/projects.json";
import Image from "next/image";
import transitionGrey from "../../../public/transitions/waves-grey.svg";

const Projects = () => {
  return (
    <div
      id="Projects"
      className="bg-gradient-to-r from-gradientLeft to-gradientRight"
    >
      <div className="w-full h-40 relative">
      <Image
        src={transitionGrey}
        alt="transition"
          fill
          className="w-full h-auto"
      />
      </div>
      <p className="flex text-4xl mb-8 mt-16 justify-center text-white font-bold">
        Featured Projects
      </p>
      <div className="flex flex-wrap w-full lg:pl-20 lg:pr-20 justify-center">
        {projectData.data.map((item, index) => (
          <Project
            key={index}
            headline={item.title}
            image={item.image}
            text={item.text}
            tags={item.tags}
            link={item.link}
            offsetX={item.offsetX}
            offsetY={item.offsetY}
            scale={item.scale}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
