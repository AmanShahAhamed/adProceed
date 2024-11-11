import Content from "./components/Content";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";
import TopHeader from "./components/TopHeader";

export default async function Home() {
  return (
    <>
      <TopHeader />
      <div className="grid grid-cols-6 border-[1px] border-black">
        <div className="col-span-1 border-[1px] border-r-black ">
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
