import "./header.css"

export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>Filmes</li>
          <li>Séries</li>
        </ul>
        <input type="text" placeholder="Pesquise filme e séries!" />
      </nav>
    </header>
  )
}