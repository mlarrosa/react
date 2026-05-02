
function MovieCard({movie}){
    const imageUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;

    return(
        <div className="movie-item">
            <div className="mv-img">
                <a href="#"><img src={imageUrl} alt="" width="285" height="437" /></a>
            </div>
            <div className="title-in">
                <div className="cate">
                    <span className="blue"><a href="#">Sci-fi</a></span>
                </div>
                <h6><a href="#">{movie.title}</a></h6>
                <p><i className="ion-android-star"></i><span>{movie.vote_average}</span> /10</p>
            </div>
        </div>
    );
}

export default MovieCard;