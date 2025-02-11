const Close = () => {
  return (
    <button className="relative z-50 p-6 bg-slate-200 bg-opacity-50 rounded-md">
      <div className="w-8 h-1 rotate-45 -translate-x-1/2 absolute bg-white absolute-pulse"></div>
      <div className="w-8 h-1 -rotate-45 -translate-x-1/2 absolute bg-white absolute-pulse"></div>
    </button>
  );
};

export default Close;
