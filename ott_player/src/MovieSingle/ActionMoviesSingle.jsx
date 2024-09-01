import React, { useState } from 'react';
import ActionMoviesData from '../MoviesData/ActionMovies';
import { useParams } from 'react-router-dom';
import NavBar from '../playNav/NavBar';
import PopUp from './popUp';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const ActionMoviesSingle = () => {
    const { id } = useParams();
    const ItemMovie = ActionMoviesData.find((Movie) => Movie.id === id );
    const [show, setShow] = useState(false)
    
  return (
    <>
      <NavBar/>
      <div className='movie-single'>
        <div className='movie-single-poster'>
          <img className='item-movie-image' src={ItemMovie.headimage} alt=''/>
        </div>
        <div className='movie-single-details'>
          <p className='movie-single-name'>{ItemMovie.name}</p>
          <p className='movie-single-duration'> {ItemMovie.year} | {ItemMovie.duration} | {ItemMovie.censor}</p>
        </div>
        <div className='movie-single-button'>
          <button className='movie-single-play' type='submit' onClick={() => setShow(true)}>play Now</button>
        </div>
        <button className='movie-single-list' type='submit'><PlaylistAddIcon sx={{fontSize:40, borderRadius:2, cursor:'pointer'}}/></button>
        { show && <PopUp onClose = {() => setShow(false)}/>}
        <div>
          <p className='movie-single-over-view'>OverView: {ItemMovie.overview}</p>
        </div>
      </div>
      <div className='movie-single-cast'>
        <h1 className='movie-single-cast-head'>Cast</h1>
        <div className='movie-single-cast-members'>
          <div className='movie-single-cast-mem'>
            <img className='movie-single-cast-image' src={ItemMovie.Mem1Img} alt=''/>
            <h1 className='movie-single-cast-name'>{ItemMovie.Mem1Name}</h1>
          </div>
          <div className='movie-single-cast-mem'>
            <img className='movie-single-cast-image' src={ItemMovie.Mem2Img} alt=''/>
            <h1 className='movie-single-cast-name'>{ItemMovie.Mem2Name}</h1>
          </div>
          <div className='movie-single-cast-mem'>
            <img className='movie-single-cast-image' src={ItemMovie.Mem3Img} alt=''/>
            <h1 className='movie-single-cast-name'>{ItemMovie.Mem3Name}</h1>
          </div>
          <div className='movie-single-cast-mem'>
            <img className='movie-single-cast-image' src={ItemMovie.Mem4Img} alt=''/>
            <h1 className='movie-single-cast-name'>{ItemMovie.Mem4Name}</h1>
          </div>
          <div className='movie-single-cast-mem'>
            <img className='movie-single-cast-image' src={ItemMovie.Mem5Img} alt=''/>
            <h1 className='movie-single-cast-name'>{ItemMovie.Mem5Name}</h1>
          </div>
          <div className='movie-single-cast-mem'>
            <img className='movie-single-cast-image' src={ItemMovie.Mem6Img} alt=''/>
            <h1 className='movie-single-cast-name'>{ItemMovie.Mem6Name}</h1>
          </div>
          <div className='movie-single-cast-mem'>
            <img className='movie-single-cast-image' src={ItemMovie.Mem7Img} alt=''/>
            <h1 className='movie-single-cast-name'>{ItemMovie.Mem7Name}</h1>
          </div>
        </div>
      </div>
      <div className='movie-single-cast'>
        <h1 className='movie-single-cast-head'>Crew Members</h1>
        <div className='movie-single-cast-members'>
          <div className='movie-single-cast-mem'>
            <img className='movie-single-cast-image' src={ItemMovie.Crew1Img} alt=''/>
            <h1 className='movie-single-cast-name'>{ItemMovie.Crew1Name}</h1>
          </div>
          <div className='movie-single-cast-mem'>
            <img className='movie-single-cast-image' src={ItemMovie.Crew2Img} alt=''/>
            <h1 className='movie-single-cast-name'>{ItemMovie.Crew2Name}</h1>
          </div>
          <div className='movie-single-cast-mem'>
            <img className='movie-single-cast-image' src={ItemMovie.Crew3Img} alt=''/>
            <h1 className='movie-single-cast-name'>{ItemMovie.Crew3Name}</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default ActionMoviesSingle;