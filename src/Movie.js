import React from "react";
import PropTypes from "prop-types";
import './Movie.css';

// a component that does not need state does not have to be a class component
// it can be a function component

//  <h3 class="movie__title" style={{}}>{title}</h3> style{{}} 로 사용함으로써
//  style을 javascript 로 줄 수 있음
function Movie({year, title, summary, poster}) {
    return <div class="movies_movie">
        <div class="movie">
            <img src={poster} alt={title} title={title} />
            <div class="movie__data">
                <h3 class="movie__title">{title}</h3>
                <h5 class="movie__year">{year}</h5>
                <p class="movie__summary">{summary}</p>
            </div>
        </div>
    </div>;
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movie;