const express = require('express');
const router = require('express-promise-router')();
const controller = require('../controllers/home');

router.route('/').get(controller.home);

module.exports = router;
