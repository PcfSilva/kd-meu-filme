import { useEffect, useState } from "react"
import axios from "axios"

import "./home.css"

export default function Home() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    async function loadingMovies() {
      const api = await axios.get("https://api.themoviedb.org/3/movie/now_playing", {
        params: {
          api_key: "486cf28af09bfe05eae35b3756702a16",
          language: "pt-BR"
        }
      })
      console.log(api.data.results)
      setMovies(api.data.results)
    }
    loadingMovies()
  }, [])

  return (
    <div className="home">
      <h2>Filmes em cartaz</h2>
      <div className="movie-container">
        {movies.map((movie) => (
          <article key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt={movie.title} />
            {movie.title}
          </article>
        )
        )}
      </div>
    </div>
  )
}