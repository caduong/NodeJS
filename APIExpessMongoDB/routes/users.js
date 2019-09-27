const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/users');

router.route('/users')
    .get(UsersController.index)
    .post();

// Page Home
// router.route('/')
//     .get((req, res, next) => {
//         res.status(200).json({
//             message: 'This is page Home'
//         })
//     })
//     .post();

// // page admin
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