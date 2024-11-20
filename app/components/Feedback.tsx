import HeartIcn from "@/public/icons/hert";

const Feedback = () => {
  return (
    <button className="bg-[#4174a8] z-10 text-white px-4 py-1.5 fixed   right-0 top-1/2  rotate-90 rounded-md shadow-md">
      <p className="rotate-180 flex gap-2">
        <span className="py-1">
          <HeartIcn height={20} width={20} />
        </span>
        Feedback
      </p>
    </button>
    // <div className="fixed right-0 top-1/2 transform -translate-y-1/2">
    //   {/* Heart Icon Container */}
    //   <div className="border-4 p-2 rounded-full border-[#4174a8]">
    //   </div>

    //   {/* Feedback Button */}
    //   <button className="bg-[#4174a8] text-white px-4 py-2 mt-2 rounded">
    //     Feedback
    //   </button>
    // </div>
  );
};

export default Feedback;
