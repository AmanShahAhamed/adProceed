// import { LeftIcon, RightIcon } from "@svg/index";
// import React from "react";

// interface IPagination {
//   setCurrentPage: (page: number) => void;
//   currentPage: number;
//   totalItems: number;
//   pageSize: number;
//   length: number;
//   page: number;
// }

// const Pagination: React.FC<IPagination> = ({
//   setCurrentPage,
//   currentPage,
//   totalItems,
//   pageSize,
//   length,
//   page,
// }) => {
//   const lastPage = Math.ceil(totalItems / pageSize);

//   const handlePrevPagination = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   const handleNextPagination = () => {
//     if (currentPage < lastPage) setCurrentPage(currentPage + 1);
//   };

//   const getPaginationNumbers = () => {
//     const pages = [];

//     if (currentPage === 1) {
//       for (let i = 1; i <= Math.min(3, lastPage); i++) pages.push(i);
//       if (lastPage > 3) pages.push("...");
//       for (let i = Math.max(lastPage - 2, 4); i <= lastPage; i++) pages.push(i);
//     } else if (currentPage === lastPage) {
//       for (let i = Math.max(lastPage - 2, 1); i <= lastPage; i++) pages.push(i);
//     } else {
//       if (currentPage > 3) {
//         pages.push(1);
//         if (currentPage > 4) pages.push("...");
//       }
//       for (
//         let i = Math.max(currentPage - 1, 2);
//         i <= Math.min(currentPage + 1, lastPage - 1);
//         i++
//       )
//         pages.push(i);
//       if (currentPage < lastPage - 2) pages.push("...");
//       pages.push(lastPage);
//     }
//     return pages;
//   };

//   const paginationNumbers = getPaginationNumbers();

//   return (
//     <div className="w-full h-10 my-2">
//       <div className="flex justify-between text-[#202224]/60 font-semibold text-base place-items-center">
//         <p>
//           Showing {pageSize * (page - 1) + 1} - {pageSize * (page - 1) + length}{" "}
//           of {totalItems}
//         </p>
//         <div className="rounded-lg border-2 h-10 flex items-center cursor-pointer">
//           {currentPage > 1 && (
//             <div
//               className="h-full w-10 hover:bg-gray-200 flex justify-center items-center"
//               onClick={handlePrevPagination}
//             >
//               <LeftIcon />
//             </div>
//           )}
//           {paginationNumbers.map((num, index) => (
//             <React.Fragment key={index}>
//               {typeof num === "number" ? (
//                 <button
//                   className={`h-full w-10 flex justify-center items-center ${
//                     num === currentPage ? "bg-gray-300" : "hover:bg-gray-200"
//                   }`}
//                   onClick={() => setCurrentPage(num)}
//                 >
//                   {num}
//                 </button>
//               ) : (
//                 <span className="mx-1">...</span>
//               )}
//             </React.Fragment>
//           ))}
//           {currentPage < lastPage && (
//             <div
//               className="h-full w-10 hover:bg-gray-200 flex justify-center items-center"
//               onClick={handleNextPagination}
//             >
//               <RightIcon />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pagination;
