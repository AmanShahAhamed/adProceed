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
    name: string;
    desc: string;
    icon: JSX.Element;
    child: {
      id: string;
      name: string;
      desc: string;
    }[];
  };
};

export const Category: ICategory = {
  "digital-items": {
    name: "Digital Items",
    desc: "Looking for amazing digital stuff? Check out top-quality software, eBooks, templates, and more. Whatever you need for work, study, or fun, you'll find it here!",
    icon: <DigitalItemIcon height={30} width={30} />,
    child: [
      {
        id: "websites",
        name: "Websites",
        desc: "Find websites for all kinds of uses—whether it’s for your business, blog, or just for fun. Start your online journey today!",
      },
      {
        id: "ebooks",
        name: "eBooks",
        desc: "Love reading? Explore eBooks on different topics and genres. There’s something here for everyone!",
      },
      {
        id: "website-scripts",
        name: "Website Scripts",
        desc: "Looking to improve your website? Grab easy-to-use scripts to add cool features and tools quickly!",
      },
      {
        id: "software",
        name: "Software",
        desc: "Find handy software for work, hobbies, or creativity. These tools are here to make your life easier!",
      },
      {
        id: "other",
        name: "Other",
        desc: "Can’t find what you’re looking for? Check this section for unique and interesting digital items.",
      },
    ],
  },
  community: {
    name: "Community",
    desc: "Connect with your community! Discover local activities, share announcements, and stay updated on what’s happening nearby. Whether it’s helping others or finding support, your community is here for you.",
    icon: <CommunityIcon height={30} width={30} />,
    child: [
      {
        id: "activities",
        name: "Activities",
        desc: "Join events and activities in your area and meet new people!",
      },
      {
        id: "announcements",
        name: "Announcements",
        desc: "Share or find important news and updates in your community.",
      },
      {
        id: "local-news",
        name: "Local News",
        desc: "Stay in the know with the latest updates from your neighborhood.",
      },
      {
        id: "lost-and-found",
        name: "Lost and Found",
        desc: "Lost something? Found something? Let the community help!",
      },
      {
        id: "politics",
        name: "Politics",
        desc: "Engage in local and national political discussions and updates.",
      },
      {
        id: "public-service",
        name: "Public Service",
        desc: "Find public services that make life easier for everyone.",
      },
      {
        id: "recreation",
        name: "Recreation",
        desc: "Discover places and activities to relax and have fun.",
      },
      {
        id: "obituary",
        name: "Obituary",
        desc: "Share and find tributes to loved ones in your community.",
      },
      {
        id: "volunteer",
        name: "Volunteer",
        desc: "Give back by finding volunteer opportunities that suit you.",
      },
      {
        id: "online",
        name: "Online",
        desc: "Participate in virtual community events and meetups.",
      },
      {
        id: "garage-sales",
        name: "Garage/Car Boot Sales",
        desc: "Find or host garage sales and uncover hidden treasures!",
      },
      {
        id: "museums",
        name: "Museums",
        desc: "Explore local museums and learn something new.",
      },
    ],
  },
  services: {
    name: "Services",
    desc: "Need help? Find professional services for everything from beauty and healthcare to IT solutions and home repairs. Whatever the task, we've got the experts to help you out!",
    icon: <ServiceIcon height={30} width={30} />,
    child: [
      {
        id: "hair-beauty",
        name: "Hair & Beauty",
        desc: "Look and feel your best with hair and beauty services near you.",
      },
      {
        id: "chiropractic",
        name: "Chiropractic",
        desc: "Relieve pain and improve your posture with expert care.",
      },
      {
        id: "dental",
        name: "Dental",
        desc: "Find trusted dental services for a healthy smile.",
      },
      {
        id: "medical",
        name: "Medical",
        desc: "Access quality medical care when you need it.",
      },
      {
        id: "financial",
        name: "Financial",
        desc: "Get professional advice for your finances, taxes, and more.",
      },
      {
        id: "legal",
        name: "Legal",
        desc: "Find expert legal services for your personal or business needs.",
      },
      {
        id: "massage",
        name: "Massage",
        desc: "Relax and unwind with professional massage therapy.",
      },
      {
        id: "self-improvement",
        name: "Self Improvement",
        desc: "Discover courses, coaching, and services to grow and thrive.",
      },
      {
        id: "it",
        name: "IT",
        desc: "Get tech support, IT solutions, or digital services quickly.",
      },
      {
        id: "online-services",
        name: "Online Services",
        desc: "Find convenient online services for all your needs.",
      },
      {
        id: "motors",
        name: "Motors",
        desc: "From repairs to maintenance, find experts for your vehicles.",
      },
      {
        id: "other",
        name: "Other",
        desc: "Can’t find what you need? Explore more services here.",
      },
      // Include similar descriptions for all other service types.
    ],
  },
  entertainment: {
    name: "Entertainment",
    desc: "Ready to have some fun? Whether it's movies, music, games, or books, there's something here to keep you entertained!",
    icon: <EntertainmentIcon height={30} width={30} />,
    child: [
      {
        id: "movies-tv",
        name: "Movies & TV",
        desc: "Catch up on the latest movies and TV shows.",
      },
      {
        id: "sporting-goods-accessories",
        name: "Sporting Goods & Accessories",
        desc: "Gear up for your favorite sports and activities!",
      },
      {
        id: "music-instruments",
        name: "Music & Instruments",
        desc: "Find music, instruments, and accessories.",
      },
      {
        id: "literature",
        name: "Literature",
        desc: "Explore great books and literary works.",
      },
      {
        id: "clubs",
        name: "Clubs",
        desc: "Join clubs and connect with like-minded people.",
      },
      {
        id: "board-games",
        name: "Board Games",
        desc: "Discover games to enjoy with family and friends.",
      },
      {
        id: "video-games",
        name: "Video Games",
        desc: "Find games, consoles, and gaming accessories.",
      },
      {
        id: "gambling",
        name: "Gambling",
        desc: "Explore opportunities for fun gaming and betting.",
      },
      {
        id: "games-consoles",
        name: "Games Consoles",
        desc: "Upgrade your gaming setup with consoles and gear.",
      },
      {
        id: "downloads-online-gaming",
        name: "Downloads/Online Gaming",
        desc: "Get access to digital games and online platforms.",
      },
    ],
  },

  "for-sale": {
    name: "For Sale",
    desc: "Discover great deals on items for every need and occasion! From antiques and appliances to clothing and gadgets, find treasures waiting to be yours. Explore, recycle, or exchange—you'll always find something exciting here.",
    icon: <ForSaleIcon height={30} width={30} />,
    child: [
      {
        id: "antiques-collectibles",
        name: "Antiques/Collectibles",
        desc: "Discover unique treasures from the past, perfect for collectors and enthusiasts.",
      },
      {
        id: "clothing-shoes-accessories",
        name: "Clothing, Shoes & Accessories",
        desc: "Shop stylish outfits, footwear, and accessories for every occasion.",
      },
      {
        id: "appliances",
        name: "Appliances",
        desc: "Buy and sell home and kitchen appliances that make life easier.",
      },
      {
        id: "art-crafts",
        name: "Art/Crafts",
        desc: "Explore creative and handmade items to beautify your space.",
      },
      {
        id: "bicycles",
        name: "Bicycles",
        desc: "Find bicycles for leisure, sport, or commuting, in various styles and conditions.",
      },
      {
        id: "school-college",
        name: "School & College",
        desc: "Educational supplies, textbooks, and resources for students.",
      },
      {
        id: "business-industrial",
        name: "Business/Industrial",
        desc: "Equipment and tools for businesses and industrial needs.",
      },
      {
        id: "photography",
        name: "Photography",
        desc: "Cameras, lenses, and accessories for photography enthusiasts.",
      },
      {
        id: "phones",
        name: "Phones",
        desc: "Explore a wide range of mobile phones and accessories.",
      },
      {
        id: "electrical",
        name: "Electrical",
        desc: "Electronic gadgets and devices for everyday use.",
      },
      {
        id: "free-recycle-exchange",
        name: "Free/Recycle/Exchange",
        desc: "Share or find items for free, promoting sustainability.",
      },
      {
        id: "furniture",
        name: "Furniture",
        desc: "High-quality furniture for your home, office, or outdoor spaces.",
      },
      {
        id: "toys",
        name: "Toys",
        desc: "Fun and engaging toys for kids of all ages.",
      },
      {
        id: "babies-children",
        name: "Babies & Children",
        desc: "Essentials for babies and kids, including clothing and gear.",
      },
      {
        id: "gardening",
        name: "Gardening",
        desc: "Tools, plants, and supplies for your gardening needs.",
      },
      {
        id: "food-supplies",
        name: "Food & Supplies",
        desc: "Specialty food items and ingredients for culinary enthusiasts.",
      },
      {
        id: "confectionary",
        name: "Confectionary",
        desc: "Sweet treats and baked goods for every craving.",
      },
      {
        id: "gifts-gadgets",
        name: "Gifts & Gadgets",
        desc: "Unique gifts and cool gadgets for your loved ones.",
      },
    ],
  },

  property: {
    name: "Property",
    desc: "Find your ideal space! From farms and holiday homes to rentals and houses for sale, explore a wide range of properties to suit every lifestyle. Whether you're looking for a roommate or a dream home, start your search here.",
    icon: <PropertyIcon height={30} width={30} />,
    child: [
      {
        id: "acreage-farms",
        name: "Acreage/Farms",
        desc: "Spacious farmland for agricultural or investment purposes.",
      },
      {
        id: "business-industrial",
        name: "Business/Industrial",
        desc: "Commercial properties for businesses and industries.",
      },
      {
        id: "domestic-rentals",
        name: "Domestic Rentals",
        desc: "Homes and apartments available for rent.",
      },
      {
        id: "roommates-houseshare",
        name: "Roommates/Houseshare",
        desc: "Affordable housing options shared with others.",
      },
      {
        id: "holiday-homes",
        name: "Holiday Homes",
        desc: "Properties for vacation stays and relaxation.",
      },
      {
        id: "homes-for-sale",
        name: "Homes For Sale",
        desc: "Buy your dream house in your preferred location.",
      },
      {
        id: "holiday-rentals",
        name: "Holiday Rentals",
        desc: "Short-term rental properties for holiday getaways.",
      },
      {
        id: "student-accommodation",
        name: "Student Accommodation",
        desc: "Affordable and convenient housing for students.",
      },
    ],
  },

  tickets: {
    name: "Tickets",
    desc: "Get access to unforgettable experiences! From sports and theatre to travel and cinema, find tickets for your favorite events and adventures. Don't miss out on discounts and exclusive deals—your next outing awaits!",
    icon: <TicketIcon height={30} width={30} />,
    child: [
      {
        id: "sport",
        name: "Sport",
        desc: "Tickets for thrilling sports events and matches.",
      },
      {
        id: "shows",
        name: "Shows",
        desc: "Access to exciting concerts and live performances.",
      },
      {
        id: "travel",
        name: "Travel",
        desc: "Tickets for flights, trains, and buses to destinations worldwide.",
      },
      {
        id: "theatre-ballet",
        name: "Theatre & Ballet",
        desc: "Experience captivating performances in theatre and ballet.",
      },
      {
        id: "discounts-coupons",
        name: "Discounts/Coupons",
        desc: "Special deals and discounts for events and more.",
      },
      {
        id: "cinema",
        name: "Cinema",
        desc: "Movie tickets for the latest blockbusters and indie films.",
      },
    ],
  },

  "pets-and-livestock": {
    name: "Pets and Livestock",
    desc: "Find your perfect companion or livestock! From dogs and cats to exotic pets and farm animals, explore a variety of animals and supplies to suit your needs. Whether you're adopting, buying, or selling, everything for your pets is here.",
    icon: <PetIcon height={30} width={30} />,
    child: [
      {
        id: "dogs",
        name: "Dogs",
        desc: "Adopt or buy lovable canine companions.",
      },
      {
        id: "cats",
        name: "Cats",
        desc: "Find your perfect feline friend or breeder.",
      },
      {
        id: "horses",
        name: "Horses",
        desc: "Horses and ponies for riding or farm needs.",
      },
      {
        id: "exotic-pets",
        name: "Exotic Pets",
        desc: "Discover unique and rare exotic animals.",
      },
      {
        id: "farm-livestock",
        name: "Farm Livestock",
        desc: "Livestock for agricultural and farm purposes.",
      },
      {
        id: "free",
        name: "Free",
        desc: "Find free pets or give them a new home.",
      },
      {
        id: "other",
        name: "Other",
        desc: "Other animals or supplies for pet lovers.",
      },
      {
        id: "food-supplies",
        name: "Food & Supplies",
        desc: "Essential food and supplies for your pets.",
      },
      {
        id: "accessories",
        name: "Accessories",
        desc: "Pet accessories like leashes, cages, and toys.",
      },
    ],
  },

  jobs: {
    name: "Jobs",
    desc: "Explore a world of career opportunities! From entry-level to executive roles, find jobs across various industries, including IT, healthcare, finance, construction, and more. Whether you're seeking full-time, part-time, or freelance work, your next job is just a click away.",
    icon: <JobIcon height={30} width={30} />,
    child: [
      {
        id: "admin-clerical",
        name: "Admin/Clerical",
        desc: "Roles in administration and office management.",
      },
      {
        id: "automotive",
        name: "Automotive",
        desc: "Jobs related to vehicle repair and maintenance.",
      },
      {
        id: "banking-finance",
        name: "Banking/Finance",
        desc: "Opportunities in the banking and finance sectors.",
      },
      {
        id: "bar-hotel-guesthouse",
        name: "Bar/Hotel/Guesthouse",
        desc: "Hospitality roles in bars, hotels, and guesthouses.",
      },
      {
        id: "it",
        name: "IT",
        desc: "Tech jobs including development, support, and cybersecurity.",
      },
      {
        id: "business-development",
        name: "Business Development",
        desc: "Help companies grow with business development roles.",
      },
      {
        id: "online-business-opportunities",
        name: "Online Business Opportunities",
        desc: "Remote and online opportunities to grow your career.",
      },
      {
        id: "construction",
        name: "Construction",
        desc: "Skilled and general labor jobs in construction.",
      },
      {
        id: "consultant",
        name: "Consultant",
        desc: "Professional consulting roles in various industries.",
      },
      {
        id: "customer-service",
        name: "Customer Service",
        desc: "Assist customers in retail, call centers, and more.",
      },
    ],
  },
  personals: {
    name: "Personals",
    desc: "Connect with like-minded individuals for a variety of personal connections! Whether you're seeking friendship, a casual chat, a penpal, or financial help, find opportunities to meet people who share your interests and needs.",
    icon: <PersonalIcon height={30} width={30} />,
    child: [
      {
        id: "loans",
        name: "Loans",
        desc: "Connect for personal or financial loans.",
      },
      {
        id: "penpals",
        name: "Penpals",
        desc: "Make friends through letters and online communication.",
      },
      {
        id: "friendship",
        name: "Friendship",
        desc: "Find like-minded people for companionship.",
      },
      {
        id: "casual",
        name: "Casual",
        desc: "Connect for casual chats and meetups.",
      },
      {
        id: "services",
        name: "Services",
        desc: "Personal services for various needs and interests.",
      },
    ],
  },
  "vehicles-and-motoring": {
    name: "Vehicles & Motoring",
    desc: "Explore a wide range of vehicles and accessories! From cars, motorcycles, and boats to parts, tyres, and driving attire, discover everything you need for your motoring journey. Whether buying, selling, or upgrading, find great deals here.",
    icon: <VehicleIcon height={30} width={30} />,
    child: [
      {
        id: "airplanes-accessories",
        name: "Airplanes/Accessories",
        desc: "Aircraft and aviation accessories for sale.",
      },
      {
        id: "all-terrain-vehicles",
        name: "All Terrain Vehicles",
        desc: "Explore ATVs for adventures and utility.",
      },
      {
        id: "boats",
        name: "Boats",
        desc: "Sailboats, motorboats, and more for water enthusiasts.",
      },
      { id: "cars", name: "Cars", desc: "New and used cars for sale." },
      {
        id: "motorcycles",
        name: "Motorcycles",
        desc: "Find your dream bike, from scooters to superbikes.",
      },
      {
        id: "trucks",
        name: "Trucks",
        desc: "Heavy-duty vehicles for transport and logistics.",
      },
      {
        id: "lorries",
        name: "Lorries",
        desc: "Lorries for heavy goods transport.",
      },
      {
        id: "vans",
        name: "Vans",
        desc: "Commercial and personal use vans for sale.",
      },
      {
        id: "parts",
        name: "Parts",
        desc: "Vehicle parts and components for all types of vehicles.",
      },
      {
        id: "tyres",
        name: "Tyres",
        desc: "Tyres for various vehicles, new and used.",
      },
    ],
  },
} as const;

export const findCategory = (
  key: string | null
): { icon: JSX.Element; name: string; desc: string } | null => {
  if (!key) return null;
  const category = Category[key];
  if (category)
    return { icon: category.icon, name: category.name, desc: category.desc };
  const subCat = Object.keys(Category).find((cat) =>
    Category[cat].child.some((sc) => sc.id === key)
  );
  if (!subCat) return null;
  const child = Category[subCat].child.find(({ id }) => id === key);
  return {
    icon: Category[subCat].icon,
    name: child?.name ?? "",
    desc: child?.desc ?? "",
  };
};

export const CatLength = Object.keys(Category).length;
