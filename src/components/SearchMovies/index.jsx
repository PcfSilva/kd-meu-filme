import { useState } from "react"
import { useNavigate } from "react-router"

import "./search-movies.css"

export default function SearchMovie() {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (!search.trim()) return
    navigate(`/search?query=${encodeURIComponent(search)}`);
    setSearch("")
  }

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Pesquise filme e séries!"
      />
    </form>
  )
}