import Image from 'next/image';

const Vendor = () => {
  return (
    <div className="w-full flex flex-col self-stretch items-center justify-center px-20">
      <div className="flex flex-col self-stretch bg-white rounded-xl p-9 gap-6">
        <p className="text-2xl text-gray_body font-bold">Agen Penjual</p>
        <div className="flex flex-row gap-2.5">
          <Image
            alt="image_vendor"
            width={0}
            height={0}
            className="h-auto w-auto"
            src="https://i.ibb.co/9wcjf4W/Frame-315725.png"
          />
          <Image
            alt="image_vendor"
            width={0}
            height={0}
            className="h-auto w-auto"
            src="https://i.ibb.co/1bnkJcZ/Frame-315726.png"
          />
          <Image
            alt="image_vendor"
            width={0}
            height={0}
            className="h-auto w-auto"
            src="https://i.ibb.co/PFdfyVr/Frame-315727.png"
          />
          <Image
            alt="image_vendor"
            width={0}
            height={0}
            className="h-auto w-auto"
            src="https://i.ibb.co/2qRx4fh/Frame-315729.png"
          />
          <Image
            alt="image_vendor"
            width={0}
            height={0}
            className="h-auto w-auto"
            src="https://i.ibb.co/YX4S62y/Logo-Phillip-Sekuritas-Indonesia-Color-Phillip-Sekuritas-Indonesia-1.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Vendor;
