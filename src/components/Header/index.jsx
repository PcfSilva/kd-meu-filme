import SearchMovie from "../SearchMovies"
import "./header.css"

export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>Filmes</li>
          <li>Séries</li>
        </ul>
        <SearchMovie />
      </nav>
    </header>
  )
}