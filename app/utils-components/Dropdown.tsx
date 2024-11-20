"use client";
import { Category, findCategory } from "@/constants/category";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaArrowDown } from "react-icons/fa";

const Dropdown = () => {
  const params = useSearchParams();
  const [dropdownName, setDropdownName] = useState("All");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setDropdownName(findCategory(params.get("cat"))?.name ?? "All");
  }, [params]);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node))
        setOpen(false);
    };
    if (open) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="relative z-20 cursor-pointer text-xs">
      <div
        ref={ref}
        className="border-[1px] bg-[#fff] flex justify-between gap-2 h-8 border-black rounded-md mt-2 p-1 pl-2 text-sm w-[100%]"
        id="category"
        onClick={() => setOpen((prev) => !prev)}
      >
        <p className="">{dropdownName}</p>
        <span
          className={`pr-2 pt-1 font-semibold absolute right-2 ${
            !open ? "transform rotate-180 " : ""
          } transition-transform duration-300`}
        >
          <FaArrowDown />
        </span>
        {open && (
          <div
            className={`absolute left-1 mt-7 bg-slate-50 border border-gray-100 rounded-md shadow-md shadow-slate-200  min-w-full text-start  transition-all ease-in-out duration-300  ${
              open ? "opacity-100 scale-100" : "opacity-0 scale-95"
            } transition-all duration-1000 ease-in-out`}
          >
            <ul className="py-1.5 m-2 text-xs text-black">
              <li>
                <p
                  className={`flex mb-1 items-center font-medium px-3 rounded-md py-2 cursor-pointer transition-colors duration-200 ease-in ${"hover:bg-[#4174A8]/15 text-[#40444D] hover:text-[#4174A8] font-semibold"} overflow-hidden`}
                  onClick={() => setDropdownName("All")}
                >
                  {"All"}
                </p>
              </li>
              {Object.keys(Category).map((category) => (
                <li key={category}>
                  <p
                    className={`flex mb-1 items-center font-medium px-3 rounded-md py-2 cursor-pointer transition-colors duration-200 ease-in ${"hover:bg-[#4174A8]/15 text-[#40444D] hover:text-[#4174A8] font-semibold"} overflow-hidden`}
                    onClick={() => setDropdownName(Category[category].name)}
                  >
                    {Category[category].name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
