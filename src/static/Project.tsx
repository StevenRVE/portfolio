import Tag from "./Tag";
import Image from "next/image";

interface ProjectProps {
  headline: string;
  image: string;
  text: string;
  tags: string[];
  link: string;
  offsetX?: number;
  offsetY?: number;
  scale?: number;
}

const Project = ({
  headline,
  image,
  text,
  tags,
  link,
  offsetX,
  offsetY,
  scale,
}: ProjectProps) => {
  return (
    <a href={link} aria-label={text}>
      <div className="flex flex-col transition-all hover:scale-105 scale-100 bg-opacity-20 bg-black rounded-lg min-h-[450px] max-h-max max-w-96 m-3 text-white">
        <div className="rounded-t-lg max-h-52 object-contain overflow-hidden ">
          <Image
            alt={text}
            src={image}
            width={450}
            height={450}
            style={{
              transform: `translate(${offsetX ?? 0}px, ${
                offsetY ?? 0
              }px) scale(${scale ?? 1})`,
            }}
          />
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
