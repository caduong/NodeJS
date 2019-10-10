//const express = require('express');
const router = require('express-promise-router')();

const CarsController = require('../controllers/cars');
const {
    validateParams,
    validateBody,
    schema
} = require('../helpers/routeHelpers');

router.route('/')
    .get(CarsController.index)
    .post(validateBody(schema.newCarSchem), CarsController.newCars);

module.exports = router;