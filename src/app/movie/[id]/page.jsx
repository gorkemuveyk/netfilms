import Image from "next/image";
import Link from "next/link";
import React from "react";

const API_KEY = require("@/app/config");

const getMovie = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );
  return await res.json();
};

const Page = async ({ params }) => {
  const movieID = params.id;
  const movieDetail = await getMovie(movieID);

  console.log("asdasd", movieDetail);

  return (
    <div className="relative p-7 h-[80vh]">
      <Image
        objectFit="cover"
        className="z-[-1]"
        fill
        src={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`}
        alt={"Image Not Found"}
      />

      <div className="h-full sm:w-2/5 w-4/5 bg-gradient-to-r absolute top-0 left-0 from-black to-transparent text-white p-5 flex flex-col justify-center gap-5">
        <h1 className="sm:text-8xl text-4xl pl-5">
          {movieDetail.title ? movieDetail.title : movieDetail.original_name}
        </h1>
        <p className="sm:text-lg text-sm pl-5">
          Release Date:{" "}
          {movieDetail.release_date
            ? movieDetail.release_date
            : movieDetail.first_air_date}
        </p>
        <p className="pl-5">Language: {movieDetail.original_language}</p>
        <p className="pl-5">
          <span className="text-2xl">Overview:</span> <br />
          {movieDetail.overview.length > 100
            ? movieDetail.overview.substring(0, 100).concat("...")
            : movieDetail.overview}
        </p>
        <Link
          target="_blank"
          href={movieDetail.homepage}
          className="bg-transparent px-4 py-3 border rounded text-center text-xl mt-5 sm:w-1/3 w-2/3 ml-5 hover:bg-white hover:text-black transition-colors"
        >
          WEBSITE
        </Link>
      </div>
    </div>
  );
};

export default Page;

/*
asdasd {
  adult: false,
  backdrop_path: '/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg',
  belongs_to_collection: null,
  budget: 100000000,
  genres: [ { id: 18, name: 'Drama' }, { id: 36, name: 'History' } ],
  homepage: 'http://www.oppenheimermovie.com',
  id: 872585,
  imdb_id: 'tt15398776',
  original_language: 'en',
  original_title: 'Oppenheimer',
  overview: "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
  popularity: 1129.554,
  poster_path: '/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
  production_companies: [
    {
      id: 9996,
      logo_path: '/3tvBqYsBhxWeHlu62SIJ1el93O7.png',
      name: 'Syncopy',
      origin_country: 'GB'
    },
    {
      id: 33,
      logo_path: '/8lvHyhjr8oUKOOy2dKXoALWKdp0.png',
      name: 'Universal Pictures',
      origin_country: 'US'
    },
    {
      id: 507,
      logo_path: '/aRmHe6GWxYMRCQljF75rn2B9Gv8.png',
      name: 'Atlas Entertainment',
      origin_country: 'US'
    }
  ],
  production_countries: [
    { iso_3166_1: 'GB', name: 'United Kingdom' },
    { iso_3166_1: 'US', name: 'United States of America' }
  ],
  release_date: '2023-07-19',
  revenue: 952000000,
  runtime: 181,
  spoken_languages: [
    { english_name: 'Dutch', iso_639_1: 'nl', name: 'Nederlands' },
    { english_name: 'English', iso_639_1: 'en', name: 'English' }
  ],
  status: 'Released',
  tagline: 'The world forever changes.',
  title: 'Oppenheimer',
  video: false,
  vote_average: 8.117,
  vote_count: 5982
*/
