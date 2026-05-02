import { useEffect, useState, useCallback } from 'react';
import {BrowserRouter as Router, NavLink,BrowserRouter, Route, Link, Routes, useParams} from 'react-router-dom';
import Pagination from '../components/Pagination.js';
import GridLayout from '../components/GridLayout.js';
import ListLayout from '../components/ListLayout.js';

function MoviesGrid({movies, genres, setMovies}){

    const [layout, setLayout] = useState("");
    const [totalMovies, setTotalMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage, setMoviesPerPage] = useState(5);

    // Get current movies
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    let currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);




    

	return(
        <>
            <div className="page-single movie_list">
                <div className="container">

                    {layout == "Grid" ? 
                    (
                        <GridLayout 
                            setLayout={setLayout} 
                            movies={movies} 
                            genres={genres}
                            currentMovies={currentMovies} 
                            setMoviesPerPage={setMoviesPerPage} 
                            moviesPerPage={moviesPerPage} 
                            totalMovies={movies.length} 
                            paginate={paginate} 
                            currentPage={currentPage}
                            setMovies={setMovies}
                        />
                    ):(
                        <ListLayout 
                            setLayout={setLayout} 
                            movies={movies} 
                            genres={genres}
                            currentMovies={currentMovies} 
                            setMoviesPerPage={setMoviesPerPage} 
                            moviesPerPage={moviesPerPage} 
                            totalMovies={movies.length} 
                            paginate={paginate} 
                            currentPage={currentPage}
                            setMovies={setMovies}
                        />
                    )}

                </div>
            </div>
        </>
	)
}

export default MoviesGrid;