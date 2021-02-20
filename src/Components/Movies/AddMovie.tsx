import React, { useState, useContext } from 'react';
import { MovieContext, MovieProps } from '../../hook/MovieContext';

export const AddMovie: React.FC = () => {
  const [ movies, setMovies ] = useContext(MovieContext);
  const [ name, setName ] = useState('');
  const [ price, setPrice ] = useState('');

  const updateName = (nome: any) => {
    setName(nome.target.value)
  }

  const updatePrice = (price: any) => {
    setPrice(price.target.value)
  }

  const addMovie = (e: any) => {
    e.preventDefault();
    setMovies((prevMovies: MovieProps[])  => [...prevMovies, { name, price }])
  }

  return (
    <form onSubmit={addMovie}>
      <input type="text" name="name" value={name} onChange={updateName} />
      <input type="text" name="price" value={price} onChange={updatePrice}/>
      <button>Adicionar</button>
    </form>
  )
};
