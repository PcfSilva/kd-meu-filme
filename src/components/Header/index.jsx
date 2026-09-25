import SearchMovie from "../SearchMovies"
import logo from "../../assets/logo.svg"
import "./header.css"
import { Link } from "react-router"

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Logo do site" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link>Filmes</Link>
          </li>
          <li>
            <Link>Séries</Link>
          </li>
        </ul>
      </nav>
      <SearchMovie />
    </header>
  )
}