/**
 * Created by Anis on 11/02/2015.
 */

var bodyParser = require('body-parser');
var jwt = require('./jwt');
var passport = require('./passport');

module.exports = function(app) {


    app.use(bodyParser());

    app.use(function (req, res, next) {
        if (req.originalUrl === '/login') {
            next();
        } else {
            if(req.query && req.query.hasOwnProperty('access_token')) {
                req.headers.authorization = 'Bearer ' + req.query.access_token;
            }
            console.log('api')
            jwt.validateJwt(req, res, next);
        }
    });


    // setup cors
    app.use(function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

        next();
    });

};