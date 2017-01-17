'use strict';

const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');

const router = express.Router();

router.get('/api/trips', (_req, res, next) => {
  knex('trips')
    .orderBy('name')
    .then((rows) => {
      const trips = camelizeKeys(rows);

      res.send(trips);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
