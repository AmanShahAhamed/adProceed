"use client";
import { useRef, useState } from "react";
import DirectorySelector from "./DirectorySelector";

const SearchBlock = () => {
  const [searchValue, setSearchValue] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (ref.current) setSearchValue(ref.current.value);
  };

  return (
    <div className="bg-white px-2 flex justify-between gap-4 my-4">
      <input
        ref={ref}
        className="border-[#DBDBDB] border-[1px] rounded-md my-4 py-2 px-2 text-[#666] text-sm w-[60%]"
        value={searchValue}
        placeholder={"What You Searching For ?"}
        onChange={handleSearch}
      />
      <div>
        <DirectorySelector />
      </div>
    </div>
  );
};

export default SearchBlock;
