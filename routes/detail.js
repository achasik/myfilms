const express = require("express");
const router = require("express-promise-router")();
const DetailController = require("../controllers/details");

router.route("/:id").get(DetailController.film);

module.exports = router;
