//const Users = require('../models/user');
const Car = require('../models/car');
//const ValidateParam = require('../helpers/routeHelpers');

const Joi = require('joi');
// const idSchema = Joi.object().keys({
//    userId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
// });

// TODO: in here have 2 method is: index, newUser
module.exports = {
   index: async (req, res, next) => {
      //const { userId } = req.params; // *: param = ID
      const cars = await Car.find({}); // Get data from 'cars' add in 'users' and return 'user'
      res.status(200).json(cars);
   },

   // // validate: DONE
   // getCars: async (req, res, next) => {
   //    const { carId } = req.params; // *: param = ID
   //    const carUser = await Cars.findById(carId);
   //    res.status(200).json(carUser);
   // },

   // // validate: DONE
   newUserCars: async (req, res, next) => {
      const { userId } = req.params;
      // Create a new car
      const newCar = new Cars(req.body);
      // Get user
      const user = await Users.findById(userId);
      // Assign user as a car's seller
      newCar.seller = user;
      // Save the car
      await newCar.save();
      // Add car to the user's 
      user.cars.push(newCar);
      // Save the user
      await user.save();
      res.status(201).json(newCar);
   },
}