import React from 'react';
import MovieList from './Components/Movies/MovieList';
import Nav from './Components/Nav/Nav';
import GlobalStyles from './styles/global'

function App() {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <MovieList />
    </>
  );
}

export default App;
