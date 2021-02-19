import React from 'react';

interface MovieProps {
  name: string;
}

const Movie: React.FC<MovieProps> = (props) => {

  return (
    <div>
      <h3>{props.name}</h3>
    </div>
  )
}

export default Movie;

