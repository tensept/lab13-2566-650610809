"use client";

import { MovieRow } from "@/components/MovieRow";
import { movieDB } from "@/libs/movieDB";

export default function SearchResultPage({params}) {
  //tip1 : before filtering movie, replace all "%20" with " " (space) in the input
  const searchInput = params.searchInput;
  const processedSearchInput = searchInput.replaceAll("%20", " ");
  let textTitle = processedSearchInput.toLowerCase()
  const filteredMovies = movieDB.filter((movie) => movie.title.toLowerCase().includes(textTitle))

  

  return (
    <div>
      <p className="fw-bold fs-4 text-center my-0">
        Searching &quot; {processedSearchInput} &quot;
      </p>
      <p className="fw-bold fs-4 text-center">Found {filteredMovies.length} result(s)</p>
      {filteredMovies.map((movie, i) => (
        <MovieRow
          key={movie.id}
          id={movie.id}
          title={movie.title}
          detail={movie.detail}
          rating={movie.rating}
          number={i + 1}
        />
      ))}
    </div>
  );
}
