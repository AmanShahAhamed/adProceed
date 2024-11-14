"use client";
import { useEffect, useRef, useState } from "react";
import { FaArrowDown } from "react-icons/fa";

const options = [
  {
    name: "All",
    key: "all",
  },
  {
    name: "Digital Item",
    key: "digital_item",
  },
  {
    name: "Community",
    key: "community",
  },
  {
    name: "Services",
    key: "services",
  },
  {
    name: "Entertainment",
    key: "entertainment",
  },
  {
    name: "For Sale",
    key: "for_sale",
  },
  {
    name: "Property",
    key: "property",
  },
  {
    name: "Tickets",
    key: "tickets",
  },
  {
    name: "Pets & Livestock",
    key: "pets_livestock",
  },
  {
    name: "Job",
    key: "job",
  },
  {
    name: "Personals",
    key: "personals",
  },
  {
    name: "Vehicles & Monitoring",
    key: "vehicles_monitoring",
  },
];

const Dropdown = () => {
  const [dropdownName, setDropdownName] = useState("all");
  const [open, setOpen] = useState(false);

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
        <p className="overflow-scroll">{dropdownName}</p>
        <span
          className={`pr-2 pt-1 font-semibold  ${
            !open ? "transform rotate-180 " : ""
          } transition-transform duration-300`}
        >
          <FaArrowDown />
        </span>
        {open && (
          <div
            className={`absolute left-1 mt-7  border border-gray-100 bg-white  rounded-md shadow-md shadow-slate-200  min-w-full text-start  transition-all ease-in-out duration-300  ${
              open ? "opacity-100 scale-100" : "opacity-0 scale-95"
            } transition-all duration-1000 ease-in-out`}
          >
            <ul className="py-1.5 m-2 text-xs text-black">
              {options.map(({ name, key }) => (
                <li key={key}>
                  <p
                    className={`flex mb-1 items-center font-medium px-3 rounded-md py-2 cursor-pointer transition-colors duration-200 ease-in ${"hover:bg-[#EFEFFF] text-[#40444D] hover:text-[#2E3192]"} overflow-hidden`}
                    onClick={() => setDropdownName(name)}
                  >
                    {name}
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
