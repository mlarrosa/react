import React from 'react';
import {BrowserRouter as Router, NavLink,BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import { useEffect, useState } from 'react';


function Pagination({ setMoviesPerPage, moviesPerPage, totalMovies, paginate, currentPage }) {


    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
        pageNumbers.push(i);
    }


  return (
    <>
        <div className="topbar-filter bottom">
                
            <label>Movies per page:</label>
            
            <div class="dropdown-movienum">
                <select onChange={(e) => setMoviesPerPage(e.target.value)}>
                    <option value="5">5 Movies</option>
                    <option value="10">10 Movies</option>
                    <option value="20">20 Movies</option>
                </select>
            </div>

            <div className="pagination2">
                <span>Page {currentPage} of {pageNumbers.length}:</span>

                <ul className='pagination-dynamic'>

                    {pageNumbers ? pageNumbers.map((number) => {
                        return(
                        <li key={number} className='page-item'>
                            <Link onClick={() => paginate(number)} className='page-link'>
                                {number}
                            </Link>
                        </li>
                        )

                    }):null}
                </ul>
            </div>
        </div>
    </>
  );
};

export default Pagination;
