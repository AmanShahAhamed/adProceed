"use client";
import { findCategory } from "@/constants/category";
import { useSearchParams } from "next/navigation";
import AdCard from "./components/adcard";
import DemoImage from "../../public/demo.png";
import AdFilters from "./components/adFilters";
import Pagination from "../utils-components/pagination";

const content = ` Are you ready to learn how to be successful? Join a System—a
            friendly community of passionate people just like you! Together,
            we’ll share strategies, provide feedback, and support each other to
            achieve top success. Whether you’re just starting out or a seasoned
            veteran, we’ve got your back. The details are here for you to see:
            https://5d93.com/pbs/`;

export default function Page() {
  const searchParam = useSearchParams();
  const slug = searchParam.get("cat");

  const categoryInfo = findCategory(slug);

  if (slug == "" || !categoryInfo) return <div>Not found</div>;

  return (
    <div className="col-span-5  ">
      {/* item description */}
      <div className="">
        <div
          className={`flex gap-1 border-[1px] p-2 ${
            categoryInfo.desc ? "border-b-0 " : ""
          } border-black`}
        >
          {<span className="text-white">{categoryInfo.icon}</span>}
          <p className="m-1 text-black font-semibold">{categoryInfo.name}</p>
        </div>
        {categoryInfo.desc && (
          <p className="text-base border-[1px] border-black p-2 rounded-sm  bg-gray-100">
            {categoryInfo.desc}
          </p>
        )}
      </div>
      {/* filters */}

      <AdFilters />
      {/* listing */}

      <AdCard
        previewImage={DemoImage}
        title={"Transform Your Dream - Make It An Income-Generating Machine"}
        content={content}
        location={"Kanpur-Unnao"}
        adDate={"23/12/2024"}
        tag={"Available"}
        isFeatures={true}
      />
      <AdCard
        previewImage={DemoImage}
        title={"Transform Your Dream - Make It An Income-Generating Machine"}
        content={content}
        location={"Kanpur-Unnao"}
        adDate={"23/12/2024"}
        tag={"Free"}
      />
      <AdCard
        previewImage={DemoImage}
        title={"Transform Your Dream - Make It An Income-Generating Machine"}
        content={content}
        location={"Kanpur-Unnao"}
        adDate={"23/12/2024"}
        tag={"$ 500"}
      />
      <AdCard
        previewImage={DemoImage}
        title={"Transform Your Dream - Make It An Income-Generating Machine"}
        content={content}
        location={"Kanpur-Unnao"}
        adDate={"23/12/2024"}
        tag={"Rs. 200"}
      />
      <AdCard
        previewImage={DemoImage}
        title={"Transform Your Dream - Make It An Income-Generating Machine"}
        content={content}
        location={"Kanpur-Unnao"}
        adDate={"23/12/2024"}
      />

      {/* pagination */}
      <Pagination
        setCurrentPage={(page: number) => console.log(page)}
        currentPage={8}
        totalItems={10}
        pageSize={20}
      />
    </div>
  );
}
