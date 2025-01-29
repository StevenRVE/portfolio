import SocialMedia from "@/static/SocialMedia";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-gradientLeft to-gradientRight">
      <img
        className="w-full h-44"
        src="/transitions/transition_grey.svg"
        alt="transition"
      />
      <footer className="flex flex-col items-center">
        <div className="pt-5">
          <SocialMedia size={35} />
        </div>
        <hr className="flex-grow" />
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
