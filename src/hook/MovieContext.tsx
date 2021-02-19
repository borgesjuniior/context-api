import React, { useState, createContext } from 'react';

interface MovieProps {
  id: number;
  name: string;
  price: string;
}

export const MovieContext = createContext({} as MovieProps);

export const MovieProvider: React.FC<MovieProps> = ({children}) => {

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
        <MovieContext.Provider value={[movies]}>
          {children}
        </MovieContext.Provider>
    )
;}
