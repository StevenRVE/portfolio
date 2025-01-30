import Image from "next/image";

interface ServiceData {
  headline: string;
  description: string;
  image: string;
}

const Service = (serviceData: ServiceData) => {
  return (
    <div className="flex min-h-full flex-col lg:w-1/3 m-4 p-8 rounded-md transition-colors hover:bg-slate-700">
      <div className="flex justify-center lg:p-20 p-4 md:p-12 sm:p-12">
        <Image
          src={serviceData.image}
          alt="Service icon"
          width={150}
          height={100}
          className="object-contain"
        />
      </div>
      <p className="text-xl fond-bold">{serviceData.headline}</p>
      <p className="mt-3 text-lg">{serviceData.description}</p>
    </div>
  );
};

export default Service;
