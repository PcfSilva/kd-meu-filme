import { useEffect, useState } from "react"
import { useParams } from "react-router"
import axios from "axios"

import "./movie-details.css"

export default function MovieDetails() {
  const [movie, setMovie] = useState({})
  const { id } = useParams()

  useEffect(() => {
    async function loadingMovie() {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
          api_key: "486cf28af09bfe05eae35b3756702a16",
          language: "pt-BR"
        }
      })
      console.log(response.data)
      setMovie(response.data)
    }
    loadingMovie()
  }, [])

  return (
    <div className="container-details">
      <div className="cover">
        <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" />
        <div className="container-info">
          <div className="info-title">
            <strong>
              {movie.title}
            </strong>
            <span className="container-vote">
              Avaliação: <span className="vote">{movie.vote_average}</span> / 10
            </span>
          </div>
          <p className="description">
            {movie.overview}
          </p>
        </div>
      </div>
    </div>
  )
}