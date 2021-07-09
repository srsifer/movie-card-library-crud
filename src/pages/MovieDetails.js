import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.changeMovieDetails = this.changeMovieDetails.bind(this);

    this.state = {
      movie: {},
      loading: true,
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    const { getMovie } = movieAPI;

    const fechDetails = await getMovie(id);
    this.changeMovieDetails(fechDetails);
  }

  changeMovieDetails(movie) {
    this.setState({ movie, loading: false });
  }

  render() {
    const { match } = this.props;
    const { id } = match.params;
    const { movie, loading } = this.state;
    if (loading) return <Loading>Carregando...</Loading>;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h2>{ `Title: ${title}` }</h2>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}
// me orientei atravez da pullrequest do erick kreis https://github.com/tryber/sd-012-project-movie-card-library-crud/pull/44/commits/e2291d7b42db407d3fba13fb348c632a54c61414
MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
