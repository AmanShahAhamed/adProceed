import Image from "next/image";

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
    <div className="flex justify-between my-2">
      <div>
        <Image
          className="h-28 w-64"
          alt="Logo"
          src={"https://www.adslov.com/images/logo.gif"}
          height={112}
          width={112}
        />
      </div>
      <div>
        <p className="text-black text-sm">{getDate()}</p>
      </div>
    </div>
  );
};

export default TopHeader;
