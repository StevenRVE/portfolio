const Arrow = ({ rotateDegrees = 45 }: { rotateDegrees?: number }) => {
  return (
    <>
      <div
        className="w-8 h-8 border-r-8 border-b-8 animate-moveFade rounded.md"
        style={{ transform: `rotate(${rotateDegrees}deg)` }}
      ></div>
      <div
        className="w-8 h-8 border-r-8 border-b-8 rotate-45 animate-moveFade rounded.md"
        style={{
          transform: `rotate(${rotateDegrees}deg)`,
          animationDelay: "0.2s",
        }}
      ></div>
    </>
  );
};

export default Arrow;
