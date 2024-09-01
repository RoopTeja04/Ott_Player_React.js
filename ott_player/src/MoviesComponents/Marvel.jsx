import React from 'react'
import MarvelMoviesData from '../MoviesData/MarvelMovies'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Marvel = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: false,
    pauseOnHover: true 
  };
  return (
    <>
        <p className='headline-sub'>
            Marvel Movies
        </p>
    <div className='movie-slider-items'>
        <div className='main-heading-movie'>
        <Slider {...settings}>
            {
                MarvelMoviesData.map((movie) => {
                    return(
                            <div className='movie-poster'>
                                    <div className='movie-poster-list' >
                                        <img className='movie-images' src={movie.poster} alt=''/>
                                    </div>
                            </div>
                    )
                })
            }
        </Slider>
        </div>
    </div>
    </>
  )
}

export default Marvel