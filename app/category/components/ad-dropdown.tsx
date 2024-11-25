import { useEffect, useRef, useState } from "react";
import { FaArrowDown } from "react-icons/fa";

interface IProps {
  values: {
    title: string;
    value: string;
  }[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

const AdDropdown: React.FC<IProps> = ({ values, defaultValue }) => {
  const [dropdownName, setDropdownName] = useState(
    defaultValue ?? values[0].title
  );
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
    <div className="cursor-pointer relative z-20">
      <div
        ref={ref}
        className="py-1 relative pr-8 pl-2 border-black border-[1px] rounded-md"
        onClick={() => setOpen((prev) => !prev)}
      >
        <p className="text-base min-w-28">{dropdownName}</p>
        <span
          className={` font-semibold absolute right-2 top-[10px] ${
            !open ? "transform rotate-180 " : ""
          } transition-transform duration-300`}
        >
          <FaArrowDown />
        </span>
        {open && (
          <div
            className={`absolute left-1 mt-3 bg-slate-50 border border-gray-100 rounded-md shadow-md shadow-slate-200  min-w-full text-start  transition-all ease-in-out duration-300  ${
              open ? "opacity-100 scale-100" : "opacity-0 scale-95"
            } transition-all duration-1000 ease-in-out`}
          >
            <ul className="py-1.5 m-2 text-xs text-black">
              {values.map(({ title, value }) => (
                <li key={value}>
                  <p
                    className={`flex mb-1 items-center font-medium px-3 rounded-md py-2 cursor-pointer transition-colors duration-200 ease-in ${"hover:bg-[#4174A8]/15 text-[#40444D] hover:text-[#4174A8] font-semibold"} overflow-hidden`}
                    onClick={() => setDropdownName(title)}
                  >
                    {title}
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

export default AdDropdown;
