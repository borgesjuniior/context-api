import React, { useContext } from 'react';
import Container from './styles';
import { MovieContext } from '../../hook/MovieContext'

const Movie: React.FC = () => {
  const [ movie ] = useContext(MovieContext);

  return (
    <Container>
      <h1>List of movies: {movie.length} </h1>
    </Container>
  )
}

export default Movie;

