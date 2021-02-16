import React, { useState } from 'react';

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

  return (
    <>
      {movies.map(movie => (
        <li>{movie.name}</li>
      ))}
    </>
  )
}

export default MovieList;

