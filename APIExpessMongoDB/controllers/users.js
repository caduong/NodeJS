const Users = require('../models/user');
const Cars = require('../models/car');

// TODO: in here have 2 method is: index, newUser
module.exports = { 
    /*
    index: (req, res, next) => { 
        Users.find({},(err,users) => { // ?: users? 
            // console.error('err',err);
            // console.log('Found users',users); 
            if(err) {
                next(err);
            }

            res.status(200).json(users); // *: Response status code: 200 ~ Ok 

            // res.status(200).json({
        //     message: 'This is page Users'
        // });
        })

        // res.status(200).json({
        //     message: 'This is page Users'
        // });
    },
    */
    // index: (req, res, next) => {
    //     Users.find({})
    //         .then(users => {
    //             res.status(200).json(users);
    //         })
    //         .catch(err => {
    //             next(err);
    //         });
    // },

    // index: async (req, res, next) => {
    //     try {
    //         const users = await Users.find({});
    //         res.status(200).json(users);
    //     } catch(err) {
    //         next(err);
    //     }
    // },

    index: async (req, res, next) => {
        const users = await Users.find({});
        res.status(200).json(users);
    },

    /*
    newUser: (req, res, next) => {
        // *: if a request from Users same key in json defined before then auto-merge with data before.    
        //console.log('req.body contents',req.body); // request from user
        const newUser = new Users(req.body); 
        //console.log('New users: ', newUser);
        
        // TODO: Save data from user into database  
        newUser.save((err, users) => { 
            res.status(201).json(users);
            // console.log('err: ',err);
            // console.log('user; ',users);
        });
    },
    */

    // newUser: (req, res, next) => {
    //     const newUser = new Users(req.body);
    //     newUser.save()
    //         .then(users => {
    //             res.status(201).json(users);
    //         })
    //         .catch(err => {
    //             next(err);
    //         });
    // },

    // newUser: async (req, res, next) => {
    //     try {
    //         const newUser = new Users(req.body);
    //         const user = await newUser.save();
    //         res.status(201).json(user);
    //     } catch(err) {
    //         next(err);
    //     }
    // }
    
    // TODO: get all data from user after save into database.
    newUser: async (req, res, next) => {
        const newUser = new Users(req.body);
        const user = await newUser.save();
        res.status(201).json(user);
    }, 

    // TODO: find user from userID.
    getUser: async (req, res, next) => {
        const { userId } = req.params;
        const user = await Users.findById(userId);
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