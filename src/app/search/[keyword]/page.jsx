import MovieItem from "@/app/components/movie/MovieItem";
import React from "react";

const Page = async ({ params }) => {
  const keyword = params.keyword;
  const API_KEY = require("@/app/config");
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${keyword}&language=en-US&include_adult=false`
  );

  const data = await res.json();

  console.log(data.results);

  return (
    <div className="flex flex-wrap gap-2 justify-center items-center">
      {data.results
        ? data.results.map((item, index) => (
            <MovieItem key={index} item={item} />
          ))
        : "yoq"}
    </div>
  );
};

export default Page;
