import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, imagePath, id } = movie;
    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt={ title } />
        <h2>{title}</h2>
        <p>{storyline}</p>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}
MovieCard.propTypes = { movie: PropTypes.objectOf({
  title: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}).isRequired,
};

export default MovieCard;
