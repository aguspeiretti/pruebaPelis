import React from 'react'
import peliculas from "../peliculas.json"
import MovieCard from './MovieCard'
import './movieContainer.css'

const MovieContainer = () => {
    
  return (
    <>
    <div className='titulo'>
        <h3>NEXFLIT</h3>
    </div>
      <ul className='contenedorPelis'>
    {peliculas.map((pelicula)=>(<MovieCard key= {pelicula.id} pelicula= {pelicula}/>))}
    </ul>
    </>
  
  )
}

export default MovieContainer