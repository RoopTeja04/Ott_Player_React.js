import React from 'react'
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Landing from './playNav/Landing';
import Subscription from './NavComponents/Subscription';
import DownWatch from './NavComponents/Down&Watch';
import Account from './NavComponents/Account';
import ActionMovies from './MoviesData/ActionMovies';
import ActionMoviesSingle from './MovieSingle/ActionMoviesSingle';

const App = () => {
  return (
    <>  
      <div>
        <Routes>
          <Route path='/' element={ <Landing />}/>
          <Route path='/subscription' element = {<Subscription /> } /> 
          <Route path='/down&watch' element = {<DownWatch /> } />
          <Route path='/account' element = {<Account /> } /> 
              <Route path='/action/:id' element = { <ActionMoviesSingle />} />
        </Routes>
      </div>
    </>
  )
}

export default App