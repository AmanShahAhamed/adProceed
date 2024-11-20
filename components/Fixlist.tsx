"use client";
import Link from "next/link";
import { useMemo, useState } from "react";

interface IProps {
  className?: string;
  list: {
    id: string;
    name: string;
  }[];
}
export const FixList: React.FC<IProps> = ({ className, list }) => {
  const modifiedList = useMemo(
    () =>
      list.length <= 5
        ? [
            [
              ...list,
              ...Array.from({ length: 6 - list.length }, () => ({
                name: "",
                id: "",
              })),
            ],
          ]
        : Array.from({ length: Math.ceil(list.length / 5) }, (_, i) =>
            list.slice(i * 5, i * 5 + 5)
          ),
    [list]
  );
  const [item, setItem] = useState<{ id: string; name: string }[]>(
    modifiedList[0]
  );
  const [showLess, setShowLess] = useState(false);

  const createFixList = () => {
    return (
      <>
        {item.map(({ id, name: num }) => (
          <div key={id}>
            {num === "" ? (
              <li className="py-6" key={num}></li>
            ) : (
              <li className={className} key={num}>
                <Link
                  href={`category?cat=${encodeURIComponent(id)}`}
                  className="cursor-pointer hover:text-[#4682b4] hover:font-thin"
                >
                  {num}
                </Link>
              </li>
            )}
          </div>
        ))}
        {list.length > 5 && (
          <div>
            {!showLess ? (
              <div
                className="cursor-pointer bg-[#4682b4] text-sm text-white p-2 rounded-md float-end my-2  hover:bg-[#5699cf] transition ease-out delay-100 hover:text-[#eee9e9]"
                onClick={() => {
                  setShowLess(true);
                  setItem(() => [...list]);
                }}
              >
                Show All
              </div>
            ) : (
              <div
                className="cursor-pointer  bg-[#4682b4] text-sm text-white p-2 rounded-md float-end my-2 hover:bg-[#5699cf] transition ease-out delay-100 hover:text-[#eee9e9]"
                onClick={() => {
                  setShowLess(false);
                  setItem(modifiedList[0]);
                }}
              >
                Hide
              </div>
            )}
          </div>
        )}
      </>
    );
  };

  return createFixList();
};

export default FixList;
