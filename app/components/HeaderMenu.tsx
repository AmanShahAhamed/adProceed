"use client";

import { Directories } from "@/constants/file";
import Link from "next/link";
import { useState } from "react";

export const menus = [
  {
    name: "Home",
    slug: "/",
  },
  {
    name: "Categories",
    slug: "categories",
  },
  {
    name: "All Ads",
    slug: "ads",
  },
  {
    name: "Submit Article",
    slug: "article",
  },
];

interface IProps {
  pathname: string;
}

const HeaderMenu: React.FC<IProps> = ({ pathname }) => {
  const [showDirectory, setShowDirectory] = useState(false);
  return (
    <>
      <div className="content bg-[#3b5998] flex justify-between">
        <div className="flex flex-row gap-4 py-2 font-normal my-2  ">
          {menus.map((menu) => (
            <div key={menu.slug}>
              <div
                className={`text-center min-w-12 hover:bg-[#f4f4f4] hover:text-black hover:rounded-md hover:shadow-md hover:px-4 hover:py-1 ${
                  pathname === menu.slug
                    ? "bg-[#f4f4f4] text-black rounded-md shadow-md px-4 py-1 m-auto"
                    : ""
                } ${menu.slug === "categories" ? "relative" : ""} `}
                key={menu.slug}
                onMouseEnter={() => {
                  if (menu.slug === "categories") setShowDirectory(true);
                }}
                onMouseLeave={() => {
                  if (menu.slug === "categories") setShowDirectory(false);
                }}
              >
                {menu.name}
                {menu.slug === "categories" && showDirectory && (
                  <div className="absolute  bg-[#f4f4f4] z-10 rounded-lg left-0 rounded-tl-none">
                    <div className="grid grid-cols-3 m-4 min-w-[34rem] gap-4 ">
                      {Directories.map((directory) => (
                        <div
                          key={directory.slug}
                          className="bg-gray-200 text-[#4f4f4f]  min-w-12  py-2 text-xs font-semibold rounded-md"
                        >
                          <Link
                            className="hover:underline"
                            href={"#"}
                          >{`${directory.name}  `}</Link>
                          <span>({directory.count})</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#19346c]   px-10 py-2 my-3  font-semibold rounded-md cursor-pointer hover:bg-[#2a4374]">
          Post An Ad
        </div>
      </div>
    </>
  );
};

export default HeaderMenu;
