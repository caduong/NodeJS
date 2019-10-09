const Users = require('../models/user');
//const Cars = require('../models/car');
//const ValidateParam = require('../helpers/routeHelpers');

const Joi = require('joi');
const idSchema = Joi.object().keys({
   userId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
});

// TODO: in here have 2 method is: index, newUser
module.exports = {

   // validate: DONE
   index: async (req, res, next) => {
      const users = await Users.find({});
      res.status(200).json(users);
   },

   // validate: DONE
   // TODO: get all data from user after save into database.
   newUser: async (req, res, next) => {
      // Create newUser with font is "Users" and data form req of user (user fill)
      console.log('req.value: ', req.value);
      const newUser = new Users(req.value.body); 
      const user = await newUser.save( );
      res.status(201).json(user);
   },

   // validate: DONE
   // TODO: find user from userID.
   getUser: async (req, res, next) => {
      const { userId } = req.params; // Get Id form user request show info.
      const user = await Users.findById(userId); // find User with that Id. 
      res.status(200).json(user);
   },

   // validate: DONE
   replaceUser: async (req, res, next) => {
      const { userId } = req.params;
       // get all data from user fill and  assign data that for 'newUser'. 
      const newUser = req.value.body;
      const result = await Users.findByIdAndUpdate(userId, newUser);
      res.status(200).json(result);

   },

   // validate: DONE
   updateUser: async (req, res, next) => {
      const { userId } = req.params;
      const newUser = req.body;
      const result = await Users.findByIdAndUpdate(userId, newUser);
      res.status(200).json({ success: true });
   },

   //validate: DONE
   getUserCars: async (req, res, next) => {
      const { userId } = req.params; // *: param = ID
      const user = await Users.findById(userId).populate('cars'); // Get data from 'cars' add in 'users' and return 'user'
      //console.log('user: ', user);
      res.status(200).json(user.cars);
   },

   // validate: DONE
   getCars: async (req, res, next) => {
      const { carId } = req.params; // *: param = ID
      const carUser = await Cars.findById(carId);
      res.status(200).json(carUser);
   },
   
   // validate: DONE
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
   // 5d92c30cbc323e5c71e67248

};