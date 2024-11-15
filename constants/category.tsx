import CommunityIcon from "@/public/icons/community";
import DigitalItemIcon from "@/public/icons/digital-item";
import EntertainmentIcon from "@/public/icons/entertainment";
import ForSaleIcon from "@/public/icons/for-sale";
import JobIcon from "@/public/icons/job";
import PersonalIcon from "@/public/icons/personal";
import PetIcon from "@/public/icons/pets";
import PropertyIcon from "@/public/icons/property";
import ServiceIcon from "@/public/icons/services";
import TicketIcon from "@/public/icons/tickets";
import VehicleIcon from "@/public/icons/vehicle";

export type ICategory = {
  [key: string]: {
    id: string;
    desc: string;
    icon: JSX.Element;
    child: {
      id: string;
      name: string;
    }[];
  };
};

export const Category: ICategory = {
  "Digital Items": {
    id: "digital-items",
    desc: "Dive into a world of innovation! Explore premium software, eBooks, templates, and more. Whether you're seeking tools for work, study, or creativity, your perfect digital companion awaits. Start exploring now!",
    icon: <DigitalItemIcon />,
    child: [
      { id: "websites", name: "Websites" },
      { id: "ebooks", name: "eBooks" },
      { id: "website-scripts", name: "Website Scripts" },
      { id: "software", name: "Software" },
      { id: "other", name: "Other" },
      { id: "website", name: "Websites" },
    ],
  },
  Community: {
    id: "community",
    desc: "Stay connected with your local and global community! Discover activities, announcements, news, and opportunities to make a difference. Engage with neighbors, share updates, and find the support you need—your community is just a click away.",
    icon: <CommunityIcon />,
    child: [
      { id: "activities", name: "Activities" },
      { id: "announcements", name: "Announcements" },
      { id: "local-news", name: "Local News" },
      { id: "lost-and-found", name: "Lost and Found" },
      { id: "politics", name: "Politics" },
      { id: "public-service", name: "Public Service" },
      { id: "recreation", name: "Recreation" },
      { id: "obituary", name: "Obituary" },
      { id: "volunteer", name: "Volunteer" },
      { id: "online", name: "Online" },
      { id: "garage-sales", name: "Garage/Car Boot Sales" },
      { id: "museums", name: "Museums" },
    ],
  },

  Services: {
    id: "services",
    desc: "Find the perfect service to meet your needs! From professional healthcare to home improvement and online solutions, explore a variety of services designed to make your life easier. Whether it's a haircut, legal advice, or plumbing work, the help you need is here.",
    icon: <ServiceIcon />,
    child: [
      { id: "hair-beauty", name: "Hair & Beauty" },
      { id: "chiropractic", name: "Chiropractic" },
      { id: "dental", name: "Dental" },
      { id: "medical", name: "Medical" },
      { id: "financial", name: "Financial" },
      { id: "legal", name: "Legal" },
      { id: "massage", name: "Massage" },
      { id: "self-improvement", name: "Self Improvement" },
      { id: "it", name: "IT" },
      { id: "online-services", name: "Online Services" },
      { id: "motors", name: "Motors" },
      { id: "other", name: "Other" },
      { id: "health-fitness", name: "Health & Fitness" },
      { id: "diy", name: "DIY" },
      { id: "photography", name: "Photography" },
      { id: "employment", name: "Employment" },
      { id: "gardening-landscape", name: "Gardening/Landscape" },
      { id: "ac-heating", name: "AC & Heating" },
      { id: "building-remodeling", name: "Building/Remodeling/Extensions" },
      { id: "carpentry-joinery", name: "Carpentry/Joinery" },
      { id: "decorating", name: "Decorating" },
      { id: "plastering-cementing", name: "Plastering/Cementing" },
      { id: "childcare", name: "Childcare" },
      { id: "cleaning-home-chores", name: "Cleaning/Home Chores" },
      { id: "electrical", name: "Electrical" },
      { id: "removals-packing", name: "Removals/Packing" },
      { id: "plumbing-pools", name: "Plumbing/Pools" },
      { id: "roofing-tiling", name: "Roofing/Tiling" },
      { id: "telecommunications", name: "Telecommunications" },
      { id: "offline-marketing", name: "Offline Marketing" },
      { id: "printing", name: "Printing" },
    ],
  },
  Entertainment: {
    id: "entertainment",
    desc: "Dive into a world of fun and excitement! From movies and music to video games and sports, explore a variety of entertainment options that bring joy to every moment. Find everything you need to unwind and enjoy your leisure time.",
    icon: <EntertainmentIcon />,
    child: [
      { id: "movies-tv", name: "Movies & TV" },
      {
        id: "sporting-goods-accessories",
        name: "Sporting Goods & Accessories",
      },
      { id: "music-instruments", name: "Music & Instruments" },
      { id: "literature", name: "Literature" },
      { id: "clubs", name: "Clubs" },
      { id: "board-games", name: "Board Games" },
      { id: "video-games", name: "Video Games" },
      { id: "gambling", name: "Gambling" },
      { id: "games-consoles", name: "Games Consoles" },
      { id: "downloads-online-gaming", name: "Downloads/Online Gaming" },
    ],
  },

  "For Sale": {
    id: "for-sale",
    desc: "Discover great deals on items for every need and occasion! From antiques and appliances to clothing and gadgets, find treasures waiting to be yours. Explore, recycle, or exchange—you'll always find something exciting here.",
    icon: <ForSaleIcon />,
    child: [
      { id: "antiques-collectibles", name: "Antiques/Collectibles" },
      {
        id: "clothing-shoes-accessories",
        name: "Clothing, Shoes & Accessories",
      },
      { id: "appliances", name: "Appliances" },
      { id: "art-crafts", name: "Art/Crafts" },
      { id: "bicycles", name: "Bicycles" },
      { id: "school-college", name: "School & College" },
      { id: "business-industrial", name: "Business/Industrial" },
      { id: "photography", name: "Photography" },
      { id: "phones", name: "Phones" },
      { id: "electrical", name: "Electrical" },
      { id: "free-recycle-exchange", name: "Free/Recycle/Exchange" },
      { id: "furniture", name: "Furniture" },
      { id: "toys", name: "Toys" },
      { id: "babies-children", name: "Babies & Children" },
      { id: "gardening", name: "Gardening" },
      { id: "food-supplies", name: "Food & Supplies" },
      { id: "confectionary", name: "Confectionary" },
      { id: "gifts-gadgets", name: "Gifts & Gadgets" },
    ],
  },

  Property: {
    id: "property",
    desc: "Find your ideal space! From farms and holiday homes to rentals and houses for sale, explore a wide range of properties to suit every lifestyle. Whether you're looking for a roommate or a dream home, start your search here.",
    icon: <PropertyIcon />,
    child: [
      { id: "acreage-farms", name: "Acreage/Farms" },
      { id: "business-industrial", name: "Business/Industrial" },
      { id: "domestic-rentals", name: "Domestic Rentals" },
      { id: "roommates-houseshare", name: "Roommates/Houseshare" },
      { id: "holiday-homes", name: "Holiday Homes" },
      { id: "homes-for-sale", name: "Homes For Sale" },
      { id: "holiday-rentals", name: "Holiday Rentals" },
      { id: "student-accommodation", name: "Student Accommodation" },
    ],
  },

  Tickets: {
    id: "tickets",
    desc: "Get access to unforgettable experiences! From sports and theatre to travel and cinema, find tickets for your favorite events and adventures. Don't miss out on discounts and exclusive deals—your next outing awaits!",
    icon: <TicketIcon />,
    child: [
      { id: "sport", name: "Sport" },
      { id: "shows", name: "Shows" },
      { id: "travel", name: "Travel" },
      { id: "theatre-ballet", name: "Theatre & Ballet" },
      { id: "discounts-coupons", name: "Discounts/Coupons" },
      { id: "cinema", name: "Cinema" },
    ],
  },

  "Pets and Livestock": {
    id: "pets-and-livestock",
    desc: "Find your perfect companion or livestock! From dogs and cats to exotic pets and farm animals, explore a variety of animals and supplies to suit your needs. Whether you're adopting, buying, or selling, everything for your pets is here.",
    icon: <PetIcon />,
    child: [
      { id: "dogs", name: "Dogs" },
      { id: "cats", name: "Cats" },
      { id: "horses", name: "Horses" },
      { id: "exotic-pets", name: "Exotic Pets" },
      { id: "farm-livestock", name: "Farm Livestock" },
      { id: "free", name: "Free" },
      { id: "other", name: "Other" },
      { id: "food-supplies", name: "Food & Supplies" },
      { id: "accessories", name: "Accessories" },
    ],
  },

  Jobs: {
    id: "jobs",
    desc: "Explore a world of career opportunities! From entry-level to executive roles, find jobs across various industries, including IT, healthcare, finance, construction, and more. Whether you're seeking full-time, part-time, or freelance work, your next job is just a click away.",
    icon: <JobIcon />,
    child: [
      { id: "admin-clerical", name: "Admin/Clerical" },
      { id: "automotive", name: "Automotive" },
      { id: "banking-finance", name: "Banking/Finance" },
      { id: "bar-hotel-guesthouse", name: "Bar/Hotel/Guesthouse" },
      { id: "it", name: "IT" },
      { id: "business-development", name: "Business Development" },
      {
        id: "online-business-opportunities",
        name: "Online Business Opportunities",
      },
      { id: "construction", name: "Construction" },
      { id: "consultant", name: "Consultant" },
      { id: "customer-service", name: "Customer Service" },
      { id: "design", name: "Design" },
      { id: "shipping-distribution", name: "Shipping & Distribution" },
      { id: "education", name: "Education" },
      { id: "engineering", name: "Engineering" },
      { id: "entry-level", name: "Entry Level" },
      { id: "executive", name: "Executive" },
      { id: "facilities", name: "Facilities" },
      { id: "franchise", name: "Franchise" },
      { id: "general-business", name: "General Business" },
      { id: "general-labor", name: "General Labor" },
      { id: "government", name: "Government" },
      { id: "grocery", name: "Grocery" },
      { id: "health-medical-fitness", name: "Health, Medical & Fitness" },
      { id: "human-resources", name: "Human Resources" },
      {
        id: "installation-maintenance-repair",
        name: "Installation, Maintenance & Repair",
      },
      { id: "insurance", name: "Insurance" },
      { id: "management", name: "Management" },
      { id: "manufacturing", name: "Manufacturing" },
      { id: "sales-marketing", name: "Sales & Marketing" },
      { id: "media", name: "Media" },
      { id: "non-profit", name: "Non-Profit" },
      { id: "real-estate", name: "Real Estate" },
      { id: "restaurant-food-bakery", name: "Restaurant/Food/Bakery" },
      { id: "retail", name: "Retail" },
      { id: "fashion", name: "Fashion" },
      { id: "science", name: "Science" },
      { id: "skilled-labour", name: "Skilled Labour" },
      { id: "supplies", name: "Supplies" },
      { id: "import-export", name: "Import/Export" },
      { id: "telecommunications", name: "Telecommunications" },
      { id: "motoring-transportation", name: "Motoring/Transportation" },
      { id: "veterinary", name: "Veterinary" },
      { id: "warehouse-storage", name: "Warehouse/Storage" },
      { id: "travel", name: "Travel" },
    ],
  },
  Personals: {
    id: "personals",
    desc: "Connect with like-minded individuals for a variety of personal connections! Whether you're seeking friendship, a casual chat, a penpal, or financial help, find opportunities to meet people who share your interests and needs.",
    icon: <PersonalIcon />,
    child: [
      { id: "loans", name: "Loans" },
      { id: "penpals", name: "Penpals" },
      { id: "friendship", name: "Friendship" },
      { id: "casual", name: "Casual" },
      { id: "services", name: "Services" },
    ],
  },
  "Vehicles & Motoring": {
    id: "vehicles-and-motoring",
    desc: "Explore a wide range of vehicles and accessories! From cars, motorcycles, and boats to parts, tyres, and driving attire, discover everything you need for your motoring journey. Whether buying, selling, or upgrading, find great deals here.",
    icon: <VehicleIcon />,
    child: [
      { id: "airplanes-accessories", name: "Airplanes/Accessories" },
      { id: "all-terrain-vehicles", name: "All Terrain Vehicles" },
      { id: "boats", name: "Boats" },
      { id: "cars", name: "Cars" },
      { id: "motorcycles", name: "Motorcycles" },
      { id: "trucks", name: "Trucks" },
      { id: "lorries", name: "Lorries" },
      { id: "vans", name: "Vans" },
      { id: "parts", name: "Parts" },
      { id: "tyres", name: "Tyres" },
      { id: "accessories", name: "Accessories" },
      { id: "quad-bikes", name: "Quad Bikes" },
      { id: "maps", name: "Maps" },
      { id: "sat-navs", name: "Sat Navs" },
      { id: "driving-attire", name: "Driving Attire" },
    ],
  },
} as const;
