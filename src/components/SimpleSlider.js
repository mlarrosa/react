import React, { useState } from "react";
import Slider from "react-slick";
import {BrowserRouter as Router, NavLink,BrowserRouter, Route, Link, Routes, useParams} from 'react-router-dom';


function SimpleSlider(props) {

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
        dots: true,
        arrows: false,
        pauseOnHover: true,
        autoplay:true,
        autoplaySpeed: 4000,
        infinite: true,
        mobileFirst:true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    };

  return (
      <Slider {...settings}>
        {props.movies ? props.movies.map((movie) => {
            const imageUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;

            return (
                <div key={movie.id} className="slide-it">
                    <div className="movie-item">
                      <div className="mv-img">
                        <Link to={"/movies/" + movie.id}>
                          <img src={imageUrl} alt="" width="185" height="284" />
                        </Link>
                      </div> 
                      <div className="hvr-inner">
                        <Link to={"/movies/" + movie.id}> Movie Details </Link>
                      </div>
                      <div className="title-in">
                          <h4 className="title">{movie.name}</h4>
                          <p><i className="ion-android-star"></i><span>{movie.vote_average}</span> /10</p>
                      </div>
                    </div>
                </div>
            );
        }):null}
      </Slider>

  );
}

export default SimpleSlider;