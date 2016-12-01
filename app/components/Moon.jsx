import axios from 'axios';

import React from 'react';
import FlatButton from 'material-ui/FlatButton';


const Moon = React.createClass({
  getInitialState() {
    return {
      jobs: [],
      loadErr: false,
     }
  },

  componentDidMount: function() {
    var _this = this;
    this.serverRequest =
      axios
        .get("http://codepen.io/jobs.json")
        .then(function(result) {
          _this.setState({
            jobs: result.data.jobs
          });
        })
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render() {
    return (
      <main>
      <h1>Moon</h1>
      <FlatButton label="earth" default={true} href="/"/>
      <FlatButton label="moon" primary={true} href="/moon"/>
      <FlatButton label="mars" secondary={true} href="/mars"/>

        <div>
          <h1>Jobs!</h1>
          {this.state.jobs.map(function(job) {
            return (
              <div key={job.id} className="job">
                <a href={job.url}>
                  {job.company_name}
                  is looking for a
                  {job.term}
                  {job.title}
                </a>
              </div>
            );
          })}
        </div>
      </main>
    )
  }
});

export default Moon;
