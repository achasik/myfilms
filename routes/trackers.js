const express = require('express');
//const router = express.Router();
const router = require('express-promise-router')();
const TrackersController = require('../controllers/trackers');

router.route('/')
    .get(TrackersController.index)
    .post(TrackersController.newTracker);

module.exports = router;