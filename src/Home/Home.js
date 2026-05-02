import Header from '../Header/Header.js';
import HeroSlider from './HeroSlider.js';
import TVSeriesAndMovies from './TVSeriesAndMovies.js';
import { useEffect, useState } from 'react';
import MoviesGrid from './MoviesGrid.js';
import Pagination from '../components/Pagination.js';

function Home(){

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=0bfd4ef0e6ea78131bc5739b5870f258&language=en-US&page=9", {
            headers: {
                accept: 'application/json',
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmZkNGVmMGU2ZWE3ODEzMWJjNTczOWI1ODcwZjI1OCIsInN1YiI6IjYxYTEwZTc4YzA0OGE5MDA2MzU2MzI2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OvtZv_cB0ZvPmY3v8jsRiFTM-BY7aq75-3W57eNK3sw",
                "Content-Type": "application/json;charset=utf-8",
            },
        })
        .then((result) => result.json())
        .then(data => {
            const moviedata = data.results.map((movie) => 
                fetch(` https://api.themoviedb.org/3/movie/${movie.id}?api_key=0bfd4ef0e6ea78131bc5739b5870f258&language=en-US`).then((res) => res.json()), {
                    headers: {
                        accept: 'application/json',
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmZkNGVmMGU2ZWE3ODEzMWJjNTczOWI1ODcwZjI1OCIsInN1YiI6IjYxYTEwZTc4YzA0OGE5MDA2MzU2MzI2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OvtZv_cB0ZvPmY3v8jsRiFTM-BY7aq75-3W57eNK3sw",
                        "Content-Type": "application/json;charset=utf-8",
                    },
                }
            );
            Promise.all(moviedata).then(data => {
                setMovies(data);
            });
            
        });
    }, []);



    const [genres, setGenres] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=0bfd4ef0e6ea78131bc5739b5870f258&language=en-US", {
            headers: {
                accept: 'application/json',
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmZkNGVmMGU2ZWE3ODEzMWJjNTczOWI1ODcwZjI1OCIsInN1YiI6IjYxYTEwZTc4YzA0OGE5MDA2MzU2MzI2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OvtZv_cB0ZvPmY3v8jsRiFTM-BY7aq75-3W57eNK3sw",
                "Content-Type": "application/json;charset=utf-8",
            },
        })
        .then((result) => result.json())
        .then(data => {
            setGenres(data.genres);
        });


            
    }, []);




    return(
        <>
            <Header/>
            <HeroSlider movies={movies}/>
            <TVSeriesAndMovies/>
            <MoviesGrid genres={genres} movies={movies} setMovies={setMovies}/>

        </>
    )
}

export default Home;