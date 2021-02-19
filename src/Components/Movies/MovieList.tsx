import React, { useContext  } from 'react';
import { MovieContext } from '../../hook/MovieContext';
import { Container } from './styles';

const MovieList: React.FC = () => {
  const Movie  = useContext(MovieContext);

  return (
    <Container>
      {Movie.map(movie => (
        <ul >
          <li key={movie.id}>{movie.name}</li>
          <li>{movie.price}</li>
        </ul>

      ))}
    </Container>
  )
}

export default MovieList;

