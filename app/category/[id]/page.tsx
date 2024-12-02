import DemoImage from "../../../public/demo.png";
import Image from "next/image";
const Page = () => {
  return (
    <div className=" grid grid-cols-6 col-span-5 w-full">
      {/* add section */}
      <div className="col-span-4 mx-4 ">
        <div className="border-[1px] border-black  p-4 rounded-md shadow-md relative ">
          <p className="font-semibold text-[#039] text-xl ">
            Transform Your Dream - Make It An Income-Generating Machine
          </p>
          <p className="text-[#2d4f78] text-base py-4">Posted 23/12/2024</p>
          <p className="text-[#2d4f78] text-base ">Location Kanpur-Unnao</p>
          <div className="m-6 border-black border-[1px] ">
            <Image
              alt="ad_image"
              src={DemoImage}
              height={220}
              width={430}
              className="object-fit object-right-bottom"
            />
          </div>
          {/* tag */}
          <div className="absolute top-[10px] right-[-55px]  text-base rotate-45  bg-red-400 px-4 py-1 rounded-sm text-white  text-center clip-m-shape ">
            {"Available"}
            <div className="absolute bg-white rounded-full w-2 h-2 top-1/2 left-[5px]"></div>
          </div>
        </div>
        {/* description */}
        <div className="my-4 border-black border-[1px]">
          <div className="flex justify-start gap-8 p-4">
            <p>Location</p>
            <p>Kanpur Unnao</p>
          </div>
          <div className="flex justify-start gap-8 p-4">
            <p>Category</p>
            <p>Digital Marketing</p>
          </div>
          <p className="p-4 text-pretty font-semibold">Description</p>
          <p className="px-4 py-4 text-pretty">{`Are you ready to learn how to be successful? Join a System—a
            friendly community of passionate people just like you! Together,
            we’ll share strategies, provide feedback, and support each other to
            achieve top success. Whether you’re just starting out or a seasoned
            veteran, we’ve got your back. The details are here for you to see:
            https://5d93.com/pbs/`}</p>
        </div>
      </div>
      {/* contact section */}
      <div className="col-span-4"></div>
    </div>
  );
};

export default Page;
