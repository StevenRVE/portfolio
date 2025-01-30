import Tag from "./Tag";
import Image from "next/image";

interface ProjectProps {
  headline: string;
  image: string;
  text: string;
  tags: string[];
  link: string;
}

const Project = ({ headline, image, text, tags, link }: ProjectProps) => {
  return (
    <a href={link} aria-label={text}>
      <div className="flex flex-col transition-all hover:scale-105 scale-100 bg-opacity-20 bg-black rounded-lg max-h-max max-w-96 m-3 text-white">
        <div className="w-fit h-fit rounded-t-lg max-h-64">
          <Image alt={text} src={image} fill />
        </div>
        <div className="p-4">
          <div className="text-xl font-medium mb-4">{headline}</div>
          <p>{text}</p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
            {tags.map((item, index) => (
              <li key={index} className="mr-1.5 mt-2">
                <Tag title={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </a>
  );
};

export default Project;
