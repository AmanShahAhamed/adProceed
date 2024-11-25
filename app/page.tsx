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
    </>
  );
}
