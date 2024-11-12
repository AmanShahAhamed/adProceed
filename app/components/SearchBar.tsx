// SearchBar.tsx
import React from 'react';
import { FiSearch } from 'react-icons/fi';


const SearchBar: React.FC = () => {
  return (
    <>
    <div className="flex items-center  rounded-md p-1 max-w-md w-full">
     <span>  <input
        type="text"  
        placeholder="Search..."
        className="w-full outline-none"
      /></span>
      <span className='bg-cyan-700 rounded-tr-md rounded-br-md border'>
    <FiSearch className="text-white mr-2  hover:bg-cyan-800  hover:text-white h-6" />
    </span>
    </div>
  
    
   </>    
  );
};

export default SearchBar;
