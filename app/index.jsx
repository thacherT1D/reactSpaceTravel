import Home from './components/App';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(<Home />, document.getElementById('app'));
