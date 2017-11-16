const express = require('express');
const router = express.Router();
const TrackersController = require('../controllers/trackers');

router.route('/')
    .get(TrackersController.index)
    .post();

module.exports = router;