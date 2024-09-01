import React from 'react'
import NavBar from './NavBar'
import ActionMovies from '../MoviesComponents/ActionMovies'
import DarmaThriller from '../MoviesComponents/Darma&Thriller'
import Marvel from '../MoviesComponents/Marvel'
import Banner from './Banner'

const Landing = () => {
  return (
    <div>
        <NavBar/>
        <Banner/>
        <ActionMovies/>
        <DarmaThriller/>
        <Marvel/>
    </div>
  )
}

export default Landing