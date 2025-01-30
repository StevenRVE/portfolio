import SocialMedia from "@/static/SocialMedia";
import Image from "next/image";
import transitionGrey from "../../../public/transitions/transition_grey.svg";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-gradientLeft to-gradientRight">
      <Image
        src={transitionGrey}
        alt="transition"
        className="w-contain w-full h-auto"
      />
      <footer className="flex flex-col items-center">
        <div className="pt-5">
          <SocialMedia size={35} />
        </div>
        <div className="flex items-center p-5 text-white">
          &copy; {new Date().getFullYear()} by&nbsp;
          <a
            href=" https://www.github.com/StevenRVE"
            className="hover:underline"
          >
            Steven van Esch
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
