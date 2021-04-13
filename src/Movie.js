import React from "react";
import PropTypes from "prop-types";

// a component that does not need state does not have to be a class component
// it can be a function component

function Movie({id, year, title, summary, poster}) {
    return <h4>{title}</h4>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movie;