import TVSeriesTabs from "../components/TVSeriesTabs.js";

function TVSeriesAndMovies(){
    return(
        <>
            <div className="movie-items">
                <div className="container">
                    <div className="row ipad-width">
                        <TVSeriesTabs/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TVSeriesAndMovies;