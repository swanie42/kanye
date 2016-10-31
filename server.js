
// http://kanyerest.xyz/docs

var express = require('express');
var logger = require('morgan')('dev');
var Routes = require('./routes.js');

var PORT = process.env.PORT || 1337;

var app = express();

// mount logger middleware
app.use(logger);

// mount static file server
app.use(express.static('public'));

// mount routes middleware
Routes(app);

app.listen(PORT, (error) => {
    if(error) {
        console.log("Server error: ", error);
    } else {
        console.log("Server started on port: ", PORT);
    }
});
