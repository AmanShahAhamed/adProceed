"use client";
import Btn from "@/ui/Btn";
import SearchBar from "./SearchBar";

const SidebarLeft = () => {
  return (
    <>
    <div className="mx-4">
      <Btn
        className="m-2  bg-[#4782b4] text-white text-center font-semibold rounded-md  cursor-pointer p-1  hover:bg-[#4a9ae0] transition ease-out delay-100 hover:text-[#eee9e9]"
        btnName="Home"
        clickHandler={() => {
          console.log("home");
        }}
      />
      <Btn
        className="m-2  bg-[#4782b4] text-white text-center font-semibold rounded-md  cursor-pointer p-1 hover:bg-[#4a9ae0] transition ease-out delay-100 hover:text-[#eee9e9] "
        btnName="Post Free Ad"
        clickHandler={() => {
          console.log("home");
        }}
      />
    </div>
    <SearchBar/>
</>
  );
};

export default SidebarLeft;
