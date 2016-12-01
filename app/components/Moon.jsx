import axios from 'axios';

import React from 'react';
import FlatButton from 'material-ui/FlatButton';


const Moon = React.createClass({
  getInitialState() {
    return {
      movies: [],
      loadErr: false,
     }
  },

  componentDidMount() {
    axios.get(`http://www.omdbapi.com/?s=bob`)
      .then(res => {
        this.setState({ movies: res.data.Search });
      })
      .catch(err => {
        this.setState({ loadErr: err });
      });
  },

  render() {
    return (
      <main>
        <h1>Moon</h1>
        <FlatButton label="earth" default={true} href="/"/>
        <FlatButton label="moon" primary={true} href="/moon"/>
        <FlatButton label="mars" secondary={true} href="/mars"/>

        <div>
          <ul>
          {this.state.movies.map((movie, index) =>
            <li key={index}>{movie.Title} | {movie.Year}</li>
          )}
          </ul>
        </div>
      </main>
    )
  }
});

export default Moon;
