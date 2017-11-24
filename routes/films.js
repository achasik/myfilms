const express = require('express');
const router = require('express-promise-router')();
const TrackersController = require('../controllers/films');

router.route('/')
    .get(TrackersController.index);
router.route('/:id')
    .get(TrackersController.film);
module.exports = router;