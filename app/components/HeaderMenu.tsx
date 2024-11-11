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
  const [activeMenu, setActiveMenu] = useState("home"); // Default to "Home"
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null); // Track hovered item

  const currentMenu = hoveredMenu || activeMenu; // Use hovered item or fallback to active item

  return (
    <div className="content bg-[#3b5998] flex justify-between">
      <div className="flex flex-row gap-4 py-2 font-normal my-2">
        {menus.map((menu) => (
          <div key={menu.slug}>
            <div
              className={`text-center min-w-12 px-4 py-1 cursor-pointer ${
                currentMenu === menu.slug
                  ? "bg-[#f4f4f4] text-black rounded-md shadow-md m-auto"
                  : "hover:bg-[#f4f4f4] hover:text-black hover:rounded-md hover:shadow-md"
              } ${menu.slug === "categories" ? "relative" : ""}`}
              onClick={() => setActiveMenu(menu.slug)} // Set active menu on click
              onMouseEnter={() => {
                setHoveredMenu(menu.slug); // Set hovered menu
                if (menu.slug === "categories") setShowDirectory(true);
              }}
              onMouseLeave={() => {
                setHoveredMenu(null); // Clear hovered menu
                if (menu.slug === "categories") setShowDirectory(false);
              }}
            >
              {menu.name}
              {menu.slug === "categories" && showDirectory && (
                <div className="absolute bg-[#f4f4f4] z-10 rounded-lg left-0 rounded-tl-none">
                  <div className="grid grid-cols-3 m-4 min-w-[34rem] gap-4">
                    {Directories.map((directory) => (
                      <div
                        key={directory.slug}
                        className="bg-gray-200 text-[#4f4f4f] min-w-12 py-2 text-xs font-semibold rounded-md"
                      >
                        <Link className="hover:underline" href="#">
                          {directory.name}
                        </Link>
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
      <div className="bg-[#19346c] text-white px-10 py-2 my-3 font-semibold rounded-md cursor-pointer hover:bg-[#aac6ff]">
        Post An Ad
      </div>
    </div>
  );
};

export default HeaderMenu;
