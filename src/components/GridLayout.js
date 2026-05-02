import React from 'react';
import {BrowserRouter as Router, NavLink,BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Pagination from '../components/Pagination.js';


function GridLayout({ setSelectedRating, setSelectedGenre, setSearchedMovies, setSearched, setLayout, setMovies, movies, genres, currentMovies, setMoviesPerPage, moviesPerPage, totalMovies, paginate, currentPage }){


    const sorting =(selectedOrder)=> {

        if(selectedOrder === "POPUASC"){
            const sorted = [...movies].sort((a,b)=>
                a.vote_average > b.vote_average ? 1 : -1
            );
            movies = sorted;
            setMovies(sorted);
        }
        if(selectedOrder === "POPUDESC"){
            const sorted = [...movies].sort((a,b)=>
                a.vote_average < b.vote_average ? 1 : -1
            );
            movies = sorted;
            setMovies(sorted);
        }

        if(selectedOrder === "DATEDASC"){
            const sorted = [...movies].sort((a,b)=>
                a.release_date > b.release_date ? 1 : -1
            );
            movies = sorted;
            setMovies(sorted);
        }
        if(selectedOrder === "DATEDESC"){
            const sorted = [...movies].sort((a,b)=>
                a.release_date < b.release_date ? 1 : -1
            );
            movies = sorted;
            setMovies(sorted);
        }

    }


    return(
    <div className="row ipad-width">
        <div className="col-md-8 col-sm-12 col-xs-12">

            <div className="topbar-filter">                    
                <p>Found <span>{movies.length}</span> movies in total</p>
                <label>Sort by:</label>

                <div className="dropdown-asc-dec">
                    <select onChange={(e) => sorting(e.target.value)}>
                        <option value="POPUASC">Reviews Ascending</option>
                        <option value="POPUDESC">Reviews Descending</option>
                        <option value="DATEDASC">Release date Ascending</option>
                        <option value="DATEDESC">Release date Descending</option>
                    </select>
                </div>

                <div class="layout-selection">
                    <a onClick={() => setLayout("List")} className="list">
                        <i className="ion-ios-list-outline active"></i>
                    </a>
                    <a onClick={() => setLayout("Grid")} className="grid">
                        <i className="ion-grid"></i>
                    </a>
                </div>
            </div>


            <div className="flex-wrap-movielist">

                {currentMovies ? currentMovies.map((movie) => {
                        
                    const imageUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;

                    return(
                        <div className="movie-item-style-2 movie-item-style-1">
                            <Link to={"/movies/" + movie.id}>
                                <img src={imageUrl} alt="" />
                            </Link>
                            
                            <div className="hvr-inner">
                                <Link to={"/movies/" + movie.id}> Movie Details </Link>
                            </div>
                            <div className="mv-item-infor">
                                <h6><a href="#">{movie.title}</a></h6>
                                <p className="rate"><i className="ion-android-star"></i><span>{parseFloat(movie.vote_average).toFixed(1)}</span> /10</p>
                            </div>
                        </div>
                    )
                }):null}

            </div>	

            <Pagination
                setMoviesPerPage={setMoviesPerPage}
                moviesPerPage={moviesPerPage}
                totalMovies={movies.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </div>
        <div className="col-md-4 col-sm-12 col-xs-12 sticky-top">
            <div className="sidebar">
                <div className="col-md-4 col-sm-12 col-xs-12 sticky-top">
                    <div className="sidebar">
                        <img src="images/movietime-2.jpg" />
                        <img src="images/movietime-1.jpg" />
                    </div>
                </div>                
            </div>
        </div>
    </div>
    )
}

export default GridLayout;