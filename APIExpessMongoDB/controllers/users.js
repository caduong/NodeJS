const Users = require('../models/user');

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

    newUser: async (req, res, next) => {
        const newUser = new Users(req.body);
        const user = await newUser.save();
        res.status(201).json(user);
    }
};