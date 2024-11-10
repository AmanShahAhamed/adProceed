import Link from "next/link";

const TopHeader = () => {
  return (
    <div className="bg-[#313131] p-2 flex flex-row-reverse px-28 content">
      <p className=" text-sm">
        {"Welcome Visitors! [ "}
        <Link className="text-blue-400" href={"#"}>
          Register
        </Link>
        {" | "}
        <Link className="text-blue-400" href={"#"}>
          {" Login"}
        </Link>
        {" ]"}
      </p>
    </div>
  );
};

export default TopHeader;
