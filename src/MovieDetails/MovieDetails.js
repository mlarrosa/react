import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header.js';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../App.css';
import {BrowserRouter as Router, NavLink,BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import {withRouter} from 'react-router';


function MovieDetails(){

    const {movieId} = useParams();    
    const [movie, setMovie] = useState([]);
    const [credits, setCredits] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [similar, setSimilar] = useState([]);                                             
    const [crewdetails, setCrewDetails] = useState([]);
    const [movievideos, setMovieVideos] = useState([]);
    

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=0bfd4ef0e6ea78131bc5739b5870f258&language=en-US`, {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmZkNGVmMGU2ZWE3ODEzMWJjNTczOWI1ODcwZjI1OCIsInN1YiI6IjYxYTEwZTc4YzA0OGE5MDA2MzU2MzI2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OvtZv_cB0ZvPmY3v8jsRiFTM-BY7aq75-3W57eNK3sw",
                "Content-Type": "application/json;charset=utf-8",
            },
        }).then((result) => result.json()).then((data) => {
            setMovie(data);
        });


        fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=0bfd4ef0e6ea78131bc5739b5870f258&language=en-US`, {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmZkNGVmMGU2ZWE3ODEzMWJjNTczOWI1ODcwZjI1OCIsInN1YiI6IjYxYTEwZTc4YzA0OGE5MDA2MzU2MzI2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OvtZv_cB0ZvPmY3v8jsRiFTM-BY7aq75-3W57eNK3sw",
                "Content-Type": "application/json;charset=utf-8",
            },
        }).then((result) => result.json())
        .then(data => {
            setCredits(data);
            const crewdata = data.crew.map((crew) => 
                fetch(`https://api.themoviedb.org/3/person/${crew.id}?api_key=0bfd4ef0e6ea78131bc5739b5870f258&language=en-US`).then((res) => res.json()), {
                    headers: {
                        accept: 'application/json',
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmZkNGVmMGU2ZWE3ODEzMWJjNTczOWI1ODcwZjI1OCIsInN1YiI6IjYxYTEwZTc4YzA0OGE5MDA2MzU2MzI2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OvtZv_cB0ZvPmY3v8jsRiFTM-BY7aq75-3W57eNK3sw",
                        "Content-Type": "application/json;charset=utf-8",
                    },
                }
            );
            Promise.all(crewdata).then(data => {
                setCrewDetails(data);
                
            });
        });



        fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=0bfd4ef0e6ea78131bc5739b5870f258&language=en-US`, {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmZkNGVmMGU2ZWE3ODEzMWJjNTczOWI1ODcwZjI1OCIsInN1YiI6IjYxYTEwZTc4YzA0OGE5MDA2MzU2MzI2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OvtZv_cB0ZvPmY3v8jsRiFTM-BY7aq75-3W57eNK3sw",
                "Content-Type": "application/json;charset=utf-8",
            },
        }).then((result) => result.json()).then((data) => {
            setReviews(data);
        });


        fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=0bfd4ef0e6ea78131bc5739b5870f258&language=en-US`, {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmZkNGVmMGU2ZWE3ODEzMWJjNTczOWI1ODcwZjI1OCIsInN1YiI6IjYxYTEwZTc4YzA0OGE5MDA2MzU2MzI2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OvtZv_cB0ZvPmY3v8jsRiFTM-BY7aq75-3W57eNK3sw",
                "Content-Type": "application/json;charset=utf-8",
            },
        }).then((result) => result.json()).then((data) => {
            setSimilar(data);
        });


        fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=0bfd4ef0e6ea78131bc5739b5870f258&language=en-US`, {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmZkNGVmMGU2ZWE3ODEzMWJjNTczOWI1ODcwZjI1OCIsInN1YiI6IjYxYTEwZTc4YzA0OGE5MDA2MzU2MzI2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OvtZv_cB0ZvPmY3v8jsRiFTM-BY7aq75-3W57eNK3sw",
                "Content-Type": "application/json;charset=utf-8",
            },
        }).then((result) => result.json()).then((data) => {
            setMovieVideos(data);
        });
       

    }, [movieId]);


    

    const imageUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
    const backgroundImageUrl = 'https://image.tmdb.org/t/p/w300' + movie.backdrop_path;

    
    var heroStyle = {
        backgroundImage: 'url(' + backgroundImageUrl + ')'
      };


      
    return(
        <>
            <Header />
            <div style={heroStyle} className="hero mv-single-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">

                        </div>
                    </div>
                </div>
            </div>
            <div className="page-single movie-single movie_single">
                <div className="container">
                    <div className="row ipad-width2">
                        <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className="movie-img sticky-sb">
                                <img src={imageUrl} alt="" />
                            </div>
                            <div className="sb-it">
                                <h6>Genres:</h6>
                                <p>
                                    {movie.genres ? movie.genres.map((genre) => {
                                        return(
                                            <span key={genre.id} href="#">- {genre.name} </span>
                                        )
                                    }):null}
                                </p>
                            </div>
                            <div className="sb-it">
                                <h6>Production Companies: </h6>
                                {movie.production_companies ? movie.production_companies.map((companies) => {
                                    return(
                                        <p>- {companies.name}</p>
                                    )
                                }):null}
                            </div>
                            <div className="sb-it">
                                <h6>Spoken Languages: </h6>
                                {movie.spoken_languages ? movie.spoken_languages.map((language) => {
                                    return(
                                        <p>{language.name}</p>
                                    )
                                }):null}
                            </div>
                            <div className="sb-it">
                                <h6>Release Date:</h6>
                                <p>{movie.release_date}</p>
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-12 col-xs-12">
                            <div className="movie-single-ct main-content">
                                <h1 className="bd-hd"> {movie.title} </h1>

                                <div className="movie-rate">
                                    <div className="rate">
                                        <i className="ion-android-star"></i>
                                        <p><span>{parseFloat(movie.vote_average).toFixed(1)}</span> /10 <br/>
                                            <span className="rv">{movie.vote_count} Reviews</span>
                                        </p>
                                    </div>
                                    <div className="rate-star">
                                        <p>Rating: {parseFloat(movie.vote_average).toFixed(1)} </p>
                                        <i className="ion-ios-star"></i>
                                        <i className="ion-ios-star-outline"> </i>
                                    </div>
                                </div>
                                <p>{movie.overview}</p>

                                <Tabs forceRenderTabPanel={true}>
                                    <TabList className="tab-links">
                                        <Tab>Overview</Tab>
                                        <Tab>Reviews</Tab>
                                        <Tab>Media</Tab>
                                        <Tab>Related Movies</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div id="overview" className="tab active">
                                            <div className="row">
                                                <div className="col-md-12 col-sm-12 col-xs-12">

                                                    <div className="title-hd-sm">
                                                        <h3>Full Cast</h3>
                                                    </div>
                                                    <div className="mvcast-item">
                                                        {credits.cast ? credits.cast.map((actor) => {
                                                            
                                                            var actorProfilePic = 'https://image.tmdb.org/t/p/w300' + actor.profile_path;
                                                            const defaultImage = "/images/default-img2.jpg";
                                                            if(actor.profile_path == null){actorProfilePic = defaultImage}

                                                            return(
                                                            <div className="cast-it">
                                                                <div className="cast-left">
                                                                    <img src={actorProfilePic} />
                                                                    <p>{actor.name}</p>
                                                                </div>
                                                            </div>
                                                            )
                                                        }):null}		
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div id="reviews" className="tab review">
                                            <div className="row">
                                                <div className="col-md-12 col-sm-12 col-xs-12">
                                                    
                                                    <div className="title-hd-sm">
                                                        <h3>Reviews</h3>
                                                    </div>
                                                    

                                                    {reviews.results ? reviews.results.map((review) => {
                                                        let reviewAuthorImage = 'https://image.tmdb.org/t/p/w300' + review.author_details.avatar_path;
                                                        const defaultImage = "/images/default-img2.jpg";
                                                        if(review.author_details.avatar_path == null){reviewAuthorImage = defaultImage}

                                                        return(
                                                        <div className="cast-it">
                                                            <div className="row">
                                                                <div className="col-md-12 col-sm-12 col-xs-12">
                                                                    <div className="cast-left">
                                                                        <img src={reviewAuthorImage} />
                                                                        <h3>{review.author_details.username}</h3>
                                                                        <p>{review.content}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        )
                                                    }):null}

                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div id="media" className="tab">
                                            <div className="row">
                                                <div className="col-md-12 col-sm-12 col-xs-12">

                                                    <div className="title-hd-sm">
                                                        <h3>Media / Videos</h3>
                                                    </div>

                                                    <div className="mvsingle-item media-item">

                                                        {movievideos.results ? movievideos.results.map((movievideo) => {
                                                            const youtubeLink = "https://www.youtube.com/embed/" + movievideo.key;
                                                            return(
                                                            <div className="vd-item">
                                                                <div className="vd-infor">
                                                                    <h3> - {movievideo.name} -</h3>
                                                                </div>
                                                                <div className="vd-it">
                                                                    <div class="embed-responsive embed-responsive-21by9">
                                                                        <iframe class="embed-responsive-item" width="560" height="315" src={youtubeLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            )
                                                        }):null}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div id="moviesrelated" className="tab">
                                            <div className="row">
                                                <div className="col-md-12 col-sm-12 col-xs-12">
                                                    
                                                    <div className="title-hd-sm">
                                                        <h3>Related Movies</h3>
                                                    </div>

                                                    {similar.results ? similar.results.map((similar) => {
                                                            
                                                            var similarPosterPic = 'https://image.tmdb.org/t/p/w300' + similar.poster_path;
                                                            const defaultImage = "/images/default-img2.jpg";
                                                            if(similar.poster_path == null){similarPosterPic = defaultImage}

                                                            return(
                                                            <div className="movie-item-style-2">
                                                                <div className="row">
                                                                    <div className="col-md-3 col-sm-3 col-xs-12">
                                                                        <Link onClick={window.scrollTo(0, 0)} to={"/movies/" + similar.id} >
                                                                            <img src={similarPosterPic} alt="" />
                                                                        </Link>
                                                                    </div>
                                                                    <div className="col-md-9 col-sm-9 col-xs-12">
                                                                        <div className="mv-item-infor">
                                                                            <Link onClick={window.scrollTo(0, 0)} to={"/movies/" + similar.id} >{similar.title} </Link>
                                                                            <p className="rate"><i className="ion-android-star"></i><span>{parseFloat(movie.vote_average).toFixed(1)}</span> /10</p>
                                                                            <p className="describe">{similar.overview}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            )
                                                        }):null}	

                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                </Tabs>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieDetails;