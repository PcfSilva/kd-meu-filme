import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./pages/Home"
import Header from "./components/Header"
import MovieDetails from "./pages/MovieDetails"

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moviedetails/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  )
}