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
        // TODO: get all data from user after save into database.
        const newUser = new Users(req.body);
        const user = await newUser.save();
        res.status(201).json(user);
    }, 

    getUser: async (req, res, next) => {
        //console.log('req.params: ', req.params);
        // TODO: find user from userID.
        const { userId } = req.params;
        const user = await Users.findById(userId);
        res.status(200).json(user);
    },

    replaceUser: async (req, res, next) => {
        // *: enforce that req.body must contain all the fields
        const { userId } = req.params; // id from data user fill
        const newUser = req.body; // all data from user fill 

        // console.log('userId is: ', userId);
        // console.log('newUser is: ',newUser);

        const result = await Users.findByIdAndUpdate(userId, newUser);
        res.status(200).json(result);

    },
    
    updateUser: async (req, res, next) => {
        //*: req.body may contain any number of fields
        const { userId } = req.params;
        const newUser = req.body;
        const result = await Users.findByIdAndUpdate(userId, newUser);
        res.status(200).json({ success: true });
    }
};