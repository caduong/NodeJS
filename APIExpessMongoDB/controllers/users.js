const Users = require('../models/user');
const Cars = require('../models/car');
const ValidateParam = require('../helpers/routeHelpers');

const Joi = require('joi');
const idSchema = Joi.object().keys({
    userId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
});

// TODO: in here have 2 method is: index, newUser
module.exports = { 
    
    index: async (req, res, next) => {
        const users = await Users.find({}); // get all info user not if 
        res.status(200).json(users); 
    },

    // TODO: get all data from user after save into database.
    newUser: async (req, res, next) => { 
        // Create newUser with font is "Users" and data form req of user (user fill)
        const newUser = new Users(req.body); 
        const user = await newUser.save();
        res.status(201).json(user);
    }, 

    // TODO: find user from userID.
    getUser: async (req, res, next) => {
        // validate ID true with format defined.
//        const result = Joi.validate(req.params, idSchema);
        // console.log('result: ', result);
        
        //const { userId } = req.value.params;
        
        const { userId } = req.params; 
        const user = await Users.findById(userId);
        //console.log('users: ', user);
        res.status(200).json(user);
    },

    replaceUser: async (req, res, next) => {
        // *: enforce that req.body must contain all the fields
        const { userId } = req.params; // id from data user fill
        const newUser = req.body; // all data from user fill 
        const result = await Users.findByIdAndUpdate(userId, newUser);
        res.status(200).json(result);

    },
    
    updateUser: async (req, res, next) => {
        //*: req.body may contain any number of fields
        const { userId } = req.params;
        const newUser = req.body;
        const result = await Users.findByIdAndUpdate(userId, newUser);
        res.status(200).json({ success: true });
    },
    
    getUserCars: async (req, res, next) => {
        const { userId } = req.params; // *: param = ID
        const user = await Users.findById(userId).populate('cars'); // Get data from 'cars' add in 'users' and return 'user'
        console.log('user: ',user);
        res.status(200).json(user.cars);
    },
    // TODO: 
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