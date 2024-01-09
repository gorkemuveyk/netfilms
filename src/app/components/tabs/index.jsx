"use client";

import Link from "next/link";
import tabs from "./items";
import { useSearchParams } from "next/navigation";

const index = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div className="p-5 m-3 bg-gray-100 dark:bg-black dark:text-white flex items-center justify-center gap-7 text-sm sm:text-[16px]">
      {tabs.map((tab, index) => (
        <Link
          className={`cursor-pointer transition-all ${
            tab.url === genre
              ? "underline underline-offset-8 text-amber-600"
              : ""
          }`}
          href={tab.url !== "/" ? `/?genre=${tab.url}` : "/"}
          key={index}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default index;
