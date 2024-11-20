"use client";
import Btn from "@/components/Btn";
import Dropdown from "../utils-components/Dropdown";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

const SidebarLeft = () => {
  return (
    <div className="mx-4">
      <div className="m-2  bg-[#4682b4] text-white text-center font-semibold rounded-md  cursor-pointer p-1 hover:bg-[#5699cf]  transition ease-out delay-100 hover:text-[#eee9e9] ">
        <Link href={"/"}>{"Home"}</Link>
      </div>

      <div className="m-2  bg-[#4682b4] text-white text-center font-semibold rounded-md  cursor-pointer p-1 hover:bg-[#5699cf]  transition ease-out delay-100 hover:text-[#eee9e9] ">
        <Link href={"/"}>{"Post Free Ad"}</Link>
      </div>

      <p className="font-semibold text-base text-[#036]">Search</p>
      <input className="border-[1px] border-black rounded-md h-8 w-[100%] p-2" />
      <Dropdown />
      <Btn
        className="float-end mt-1  bg-[#4682b4] text-white text-center font-semibold rounded-md px-2  cursor-pointer p-1 hover:bg-[#5699cf]  transition ease-out delay-100 hover:text-[#eee9e9] "
        icon={<FaSearch />}
        clickHandler={() => {
          console.log("home");
        }}
      />
      <div className="my-20 flex flex-col border-[1px] border-black rounded-md">
        <p className="font-semibold text-sm text-center bg-[#4174a8] text-white p-2 rounded-md rounded-b-none">
          Why Choose Us?
        </p>
        <ul className="text-sm p-2 bg-gray-100 rounded-md">
          <li>
            Our platform offers a hassle-free way to post classified ads quickly
            and effortlessly.
          </li>
          <li>
            You can publish your ad for free without any registration saving you
            time and simplifying the process.
          </li>
          <li>
            Our intuitive interface ensures that your ad goes live within
            minutes.
          </li>
          <li>
            Best of all, there are no hidden costs or sign-up requirements,
            making it an affordable and practical solution to connect with
            potential buyers.
          </li>
          <li>
            Experience the ease and convenience of our free classified ad
            service today.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarLeft;
