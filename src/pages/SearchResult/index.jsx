
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import axios from "axios";

import "./searchResult.css"

function SearchResult() {

  const [searchParams] = useSearchParams();

  const [results, setResults] = useState([]);

  const query = searchParams.get("query");

  useEffect(() => {

    if (!query) return;

    const searchMovies = async () => {

      try {

        const response = await axios.get(
          "https://api.themoviedb.org/3/search/multi",
          {
            params: {
              query: query,
              api_key: "486cf28af09bfe05eae35b3756702a16",
              language: "pt-BR",
              include_adult: false,
            },

            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
            },
          }
        );

        const filteredResults =
          response.data.results.filter(
            (item) =>
              item.media_type === "movie" ||
              item.media_type === "tv"
          );

        setResults(filteredResults);

      } catch (error) {

        console.error("Erro na busca:", error);

      }

    };

    searchMovies();

  }, [query]);


  return (

    <section className="search-result">

      <h2>Resultados para: {query}</h2>

      <div className="search-grid">

        {results.map((item) => (

          <article className="movie-card" key={item.id}>

            <Link to={`/moviedetails/${item.id}`}>
              <img
                src={
                  item.poster_path
                    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                    : "/sem-poster.jpg"
                }
                alt={item.title || item.name}
              />

              <div className="movie-title">
                {item.title || item.name}
              </div>
            </Link>

          </article>

        ))}

      </div>

    </section>
  );
}

export default SearchResult;