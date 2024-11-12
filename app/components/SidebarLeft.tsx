"use client";
import Btn from "@/ui/Btn";
import Dropdown from "../utils-components/Dropdown";
import { FaSearch } from "react-icons/fa";

const SidebarLeft = () => {
  return (
    <div className="mx-4">
      <Btn
        className="m-2  bg-[#4682b4] text-white text-center font-semibold rounded-md  cursor-pointer p-1  hover:bg-[#5699cf] transition ease-out delay-100 hover:text-[#eee9e9]"
        btnName="Home"
        clickHandler={() => {
          console.log("home");
        }}
      />
      <Btn
        className="m-2  bg-[#4682b4] text-white text-center font-semibold rounded-md  cursor-pointer p-1 hover:bg-[#5699cf]  transition ease-out delay-100 hover:text-[#eee9e9] "
        btnName="Post Free Ad"
        clickHandler={() => {
          console.log("home");
        }}
      />
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
      <div className="my-40 mx-4 flex flex-col align-middle justify-center">
        <p className="font-semibold text-base text-center">New Classified </p>
        <p className="font-semibold text-base text-center">Websites</p>
      </div>
    </div>
  );
};

export default SidebarLeft;
