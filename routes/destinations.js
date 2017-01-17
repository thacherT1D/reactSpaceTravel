'use strict';

const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');

const router = express.Router();

router.get('/api/destinations', (_req, res, next) => {
  knex('destinations')
    .orderBy('name')
    .then((rows) => {
      const destinations = camelizeKeys(rows);

      res.send(destinations);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
