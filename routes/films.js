const express = require('express');
const router = require('express-promise-router')();
const FilmsController = require('../controllers/films');

router.route('/')
    .get(FilmsController.index)
    .post(FilmsController.post);
router.route('/:id')
    .get(FilmsController.film);
    
module.exports = router;