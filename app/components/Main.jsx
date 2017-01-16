import {Grid, Row, Col} from 'react-flexbox-grid/lib';
import { Match, Miss } from 'react-router';


import Landing from './Landing';
import Earth from './Earth';
import Mars from './Mars';
import Moon from './Moon';
import NotFound from './NotFound';

import React from 'react';


const Main = React.createClass({
  render() {
    return (
        <div>
          <Match pattern="/" exactly component={Landing} />
          <Match pattern="/earth" exactly component={Earth} />
          <Match pattern="/moon" component={Moon} />
          <Match pattern="/mars" component={Mars} />
          <Miss component={NotFound} />
        </div>
    )
  }
});

export default Main;
