import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./pages/Home"
import Header from "./components/Header"
import MovieDetails from "./pages/MovieDetails"
import Movie from "./pages/Movie"
import Serie from "./pages/Serie"

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moviedetails/:id" element={<MovieDetails />} />
        <Route path="/movielist" element={<Movie />} />
        <Route path="/serielist" element={<Serie />} />
      </Routes>
    </BrowserRouter>
  )
}