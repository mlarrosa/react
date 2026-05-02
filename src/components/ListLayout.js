import React from 'react';
import {BrowserRouter as Router, NavLink,BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Pagination from '../components/Pagination.js';



function ListLayout({setLayout, setMovies, movies, genres, currentMovies, setMoviesPerPage, moviesPerPage, totalMovies, paginate, currentPage }){



    const sorting =(selected_order)=> {

        if(selected_order === "POPUASC"){
            const sorted = [...movies].sort((a,b)=>
                a.vote_average > b.vote_average ? 1 : -1
            );
            movies = sorted;
            setMovies(sorted);
            console.log(selected_order);
            console.log(sorted);
        }
        if(selected_order === "POPUDESC"){
            const sorted = [...movies].sort((a,b)=>
                a.vote_average < b.vote_average ? 1 : -1
            );
            movies = sorted;
            setMovies(sorted);
            console.log(selected_order);
            console.log(sorted);
        }

        if(selected_order === "DATEDASC"){
            const sorted = [...movies].sort((a,b)=>
                a.release_date > b.release_date ? 1 : -1
            );
            movies = sorted;
            setMovies(sorted);
            console.log(selected_order);
            console.log(sorted);
        }
        if(selected_order === "DATEDESC"){
            const sorted = [...movies].sort((a,b)=>
                a.release_date < b.release_date ? 1 : -1
            );
            movies = sorted;
            setMovies(sorted);
            console.log(selected_order);
            console.log(sorted);
        }

    }



    return(
        <div className="row ipad-width2">
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

                {currentMovies ? currentMovies.map((movie) => {
                    
                    const imageUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;


                    return(
                    <div key={movie.id} className="row movie-item-style-2">

                        <div className="col-md-4 col-sm-4 col-xs-12 text-center">
                            <Link to={"/movies/" + movie.id}><img src={imageUrl} alt="" /></Link>
                        </div>

                        <div className="col-md-8 col-sm-12 col-xs-12">
                            <div className="mv-item-infor">
                                <h6><Link to={"/movies/" + movie.id}> {movie.title} </Link></h6>
                                <p className="rate"><i className="ion-android-star"></i><span>{parseFloat(movie.vote_average).toFixed(1)}</span> /10</p>
                                <p className="describe"> {movie.overview} </p>
                                <p>Genres:  
                                    {movie.genres.map((genre) => {
                                        return(
                                            " - " + genre.name
                                        )
                                    })} 
                                </p>
                                <p>Release Date: <span>{movie.release_date}</span> </p>
                            </div>
                        </div>
                    </div>
                    )
                }):null}
                   
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
                            <img src="/images/movietime-2.jpg" />
                            <img src="/images/movietime-1.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListLayout;