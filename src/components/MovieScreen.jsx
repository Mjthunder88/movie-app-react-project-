import React from 'react'

const MovieScreen = ({list, setPage, page, movieList}) => {
    // console.log(movieList)
    let movieDisplay = movieList.map((movie) => {
        return <h2 key={Math.random()}>{movie.original_title}</h2>
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