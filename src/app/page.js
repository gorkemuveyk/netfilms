import MovieItem from "./components/movie/MovieItem";

export default async function Home({ searchParams }) {
  const API_KEY = "YOUR_API_KEY";

  console.log(searchParams, "search1");
  const genreEndpoint = searchParams.genre
    ? `movie/${searchParams.genre}`
    : "trending/all/day";

  const res = await fetch(
    `https://api.themoviedb.org/3/${genreEndpoint}?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  //https://api.themoviedb.org/3/movie/popular?api_key=0597f4d2e408695af506f23bb392f50a&language=en-US&page=1

  const data = await res.json();

  console.log(data);
  return (
    <main className="flex items-center justify-center flex-wrap gap-3">
      {data?.results?.map((data, index) => (
        <MovieItem key={index} data={data} />
      ))}
    </main>
  );
}
