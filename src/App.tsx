import React from 'react';
import MovieList from './Components/Movies/MovieList';
import Nav from './Components/Nav/Nav';
import GlobalStyles from './styles/global';
import { MovieProvider } from './hook/MovieContext';

function App() {
  return (
    <>
    <MovieProvider>
      <GlobalStyles />
      <Nav />
      <MovieList />
    </MovieProvider>
    </>
  );
}

export default App;
