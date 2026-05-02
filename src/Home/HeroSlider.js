import MovieCard from "../components/MovieCard.js";
import React, { useState } from "react";
import Slider from "react-slick";
import {BrowserRouter as Router, NavLink,BrowserRouter, Route, Link, Routes, useParams} from 'react-router-dom';


function HeroSlider({movies}){
    

    const [slides, setSlides] = useState([1, 2, 3, 4, 5, 6]);

    const handleClick = () => {
        setSlides(
            slides.length === 6 ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : [1, 2, 3, 4, 5, 6]
        );
    };
    // click() {
    //   const { slides } = this.state;
    //   this.setState({
    //     slides:
    //       slides.length === 6 ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : [1, 2, 3, 4, 5, 6]
    //   });
    // }
    const settings = {
        dots: false,
        arrows:true,
        pauseOnHover: true,
        autoplay:true,
        autoplaySpeed: 4000,
        infinite: true,
        mobileFirst:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };




  return (
    <Slider {...settings}>
        {movies.map((movie) => {

            const imageUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
            const backgroundImageUrl = 'https://image.tmdb.org/t/p/w300' + movie.backdrop_path;


            var sliderId = "home-slider";

            return(
                <div id={sliderId} key={movie.id} className="movie-item">
                    <div className="title-in">
                        <div className="row">
                            <div className="container">
                                <div className="image-container col-lg-4 col-md-8 col-sm-8 col-xs-12">
                                    <img id="slider-img" src={imageUrl} />
                                </div>
                                <div className="col-lg-6 col-md-8 col-sm-7 col-xs-12">
                                    <div className="cate">
                                        {movie.genres ? movie.genres.map((genre) => {

                                            let genreClass = "";
                                            switch(genre.name) {
                                                case "Animation":
                                                    genreClass = "blue";
                                                break;
                                                case "Comedy":
                                                    genreClass = "orange";
                                                break;
                                                case "Fantasy":
                                                    genreClass = "yell";
                                                break;
                                                case "Family":
                                                    genreClass = "green";
                                                break;
                                                case "Action":
                                                    genreClass = "red";
                                                break;
                                                case "Romance":
                                                    genreClass = "purple";
                                                break;
                                                case "Horror":
                                                    genreClass = "gray";
                                                break;
                                                case "Adventure":
                                                    genreClass = "brown";
                                                break;
                                                case "Thriller":
                                                    genreClass = "darkcyan";
                                                break;
                                                case "Science Fiction":
                                                    genreClass = "cadetblue";
                                                break;
                                                case "Mystery":
                                                    genreClass = "darkgoldenrod";
                                                break;
                                                case "Crime":
                                                    genreClass = "chocolate";
                                                break;
                                                case "Documentary":
                                                    genreClass = "yellowgreen";
                                                break;
                                                case "Drama":
                                                    genreClass = "cornflowerblue";
                                                break;
                                                case "History":
                                                    genreClass = "sienna";
                                                break;
                                                case "Music":
                                                    genreClass = "olivedrab";
                                                break;
                                                case "TV Movie":
                                                    genreClass = "lightcoral";
                                                break;
                                                case "War":
                                                    genreClass = "indianred";
                                                break;
                                                case "Western":
                                                    genreClass = "mediumslateblue";
                                                break;
                                                default:
                                                // code block
                                            }

                                            return(
                                                <span key={genre.id} className={genreClass}>{genre.name}</span>
                                            )
                                        }):null}
                                    </div>
                                    <span className="date">{movie.release_date}</span>
                                    <h1><a href="#"> {movie.title} </a></h1>

                                    <div className="hvr-inner">
                                        <Link to={"/movies/" + movie.id}> Movie Details </Link>
                                    </div>
                                    <div className="mv-details">
                                        <p><i className="ion-android-star"></i> <span>{parseFloat(movie.vote_average).toFixed(1)}</span> /10</p>
                                    </div>
                                    <p>{movie.overview}</p>

                                </div>
                            </div>
                        </div>

                    </div>		
                </div>)
        })}
    </Slider>

  );


}

export default HeroSlider;