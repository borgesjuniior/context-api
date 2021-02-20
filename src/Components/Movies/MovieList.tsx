import React, { useContext  } from 'react';
import { MovieContext } from '../../hook/MovieContext';
import { Container } from './styles';
import { AddMovie } from './AddMovie';
import { MovieProps } from '../../hook/MovieContext'

const MovieList: React.FC = () => {
  const [ movies, setMovies ]  = useContext(MovieContext);

  return (
    <Container>
      <AddMovie />
      {movies.map((movie: MovieProps) => (
        <ul >
          <li key={movie.id}>Nome: {movie.name}</li>
          <li>Preço: {movie.price}</li>
        </ul>

      ))}
    </Container>
  )
}

export default MovieList;

