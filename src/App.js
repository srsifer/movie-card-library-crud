import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div
        className="movie-card-header"
      >
        <h1
          className="page-title"
        >
          Movie Card Library CRUD
        </h1>
      </div>
      <Switch>
        <Route exact path="/"><MovieList /></Route>
        <Route path="/movies/new"><NewMovie /></Route>
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
