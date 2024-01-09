"use client";

import Menu from "@/app/components/menu";
import Theme from "@/app/components/theme";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";

const index = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const searchFunc = (e) => {
    if (e.key === "Enter" && keyword.length >= 3) {
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <header className="flex items-center gap-7 max-h-[20vh] p-5 sm:flex-row flex-col dark:bg-black dark:text-white">
      <Link
        href={"/"}
        className="bg-amber-600 dark:bg-gray-700 rounded p-3 text-2xl font-bold"
      >
        NetFilms
      </Link>
      <div className="flex flex-1 items-center gap-2 border p-3 rounded">
        <input
          onKeyDown={searchFunc}
          onChange={(e) => setKeyword(e.target.value)}
          className="outline-none flex-1 bg-transparent"
          placeholder="Search anythink.."
          type="text"
        />
        <BiSearch className="cursor-pointer" size={25} />
      </div>

      <Theme />

      <div className="md:flex md:gap-2 hidden">
        <Menu />
      </div>
    </header>
  );
};

export default index;
