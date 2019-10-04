const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// * Connect to mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/APIExpessMongoDB'); 

// Routes
const users = require('./routes/users');

// Middlewares
app.use(logger('dev'));
app.use(bodyParser.json()); // ?: configure for data receive is json.

// Routes
app.use('/users',users);

// Catch 404 Errors and forward them to error handler
app.use((req, res, next) => { // Show when not find the page
    const err = new Error('Not Found'); // init err "not Found"
    err.status = 404; 
    next(err);
});

// Error handler function
app.use((err, req, res, next) => {
    const error = app.get('env') === 'development' ? err : {};
    const status = err.status || 500;

    // Respond to client
    res.status(status).json({
        error: {
            message: error.message
        }
    });


    // Respond to ourselves
    console.error(err);
});
// Start the server
const port = app.get('port') || 7000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));