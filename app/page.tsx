import Content from "./components/Content";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";
import TopHeader from "./components/TopHeader";

export default async function Home() {
  return (
    <>
      <TopHeader />
      <div className="grid grid-cols-6">
        <div className="col-span-1 border-[1px] border-[#b1c7de] border-r-0 bg-[#e4ebf8]">
          <SidebarLeft />
        </div>
        <div className="col-span-4">
          <Content />
        </div>
        <div className="col-span-1 border-[1px] border-l-black">
          <SidebarRight />
        </div>
      </div>
    </>
  );
}
