import React from 'react'
import MovieCard from './MovieCard'

const MovieCards = ({ListMovies}) => {
    const handelName=(name)=> alert(`Le nom du Film est ${name}`)
    return (
        <div>
            {ListMovies.map((el , i) => 
                <MovieCard ListMovie={el} key={i} handelName={handelName}/>
            )}
        </div>
    )
}

export default MovieCards
