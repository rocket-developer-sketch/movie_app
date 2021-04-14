import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import './Movie.css';

// a component that does not need state does not have to be a class component
// it can be a function component

//  <h3 class="movie__title" style={{}}>{title}</h3> style{{}} 로 사용함으로써
//  style을 javascript 로 줄 수 있음
// Page Ruler Redux : extension. 사이즈 측정
// ColorZilla : 색 검사
function Movie({id, year, title, summary, poster, genres}) {
    return (
    <Link to={{
        pathname: `/movie/${id}`,
        state: {
            year,
            title,
            summary,
            poster,
            genres
        }
    }}>
        <div className="movies_movie">
            <div className="movie">
                <img src={poster} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie_genres"> 
                        {genres.map((genre, index) => (
                            <li className="genres__genre" key={index}>{genre}</li>
                        ))}
                    </ul>
                    <p className="movie__summary">{summary.slice(0,180)}...</p>
            
                </div>
            </div>
        </div>
    </Link>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;