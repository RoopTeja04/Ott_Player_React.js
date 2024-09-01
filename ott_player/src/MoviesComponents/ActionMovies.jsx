import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ActionMovieData from "../MoviesData/ActionMovies";
import { Link } from 'react-router-dom';

const ActionMovies = () => {
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
            Action Movies
        </p>
    <div className='movie-slider-items'>
        <div className='main-heading-movie'>
        <Slider {...settings}>
            {
                ActionMovieData.map((movie) => {
                    return(
                            <div className='movie-poster'>
                                <Link to={`/action/${movie.id}`}>
                                    <div className='movie-poster-list' >
                                        <img className='movie-images' src={movie.image} alt=''/>
                                    </div>
                                </Link>
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

export default ActionMovies;