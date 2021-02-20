import React, { useState, createContext } from 'react';
export interface MovieProps {
  id: number;
  name: string;
  price: string;
}

export const MovieContext = createContext<any[]>([] as any[]);

export const MovieProvider: React.FC = ({ children }) => {
  const [ movies, setMovies  ] = useState<MovieProps[]>([
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
    },

  ])

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
          {children}
        </MovieContext.Provider>
    )
;}
