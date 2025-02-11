import Image from "next/image";
import githubIcon from "../../../public/icons/github-cat-lines.svg";
import linkedinIcon from "../../../public/icons/linkedin4.svg";

const SocialMedia = ({ size }: { size: number }) => {
  return (
    <div
      className="flex justify-center gap-4"
      style={{ pointerEvents: "auto" }}
    >
      <a
        className="bg-black bg-opacity-50 p-1 rounded-full transition-all hover:scale-110 scale-100"
        href="https://www.linkedin.com/in/steven-van-esch-developer/"
      >
        <Image
          src={linkedinIcon}
          alt="Icon"
          style={{ filter: "invert(1)" }}
          width={size}
          height={size}
        />
      </a>
      <a
        className="bg-black bg-opacity-50 p-1 rounded-full transition-all hover:scale-110 scale-100"
        href="https://github.com/StevenRVE"
      >
        <Image
          src={githubIcon}
          alt="Icon"
          style={{ filter: "invert(1)" }}
          width={size}
          height={size}
        />
      </a>
    </div>
  );
};

export default SocialMedia;
