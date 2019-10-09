const express = require('express');
const router = require('express-promise-router')();
//const router = express.Router();

const UsersController = require('../controllers/users');

const { validateParam, validateBody, schema } = require('../helpers/routeHelpers');
router.route('/')
   .get(UsersController.index)
   
   .post(validateBody(schema.userSchema),UsersController.newUser);

router.route('/:userId') 
   .get(validateParam(schema.idSchema, 'userId'), UsersController.getUser)
   
   .put([validateParam(schema.idSchema, 'userId')
      ,validateBody(schema.userSchema)], 
      UsersController.replaceUser)

   .patch([validateParam(schema.idSchema, 'userId')
      ,validateBody(schema.userSchema)], 
      UsersController.updateUser);

// router.route('/:userId/cars/')
//    .get(validateParam(schema.idSchema, 'userId'),UsersController.getUserCars) 

//    .post([validateParam(schema.idSchema, 'userId'),
//       validateBody(schema.carSchema)],
//       UsersController.newUserCars);

   //.post(UsersController.newUserCars)
router.route('/:userId/cars/:carId') 
   .get(validateParam(schema.idSchema, 'carId'), UsersController.getCars);
   // .put(UsersController.replaceUser)
   // .patch(UsersController.updateUser); 


module.exports = router;