const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.config');
const compiler = webpack(config);

const express = require('express');
const app = express();

app.disable('x-powered-by');

const bodyParser = require('body-parser');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

const destinations = require('./routes/destinations');
const trips = require('./routes/trips');
const users = require('./routes/users');

app.use(destinations);
app.use(trips);
app.use(users);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './app/assets/index.html'));
});


app.use((_req, res) => {
  res.sendStatus(404);
});

app.use((err, _req, res, _next) => {
  if (err.output && err.output.statusCode) {
    return res
      .status(err.output.statusCode)
      .set('Content-Type', 'text/plain')
      .send(err.message);
  }

  console.error(err.stack);
  res.sendStatus(500);
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log('Listening on port', port);
});
