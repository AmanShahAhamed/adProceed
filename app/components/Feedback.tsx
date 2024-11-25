const Feedback = () => {
  return (
    <div className=" border-[#4174A8] h-12 fixed right-1 bottom-4 place-content-center place-items-center rounded-full  py-0 cursor-pointer hover:ring-2 transition delay-400">
      <div className="bg-white w-fit pr-4 rounded-full h-8 flex place-items-center gap-0 ">
        <div className="w-12 h-12 bg-[#4174A8] rounded-full flex place-content-center place-items-center border-[.25rem] border-white">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fff" stopOpacity="1" />
                <stop offset="100%" stopColor="#8DACCA" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path
              d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"
              fill="url(#gradient)"
            />
          </svg>
        </div>
        <div className="text-lg font-black text-[#4174A8] ">Feedback</div>
      </div>
    </div>
  );
};

export default Feedback;
