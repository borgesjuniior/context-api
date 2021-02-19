import React, { useState } from 'react';
import Movie from './Movie';

const MovieList: React.FC = () => {
  const [ movies, setMovies ] = useState([
    {
      id: 123,
      name: 'Harry Potter',
      price: '2$',
    },
    {
      id: 1234,
      name: 'Batman',
      price: '5$',
    },
    {
      id: 321,
      name: 'Interestelar',
      price: '6$',
    }
  ])

  console.log(setMovies);

  return (
    <>
      {movies.map(movie => (
        <Movie name={movie.name} />
      ))}
    </>
  )
}

export default MovieList;

