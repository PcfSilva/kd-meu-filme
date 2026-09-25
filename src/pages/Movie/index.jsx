import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router"

import "./movie.css"

export default function Movie() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function loadingMovie() {
      const result = await axios.get("https://api.themoviedb.org/3/movie/top_rated", {
        params: {
          api_key: "486cf28af09bfe05eae35b3756702a16",
          language: "pt-BR",
          page: "1"
        }
      })
      setMovies(result.data.results)
    }
    loadingMovie()
  }, [])
  return (
    <div className="main-container">
      <div className="container-rated">
        <h2>Mais bem avaliados</h2>
        <div className="top-rated">
          {movies.map((movie) => (
            <article key={movie.id}>
              <Link to={`/moviedetails/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} title={movie.title} />
                <span>
                  {movie.title}
                </span>
              </Link>
            </article>
          ))}
        </div>
        <Popular />
      </div>
    </div>
  )
}

export function Popular() {
  const [popular, setPopular] = useState([])
  useEffect(() => {
    async function loadingPopular() {
      const result = await axios.get("https://api.themoviedb.org/3/trending/movie/week", {
        params: {
          api_key: "486cf28af09bfe05eae35b3756702a16",
          language: "pt-BR",
          page: "1"
        }
      })
      setPopular(result.data.results)
    }
    loadingPopular()
  }, [])
  return (
    <div className="container-popular">
      <h2>Tendências da semana</h2>
      <div className="popular">
        {popular.map((item) => (
          <article key={item.id}>
            <Link to={`/moviedetails/${item.id}`}>
              <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} title={item.title} />
              <span>
                {item.title}
              </span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}