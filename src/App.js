import React from 'react';
import './App.css';
import Navbar from './components/GetMovies/NavBar';
import GetMovies from './components/GetMovies';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieDetails from './components/GetMovies/Details/MovieDetails';

function App (){
  return (
    <div className='main'>
      <BrowserRouter>
        <Navbar />
        <GetMovies />
        <Routes>
          <Route path='/' element={<GetMovies />} />
          <Route path='/movies/:movieId' element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>    
      </div>
  );
}

export default App;
