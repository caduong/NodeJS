const Users = require('../models/user');

module.exports = {
    index: (req, res, next) => {
        Users.find({},(err,users) => {
            // console.error('err',err);
            // console.log('Found users',users); 
            if(err) {
                next(err);
            }

            res.status(200).json(users); 
        })

        // res.status(200).json({
        //     message: 'This is page Users'
        // });
    },
    newUser: (req, res, next) => {
        console.log('req.body contents',req.body);
    }
};