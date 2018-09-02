const express = require('express');
const router = require('express-promise-router')();
const controller = require('../controllers/upload');

router
   .route('/')
   .get(controller.get)
   .post(controller.post);

module.exports = router;
