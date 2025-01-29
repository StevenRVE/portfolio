interface ServiceData {
  headline: string;
  description: string;
  image: string;
}

const Service = (serviceData: ServiceData) => {
  return (
    <div className="flex min-h-full flex-col desktop:w-1/3 m-4 mobile:w-3/4 p-8 rounded-md transition-colors hover:bg-slate-700">
      <img
        className="w-2/3 h-auto self-center p-14"
        src={serviceData.image}
        alt="transition"
      />
      <p className="text-xl fond-bold">{serviceData.headline}</p>
      <p className="mt-3 text-lg">{serviceData.description}</p>
    </div>
  );
};

export default Service;
