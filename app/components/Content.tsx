import Image from "next/image";
import Link from "next/link";
import digitalItem from "../../public/icons/digital_items.png";
import FixList from "@/components/Fixlist";
export const a: Record<string, string[]> = {
  "Digital Items": [
    "Websites",
    "eBooks",
    "Website Scripts",
    "Software",
    "Other",
  ],
  Community: [
    "Activities",
    "Announcements",
    "Local News",
    "Lost and Found",
    "Politics",
    "Public Service",
    "Recreation",
    "Obituary",
    "Volunteer",
    "Online",
    "Garage/Car Boot Sales",
    "Museums",
  ],
  Services: [
    "Hair & Beauty",
    "Chiropractic",
    "Dental",
    "Medical",
    "Financial",
    "Legal",
    "Massage",
    "Self Improvement",
    "IT",
    "Online Services",
    "Motors",
    "Other",
    "Health & Fitness",
    "DIY",
    "Photography",
    "Employment",
    "Gardening/Landscape",
    "AC & Heating",
    "Building/Remodeling/Extensions",
    "Carpentry/Joinery",
    "Decorating",
    "Plastering/Cementing",
    "Childcare",
    "Cleaning/Home Chores",
    "Electrical",
    "Removals/Packing",
    "Plumbing/Pools",
    "Roofing/Tiling",
    "Telecommunications",
    "Offline Marketing",
    "Printing",
  ],
  Entertainment: [
    "Movies & TV",
    "Sporting Goods & Accessories",
    "Music & Instruments",
    "Literature",
    "Clubs",
    "Board Games",
    "Video Games",
    "Gambling",
    "Games Consoles",
    "Downloads/Online Gaming",
  ],
  "For Sale": [
    "Antiques/Collectibles",
    "Clothing, Shoes & Accessories",
    "Appliances",
    "Art/Crafts",
    "Bicycles",
    "School & College",
    "Business/Industrial",
    "Photography",
    "Phones",
    "Electrical",
    "Free/Recycle/Exchange",
    "Furniture",
    "Toys",
    "Babies & Children",
    "Gardening",
    "Food & Supplies",
    "Confectionary",
    "Gifts & Gadgets",
  ],
  Property: [
    "Acreage/Farms",
    "Business/Industrial",
    "Domestic Rentals",
    "Roommates/Houseshare",
    "Holiday Homes",
    "Homes For Sale",
    "Holiday Rentals",
    "Student Accommodation",
  ],
  Tickets: [
    "Sport",
    "Shows",
    "Travel",
    "Theatre & Ballet",
    "Discounts/Coupons",
    "Cinema",
  ],
  "Pets and Livestock": [
    "Dogs",
    "Cats",
    "Horses",
    "Exotic Pets",
    "Farm Livestock",
    "Free",
    "Other",
    "Food & Supplies",
    "Accessories",
  ],
  Jobs: [
    "Admin/Clerical",
    "Automotive",
    "Banking/Finance",
    "Bar/Hotel/Guesthouse",
    "IT",
    "Business Development",
    "Online Business Opportunities",
    "Construction",
    "Consultant",
    "Customer Service",
    "Design",
    "Shipping & Distribution",
    "Education",
    "Engineering",
    "Entry Level",
    "Executive",
    "Facilities",
    "Franchise",
    "General Business",
    "General Labor",
    "Government",
    "Grocery",
    "Health, Medical & Fitness",
    "Human Resources",
    "Installation, Maintenance & Repair",
    "Insurance",
    "Management",
    "Manufacturing",
    "Sales & Marketing",
    "Media",
    "Non-Profit",
    "Real Estate",
    "Restaurant/Food/Bakery",
    "Retail",
    "Fashion",
    "Science",
    "Skilled Labour",
    "Supplies",
    "Import/Export",
    "Telecommunications",
    "Motoring/Transportation",
    "Veterinary",
    "Warehouse/Storage",
    "Travel",
  ],
  Personals: ["Loans", "Penpals", "Friendship", "Casual", "Services"],
  "Vehicles & Motoring": [
    "Airplanes/Accessories",
    "All Terrain Vehicles",
    "Boats",
    "Cars",
    "Motorcycles",
    "Trucks",
    "Lorries",
    "Vans",
    "Parts",
    "Tyres",
    "Accessories",
    "Quad Bikes",
    "Maps",
    "Sat Navs",
    "Driving Attire",
  ],
};

const Content = () => {
  return (
    <div className="">
      <p className="font-semibold text-lg bg-[#4174a8] text-white  p-2">Free Classified Advertising Website</p>
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
          const start = Math.ceil((columnIndex * Object.keys(a).length) / 3);
          const end = Math.ceil(((columnIndex + 1) * Object.keys(a).length) / 3);

          return (
            <div key={columnIndex} className="flex-1 min-w-[200px] px-2">
              {Object.keys(a)
                .slice(start, end)
                .map((key) => (
                  <div key={key} className="my-2 ">
                    <div className="flex gap-2 border-[1px] border-black p-2 rounded-md">
                      <Image alt="category" src={digitalItem} width={20} height={10} />
                      <Link
                        href="category"
                        className="text-[#039] text-base text-start font-semibold cursor-pointer hover:text-[#4682b4]"
                      >
                        {key}
                      </Link>
                    </div>
                    <ul className="mx-8 text-sm flex flex-col ">
                      {
                        // a[key].map((k) => (
                        //   <li key={k} className="border-b-[1px] border-gray-100 py-2">
                        //     <Link
                        //       href="category"
                        //       className="cursor-pointer hover:text-[#FF7B00]"
                        //     >
                        //       {k}
                        //     </Link>
                        //   </li>
                        // ))
                        <FixList
                          className=" border-b-[1px] border-gray-100 py-2 "
                          list={a[key]}
                        />
                      }
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
