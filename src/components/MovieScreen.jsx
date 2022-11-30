import React from 'react'
import MovieCard from './MovieCard'

const MovieScreen = ({list, setPage, page, movieList, addMovie}) => {
    // console.log(movieList)
    let movieDisplay = movieList.map((movie) => {
        return <MovieCard movie={movie} addMovie={addMovie} key={Math.random()} />
    })

    return (
        <div className='page'>
            <h1>Marcu's Movie Theatre</h1>
            <h3>Add a movie to your watchlist</h3>
            <div className='movie-container'>{movieDisplay}</div>
        </div>
    )
}

export default MovieScreen