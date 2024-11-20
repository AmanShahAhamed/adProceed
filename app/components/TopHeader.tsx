import RegionIcon from "@/public/icons/region";
import TimeAndDateIcn from "@/public/icons/time-date";
import Image from "next/image";
import Logo from "../../public/logo.png";

const getDate = (): string => {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  };

  const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(date);
  return formattedDate;
};

const TopHeader = () => {
  return (
    <div className="flex justify-between my-1 z-10">
      <div>
        <Image
          className="h-28 w-64"
          alt="Logo"
          src={Logo}
          height={112}
          width={112}
        />
      </div>
      <div className="bg-gradient-to-br from-[#2d4f78] via-[#4174A8] to-[#82a3d4] p-2 rounded-md mt-2">
        <div className="flex gap-2">
          <TimeAndDateIcn height={30} width={50} />
          <span className="text-white text-sm font-semibold">{getDate()}</span>
        </div>
        <div className="border-[1px] border-white h-[1px] w-[100%] my-4"></div>
        <div className="flex  gap-2">
          <RegionIcon height={30} width={50} />
          <span className="text-white text-sm  font-semibold">{`[All Region]`}</span>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
