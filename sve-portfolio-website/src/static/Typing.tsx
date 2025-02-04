import { TypeAnimation } from "react-type-animation";

const Typing = () => {
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
        marginLeft: "5px",
        fontSize: "1em",
        textAlign: "left",
        color: "#84ffff",
        fontWeight: "bold",
        display: "inline-block",
        width: "38.5%",
      }}
      repeat={Infinity}
    />
  );
};

export default Typing;
