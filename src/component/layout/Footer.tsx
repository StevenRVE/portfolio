import SocialMedia from "@/static/SocialMedia";
import Image from "next/image";
import transitionGrey from "../../../public/transitions/waves-grey.svg";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-gradientLeft to-gradientRight">
      <div className="w-full h-40 relative">
      <Image
        src={transitionGrey}
        alt="transition"
          fill
          className="w-full h-auto"
      />
      </div>
      <footer className="flex flex-col items-center">
        <div className="pt-5">
          <SocialMedia size={100} />
        </div>
        <div className="flex items-center p-5 text-white">
          &copy; {new Date().getFullYear()} by&nbsp;
          <a>Steven van Esch</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
