import axios from 'axios';

import React from 'react';
import FlatButton from 'material-ui/FlatButton';


const Moon = React.createClass({
  // getInitialState() {
  //   return {
  //     movies: [],
  //     jobs: [],
  //     loadErr: false,
  //    }
  // },

  // componentDidMount() {
  //   axios.get(`http://www.omdbapi.com/?s=bob`)
  //     .then(res => {
  //       this.setState({ movies: res.Search });
  //     })
  //     .catch(err => {
  //       this.setState({ loadErr: err });
  //     });
  // },

  render() {
    return (
      <main>
      <h1>Moon</h1>
      <FlatButton label="earth" default={true} href="/"/>
      <FlatButton label="moon" primary={true} href="/moon"/>
      <FlatButton label="mars" secondary={true} href="/mars"/>

        {/* <div>
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
        </div> */}
      </main>
    )
  }
});

export default Moon;
