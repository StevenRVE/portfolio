import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "C++",
        1000,
        "Arduino",
        600,
        "Tailwind CSS",
        600,
        "Next.js",
        600,
      ]}
      wrapper="span"
      speed={10}
      preRenderFirstString={true}
      style={{
        marginLeft: "0px",
        fontSize: "1em",
        textAlign: "left",
        color: "#84ffff",
        fontWeight: "bold",
        display: "inline-block",
        width: "100%",
      }}
      repeat={Infinity}
    />
  );
};

export default TypingAnimation;
