import { useEffect, useState } from 'react';

function CelebritiesSidebar(){

    const [celebs, setCelebs] = useState([]);
    
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/person/popular/?api_key=0bfd4ef0e6ea78131bc5739b5870f258&language=en-US", {
            headers: {
                accept: 'application/json',
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmZkNGVmMGU2ZWE3ODEzMWJjNTczOWI1ODcwZjI1OCIsInN1YiI6IjYxYTEwZTc4YzA0OGE5MDA2MzU2MzI2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OvtZv_cB0ZvPmY3v8jsRiFTM-BY7aq75-3W57eNK3sw",
                "Content-Type": "application/json;charset=utf-8",
            },
        })
        .then((result) => result.json())
        .then(data => {
            const celebdata = data.results.map((celeb) => 
                fetch(`https://api.themoviedb.org/3/person/${celeb.id}?api_key=0bfd4ef0e6ea78131bc5739b5870f258&language=en-US`).then((res) => res.json()), {
                    headers: {
                        accept: 'application/json',
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmZkNGVmMGU2ZWE3ODEzMWJjNTczOWI1ODcwZjI1OCIsInN1YiI6IjYxYTEwZTc4YzA0OGE5MDA2MzU2MzI2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OvtZv_cB0ZvPmY3v8jsRiFTM-BY7aq75-3W57eNK3sw",
                        "Content-Type": "application/json;charset=utf-8",
                    },
                }
            );
            Promise.all(celebdata).then(data => {
                setCelebs(data);
            });
            
        });
    }, []);



    return(
        
        <div className="col-md-4 col-sm-12 col-xs-12">
            <div className="sidebar">
                <div className="celebrities">
                    <h4 className="sb-title">Spotlight Celebrities</h4>

                    {celebs.map((celeb) => {
                        const imageUrl = 'https://image.tmdb.org/t/p/w300' + celeb.profile_path;

                        return(
                        <div className="celeb-item">
                            <img src={imageUrl} alt="" />
                            <div className="celeb-author">
                                <h6><a href="#">{celeb.name}</a></h6>
                                <span>Actor</span>
                            </div>
                        </div>)
                    })}

                </div>
            </div>
        </div>
    );
}

export default CelebritiesSidebar;