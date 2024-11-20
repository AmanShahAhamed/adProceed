import Link from "next/link";
import FixList from "@/components/Fixlist";
import { Category, CatLength } from "@/constants/category";

const Content = () => {
  return (
    <div className="">
      <p className="font-semibold text-lg bg-[#4174a8] text-white  p-2">
        Free Classified Advertising Website
      </p>
      <ul className="p-2 bg-gray-100 text-sm border-[1px] border-black border-r-0 rounded-b-md">
        <li>
          Are you tired of the complexities and delays often associated with
          posting classified ads? Our platform offers a seamless, fast, and
          efficient solution to help you get your ads online in no time. With
          our intuitive interface, you can easily submit and publish your
          classified ad within minutes—no registration required.
        </li>
        <li>
          Best of all, our service is completely free. We believe in providing a
          straightforward and affordable way for you to reach a wide audience of
          potential buyers without the added burden of fees or lengthy sign-up
          processes. Experience the convenience and efficiency of posting
          classified ads on our platform today.
        </li>
      </ul>
      <div className="flex flex-wrap gap-4">
        {Array.from({ length: 3 }).map((_, colIndex) => {
          const start = Math.ceil((colIndex * CatLength) / 3);
          const end = Math.ceil(((colIndex + 1) * CatLength) / 3);
          return (
            <div key={colIndex} className="flex-1 min-w-[200px] px-2">
              {Object.keys(Category)
                .slice(start, end)
                .map((key) => (
                  <div key={key} className="my-2 ">
                    <Link
                      href={`category?cat=${encodeURIComponent(key)}`}
                      className="flex gap-2 border-[1px] border-black p-2 rounded-md"
                    >
                      {Category[key].icon}
                      <p className="text-[#039] text-base  text-center font-semibold cursor-pointer hover:text-[#4682b4]">
                        {Category[key].name}
                      </p>
                    </Link>
                    <ul className="mx-8 text-sm flex flex-col ">
                      <FixList
                        className=" border-b-[1px] border-gray-100 py-2 "
                        list={Category[key].child}
                      />
                    </ul>
                  </div>
                ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
