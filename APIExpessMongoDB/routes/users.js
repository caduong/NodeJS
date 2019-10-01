const express = require('express');
const router = require('express-promise-router')();
//const router = express.Router();

const UsersController = require('../controllers/users');

router.route('/')
    .get(UsersController.index)
    .post(UsersController.newUser);

router.route('/:userId')
    .get(UsersController.getUser)
    .put(UsersController.replaceUser)
    .patch(UsersController.updateUser);
    // .delete()

router.route('/:userId/cars')
    .get(UsersController.getUserCars)
    .post(UsersController.newUserCars);

// *: Page Home
// router.route('/')
//     .get((req, res, next) => {
//         res.status(200).json({
//             message: 'This is page Home'
//         })
//     })
//     .post();

// *: Page admin
// router.route('/admin')
// .get((req, res, next) => {
//     res.status(200).json({
//         message: 'This is page Admin'
//     })
// })
// .post();

// page users
// router.route('/users')
// .get((req, res, next) => {
//     res.status(200).json({
//         message: 'This is page Users'
//     })
// })
// .post();

// page users


module.exports = router;