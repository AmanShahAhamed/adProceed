import Image from "next/image";
export default function Page() {
  return (
    <div className="col-span-5  ">
      {/* item description */}
      <div className="">
        <div className="flex gap-1 bg-[#4174a8]">
          <Image
            alt="category"
            src={"https://www.adslov.com/images/category.gif"}
            width={30}
            height={10}
          />
          <p className="m-1 text-white font-semibold">Digital Marketing</p>
        </div>
        <p className="text-sm border-[1px] border-black p-2 rounded-sm  bg-gray-100">
          Explore a vast selection of pre-owned items across categories like
          technology, home decor, and collectibles. Connect as a buyer or seller
          in a dynamic marketplace. Shop sustainably, market efficiently, and
          discover essential information on products ranging from fitness gear
          to food and video games. Dive into the trade of Business Equipment &
          Supplies, offering a platform for the exchange of professional tools
          and office essentials, facilitating both buying and selling
          opportunities for enhanced business operations.
        </p>
      </div>
      {/* listing */}
      <div>
        <div></div>
      </div>
    </div>
  );
}
