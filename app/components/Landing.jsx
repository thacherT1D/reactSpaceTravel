import {Grid, Row, Col} from 'react-flexbox-grid/lib';
import { Container, Button } from 'reactstrap';
import axios from 'axios';


import React from 'react';

var landingStyle = {
  margin: "20px",
  padding: "0px 0px 100px 0px"
}

const Landing = React.createClass({
  getInitialState() {
    return {
      trips: [],
      loadErr: false,
     }
  },

  componentDidMount() {
    axios.get(`/api/trips`)
      .then(res => {
        console.log(res.data);
        this.setState({ trips: res.data });
      })
      .catch(err => {
        this.setState({ loadErr: err });
      });
  },

  render() {
    return (

      <div>


        <Container style = {landingStyle}>
          <h1>Landing</h1>
          <p>Land on your next vacation planet</p>
          <ul>
          {this.state.trips.map((trip, index) =>
            <li key={index}>{trip.name}</li>
          )}
          </ul>
        </Container>
      </div>

    )
  }
});

export default Landing;
