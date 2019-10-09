//const express = require('express');
const router = require('express-promise-router')();

const CarsController = require('../controllers/cars');
const {
    validateParams,
    validateBody,
    schemas
} = require('../helpers/routeHelpers');

router.route('/cars')
    .get(CarsController.index)
    .post(CarsController.newUserCars);

module.exports = router;