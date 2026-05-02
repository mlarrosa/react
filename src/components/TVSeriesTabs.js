import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../assets/react-tabs/react-tabs.css';
import {BrowserRouter as Router, NavLink,BrowserRouter, Route, Link, Routes, useParams} from 'react-router-dom';
import SimpleSlider from './SimpleSlider';


function TVSeriesTabs(){

    //let movies = [];
    const [airing, setAiring] = useState([]);
    const [popular, setPopular] = useState([]);
    const [top_rated, setTopRated] = useState([]);
    const [on_the_air, setOnTheAir] = useState([]);


    useEffect(() => {

        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=0bfd4ef0e6ea78131bc5739b5870f258&language=en-US&page=5", {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmZkNGVmMGU2ZWE3ODEzMWJjNTczOWI1ODcwZjI1OCIsInN1YiI6IjYxYTEwZTc4YzA0OGE5MDA2MzU2MzI2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OvtZv_cB0ZvPmY3v8jsRiFTM-BY7aq75-3W57eNK3sw",
                "Content-Type": "application/json;charset=utf-8",
            },
        })
        .then((result) => result.json())
        .then((data) => {
            setAiring(data.results);
        });


        fetch("https://api.themoviedb.org/3/movie/popular?api_key=0bfd4ef0e6ea78131bc5739b5870f258&language=en-US&page=8", {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmZkNGVmMGU2ZWE3ODEzMWJjNTczOWI1ODcwZjI1OCIsInN1YiI6IjYxYTEwZTc4YzA0OGE5MDA2MzU2MzI2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OvtZv_cB0ZvPmY3v8jsRiFTM-BY7aq75-3W57eNK3sw",
                "Content-Type": "application/json;charset=utf-8",
            },
        })
        .then((result) => result.json())
        .then((data) => {
            setPopular(data.results);
        });


        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=0bfd4ef0e6ea78131bc5739b5870f258&language=en-US&page=15", {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmZkNGVmMGU2ZWE3ODEzMWJjNTczOWI1ODcwZjI1OCIsInN1YiI6IjYxYTEwZTc4YzA0OGE5MDA2MzU2MzI2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OvtZv_cB0ZvPmY3v8jsRiFTM-BY7aq75-3W57eNK3sw",
                "Content-Type": "application/json;charset=utf-8",
            },
        })
        .then((result) => result.json())
        .then((data) => {
            setTopRated(data.results);
        });



        fetch("https://api.themoviedb.org/3/tv/on_the_air?api_key=0bfd4ef0e6ea78131bc5739b5870f258&language=en-US", {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmZkNGVmMGU2ZWE3ODEzMWJjNTczOWI1ODcwZjI1OCIsInN1YiI6IjYxYTEwZTc4YzA0OGE5MDA2MzU2MzI2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OvtZv_cB0ZvPmY3v8jsRiFTM-BY7aq75-3W57eNK3sw",
                "Content-Type": "application/json;charset=utf-8",
            },
        })
        .then((result) => result.json())
        .then((data) => {
            setOnTheAir(data.results);
        });



    }, []);


    return(
        <>
            <Tabs>

                <div className="tv-series react-tabs">
                    <TabList className="tab-links">
                        <Tab>Airing Today</Tab>
                        <Tab>Top Rated</Tab>
                        <Tab>Most Popular</Tab>
                    </TabList>

                    <div className="tab-content">
                        <TabPanel>
                            <div id="tab1">
                                <SimpleSlider movies={airing} />
                            </div>
                        </TabPanel>

                        <TabPanel>
                            <div id="tab2">
                                <SimpleSlider movies={top_rated} />
                            </div>
                        </TabPanel>

                        <TabPanel>
                            <div id="tab3">
                                <SimpleSlider movies={popular} />
                            </div>
                        </TabPanel>

                    </div>
                </div>

            </Tabs>
        </>
    );
}

export default TVSeriesTabs;