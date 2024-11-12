import Image from "next/image";
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
    <div className="m-2">
      <p className="font-semibold text-lg">
        Free Classified Advertising Website
      </p>
      <p className="text-sm my-2">
        {` If you're tired of dealing with complicated and time-consuming
        classified ad posting processes, our website is here to help. With our
        platform, you can easily and quickly post free classified ads without
        the need for registration. Our user-friendly interface allows you to
        submit your ad and have it live on our site in just a few minutes. Plus,
        there are no fees or registration required, making it an affordable and
        convenient way to reach potential buyers. Give our free classified ad
        posting service a try today and see the difference it can make.`}
      </p>
      <div className="grid grid-cols-3 gap-3">
        {Object.keys(a).map((key) => (
          <div key={key} className="my-2">
            <div className="flex">
              <Image
                alt="category"
                src={"https://www.adslov.com/images/category.gif"}
                width={30}
                height={10}
              />
              <p className="text-[#039] text-base font-semibold">{key}</p>
            </div>
            <ul className="mx-8 text-sm ">
              {a[key].map((k) => (
                <li key={k}>{k}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
