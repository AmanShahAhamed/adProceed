"use client";
import { findCategory } from "@/constants/category";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import DemoImage from "../../public/demo.png";
export default function Page() {
  const searchParam = useSearchParams();
  const slug = searchParam.get("cat");

  const categoryInfo = findCategory(slug);

  if (slug == "" || !categoryInfo) return <div>Not found</div>;

  return (
    <div className="col-span-5  ">
      {/* item description */}
      <div className="">
        <div
          className={`flex gap-1 border-[1px] p-2 ${
            categoryInfo.desc ? "border-b-0 " : ""
          } border-black`}
        >
          {<span className="text-white">{categoryInfo.icon}</span>}
          <p className="m-1 text-black font-semibold">{categoryInfo.name}</p>
        </div>
        {categoryInfo.desc && (
          <p className="text-base border-[1px] border-black p-2 rounded-sm  bg-gray-100">
            {categoryInfo.desc}
          </p>
        )}
      </div>
      {/* listing */}
      <div className="border-[1px] border-black rounded-md grid grid-cols-8 p-2 my-2 bg-[#f5f7fb] cursor-pointer">
        {/* image */}
        <div className="col-span-2 bg-white  flex items-center justify-center p-4">
          <Image
            alt="ad_image"
            src={DemoImage}
            className="max-w-32 relative z-30 "
          />
        </div>
        {/* content */}
        <div className="col-span-6 p-2">
          <h3 className="text-[#2d4f78] font-bold  text-pretty text-xl">
            {"Transform Your Dream - Make It An Income-Generating Machine"}
          </h3>
          <p>
            {` Are you ready to learn how to be successful? Join a System—a
            friendly community of passionate people just like you! Together,
            we’ll share strategies, provide feedback, and support each other to
            achieve top success. Whether you’re just starting out or a seasoned
            veteran, we’ve got your back. The details are here for you to see:
            https://5d93.com/pbs/`}
          </p>
        </div>
      </div>
    </div>
  );
}
