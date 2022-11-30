import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import "./App.css";
import MovieScreen from "./components/MovieScreen";
import WatchList from "./components/WatchList";


function App() {
  const [movieList, setMovieList] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [page, setPage] = useState(1);

  const getData = (event) => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
      .then((response) => {
        console.log(response.data.results);
        setMovieList(response.data.results)
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, [page]);


  const addMovie = (movie) => {
    setWatchList([...watchList, movie])
  }

  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen
          list={watchList}
          page={page}
          setPage={setPage}
          movieList={movieList}
          addMovie={addMovie}
        />
        <WatchList list={watchList} />
      </main>
    </div>
  );
}

export default App;
