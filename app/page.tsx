import Content from "./components/Content";
import SidebarRight from "./components/SidebarRight";

export default async function Home() {
  return (
    <>
      <div className="col-span-4">
        <Content />
      </div>
      <div className="col-span-1 border-[1px] border-l-black">
        <SidebarRight />
      </div>
      <div className="bg-[#4174A8] h-20 fixed right-0 bottom-4 place-content-center place-items-center rounded-full px-3 py-2 cursor-pointer hover:ring-4 transition delay-400">
        <div className="bg-white w-fit pr-8 rounded-full h-12 flex place-items-center gap-2 ">
          <div className="w-16 h-16 bg-[#4174A8] rounded-full flex place-content-center place-items-center border-[.5rem] border-white">
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
          <div className="text-2xl font-black text-[#4174A8] ">
            Feedback
          </div>
        </div>
      </div>
    </>
  );
}
