"use client";

import Image from "next/image";

const MovieItem = ({ data }) => {
  return (
    <div className="w-[250px] h-[300px] relative my-4 cursor-pointer text-white">
      <Image
        className="rounded"
        fill
        src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
        alt={"asd"}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute bottom-0 p-3 bg-gradient-to-t from-black to-transparent flex justify-center items-center flex-col gap-2 w-full h-full transition-opacity opacity-0 hover:opacity-100">
        <div className="text-xl font-bold">
          {data.title ? data.title : data.original_name}
        </div>
        <div className="text-xs">
          Release Date:{" "}
          {data.release_date ? data.release_date : data.first_air_date}
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
