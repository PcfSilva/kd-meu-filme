import { useEffect, useState } from "react"
import axios from "axios"
import "./home.css"
import { Link } from "react-router"

export default function Home() {


  return (
    <div>
      <div className="home">
        <h1>Click e descubra...</h1>
        <p>Filmes, séries e muito entretenimento!</p>
      </div>
      <NowPlaying />
    </div>
  )
}

export function NowPlaying() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    async function loadingMovies() {
      const api = await axios.get("https://api.themoviedb.org/3/movie/now_playing", {
        params: {
          api_key: "486cf28af09bfe05eae35b3756702a16",
          language: "pt-BR"
        }
      })
      setMovies(api.data.results)
    }
    loadingMovies()
  }, [])
  return (
    <div className="now-playing">
      <h2>Filmes em cartaz</h2>
      <div className="movie-container">
        {movies.map((movie) => (
          <article key={movie.id}>
            <Link to={`/moviedetails/${movie.id}`}>
              <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt={movie.title} title={movie.title} />
              <span>{movie.title}</span>
            </Link>
          </article>
        )
        )}
      </div>
    </div>
  )
}