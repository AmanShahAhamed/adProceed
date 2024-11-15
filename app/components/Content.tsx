import Link from "next/link";
import FixList from "@/components/Fixlist";
import { Category } from "@/constants/category";

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
        {Array.from({ length: 3 }).map((_, columnIndex) => {
          const start = Math.ceil(
            (columnIndex * Object.keys(Category).length) / 3
          );
          const end = Math.ceil(
            ((columnIndex + 1) * Object.keys(Category).length) / 3
          );

          return (
            <div key={columnIndex} className="flex-1 min-w-[200px] px-2">
              {Object.keys(Category)
                .slice(start, end)
                .map((key) => (
                  <div key={Category[key].id} className="my-2 ">
                    <div className="flex gap-2 border-[1px] border-black p-2 rounded-md">
                      {Category[key].icon}
                      <Link
                        href="category"
                        className="text-[#039] text-base py-2 text-center font-semibold cursor-pointer hover:text-[#4682b4]"
                      >
                        {key}
                      </Link>
                    </div>
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
