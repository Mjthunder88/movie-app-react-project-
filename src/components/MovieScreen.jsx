import React from 'react'
import MovieCard from './MovieCard'

const MovieScreen = ({list, setPage, page, movieList, addMovie, removeMovie}) => {
    // console.log(movieList)
    let movieDisplay = movieList.map((movie) => {
        return <MovieCard 
        movie={movie} 
        addMovie={addMovie} 
        key={Math.random()}
        removeMovie={removeMovie}
        list={list}
        />
    })

    const decrement = () => {
        page !== 1 && setPage(page - 1)
    }
    const increment = () => {
        setPage(page + 1)
    }

    return (
        <div className='page'>
            <h1>Marcu's Movie Theatre</h1>
            <h3>Add a movie to your watchlist</h3>
            <div className='btn-container'>
                <button onClick={decrement}>Previous</button>
                <button onClick={increment}>Next</button>
            </div>
            <div className='movie-container'>{movieDisplay}</div>
        </div>
    )
}

export default MovieScreen