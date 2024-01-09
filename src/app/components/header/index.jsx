import Menu from "@/app/components/menu";
import Theme from "@/app/components/theme";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";

const index = () => {
  return (
    <header className="flex items-center gap-7 h-20 p-5 ">
      <Link href={"/"} className="bg-amber-600 rounded p-3 text-2xl font-bold">
        NetFilms
      </Link>
      <div className="flex flex-1 items-center gap-2 border p-3 rounded">
        <input
          className="outline-none flex-1 dark:bg-red-500"
          placeholder="Search anythink.."
          type="text"
        />
        <BiSearch className="cursor-pointer" size={25} />
      </div>

      <Theme />

      <Menu />
    </header>
  );
};

export default index;
