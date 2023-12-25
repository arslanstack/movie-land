import { useState, useEffect } from 'react'
import './App.css'
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = 'https://www.omdbapi.com?apikey=5bb7ff35'


const App = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(movies);
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);


  return (
    <div className='app'>
      <h1>Movie Land</h1>

      <div className='search'>
        <input
          type="text"
          placeholder='search for movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt="Search" onClick={() => searchMovies(searchTerm)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  )
}

export default App
