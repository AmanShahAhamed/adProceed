import AdLocationIcon from "../../../public/icons/ad-location";
import AdClockIcon from "../../../public/icons/ad-clock";
import Image, { StaticImageData } from "next/image";

interface IProps {
  previewImage: StaticImageData;
  title: string;
  content: string;
  location: string;
  adDate: string;
  tag?: string;
  isFeatures?: boolean;
}

const AdCard: React.FC<IProps> = ({
  previewImage,
  title,
  content,
  location,
  adDate,
  tag,
}) => {
  return (
    <div className="rounded-lg grid grid-cols-8 p-2 my-2 bg-[#f5f7fb]  cursor-pointer relative shadow-md hover:border-gray-300 hover:border-[1px] hover:shadow-xl">
      {/* image */}
      <div className="col-span-1 bg-gray-100  flex items-center justify-center p-4">
        <Image
          alt="ad_image"
          src={previewImage}
          className="max-w-20 relative z-30 "
        />
      </div>
      {/* content */}
      <div className="col-span-7 p-2">
        <h3 className="text-[#2d4f78] font-bold  text-pretty text-lg">
          {title}
        </h3>
        <p>{content.substring(0, 200) + "...."}</p>
        <div className="flex mt-8">
          <div className="flex">
            <span>
              <AdLocationIcon height={25} />
            </span>
            <span>{location}</span>
          </div>
          <div className="flex justify-start">
            <span className="my-[1px]">
              <AdClockIcon height={20} />
            </span>
            <span className="">{adDate}</span>
          </div>
        </div>
      </div>
      {/* tag */}
      {tag && (
        <div className="absolute top-0 right-[-28px]  text-base rotate-45  bg-red-400 px-4 py-1 rounded-lg text-white  text-center">
          {tag}
        </div>
      )}
    </div>
  );
};

export default AdCard;
