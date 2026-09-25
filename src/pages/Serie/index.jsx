import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router"

import "./series.css"


export default function Serie() {
  const [series, setSeries] = useState([])

  useEffect(() => {
    async function loadingSeries() {
      const result = await axios.get("https://api.themoviedb.org/3/tv/popular", {
        params: {
          api_key: "486cf28af09bfe05eae35b3756702a16",
          language: "pt-BR",
          page: "1"
        }
      })
      setSeries(result.data.results)
    }
    loadingSeries()
  }, [])
  return (
    <div>
      <div className="container-series">
        <h2>Populares</h2>
        <div className="serie-popular">
          {series.map((serie) => (
            <article key={serie.id}>
              <Link to={`/moviedetails/${serie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`} alt={serie.name} title={serie.name} />
                <span className="title-serie">{serie.name}</span>
              </Link>
            </article>
          ))}
        </div>
        <TopSeries />
      </div>
    </div>
  )
}


export function TopSeries() {
  const [toprated, setToprated] = useState([])

  useEffect(() => {
    async function topRated() {
      const result = await axios.get("https://api.themoviedb.org/3/tv/top_rated", {
        params: {
          api_key: "486cf28af09bfe05eae35b3756702a16",
          language: "pt-BR",
          page: "1"
        }
      })
      setToprated(result.data.results)
    }
    topRated()
  }, [])

  return (
    <div>
      <h2>Mais bem avaliadas</h2>
      <div className="top-rated">
        {toprated.map((movie) => (
          <article key={movie.id}>
            <Link>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.name} title={movie.name} />
              <span>
                {movie.name}
              </span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}