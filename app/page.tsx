import Link from "next/link";
import TopHeader from "./components/TopHeader";
import Image from "next/image";
import HeaderMenu from "./components/HeaderMenu";
import { headers } from "next/headers";

export default async function Home() {
  const headerList = await headers();
  const pathname = headerList.get("x-current-path") || "";
  return (
    <>
      <TopHeader />
      <div className="w-[100%] h-28 content ">
        <Link href={""}>
          <Image
            className="h-auto max-w-[100%] my-4"
            alt="site-banner"
            src={
              "https://www.adproceed.com/wp-content/uploads/2024/10/cropped-logo.png"
            }
            width={240}
            height={112}
          />
        </Link>
      </div>
      <HeaderMenu pathname={pathname} />
    </>
  );
}
