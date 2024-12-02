import TopHeader from "./components/TopHeader";
import "./globals.css";
import SidebarLeft from "./components/SidebarLeft";
import Feedback from "./components/Feedback";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
});

export async function generateMetadata() {
  return {
    title: "Classified Free Ad Website | Without Registration Ad Post",
    description:
      "Post your classified ads for free without registration on our user-friendly platform. Enjoy quick, easy ad submissions and reach potential buyers effortlessly.",
    keywords: `Free classified ads, No registration ads, Easy ad posting, Quick ad submissions, Reach buyers online`,
    alternates: {
      canonical: `/`,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#fff] ${poppins.className}`}>
        <div className=" px-[10%] text-black">
          <TopHeader />
          <div className="grid grid-cols-6">
            <div className="col-span-1 border-[1px] border-[#b1c7de] border-r-0 bg-[#e4ebf8]">
              <SidebarLeft />
            </div>
            {children}
          </div>
        </div>
        <Feedback />
      </body>
    </html>
  );
}
