import React from 'react'
import MovieCard from './MovieCard'

const WatchList = ({list}) => {
    console.log("watchlist:", list)

    let movieDisplay = list.map((movie) => {
        return <MovieCard movie={movie} key={Math.random()} />
    })

    return (
        <div className='watchlist'>
            <h1>My Watchlist</h1>
            <div className='movie-container'>{movieDisplay}</div>
        </div>
    )
}

export default WatchList