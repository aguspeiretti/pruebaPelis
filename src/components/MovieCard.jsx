import React from 'react'
import "./movieCard.css"

const MovieCard = ({pelicula}) => {
    const imgUrl = "https://image.tmdb.org/t/p/w300"+ pelicula.poster_path
  return (
    <li>
        <img className='caratulas' src={imgUrl} alt="pelicula.title" />
        <h2> {pelicula.title}</h2>
    </li>
  )
}

export default MovieCard