"use client";
import Btn from "@/ui/Btn";

const SidebarLeft = () => {
  return (
    <div className="mx-4">
      <Btn
        className="m-2  bg-[#039] text-white text-center font-semibold rounded-md  cursor-pointer p-1  hover:bg-[#0a3fa9] transition ease-out delay-100 hover:text-[#eee9e9]"
        btnName="Home"
        clickHandler={() => {
          console.log("home");
        }}
      />
      <Btn
        className="m-2  bg-[#039] text-white text-center font-semibold rounded-md  cursor-pointer p-1 hover:bg-[#0a3fa9] transition ease-out delay-100 hover:text-[#eee9e9] "
        btnName="Post Free Ad"
        clickHandler={() => {
          console.log("home");
        }}
      />
    </div>
  );
};

export default SidebarLeft;
