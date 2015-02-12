/**
 * Created by Anis on 11/02/2015.
 */

var expressJwt = require('express-jwt');

var jwt = require('jsonwebtoken');

// setup jwt
var jwtSuperSecretCode = 'super-secret-key';
jwt.validateJwt = expressJwt({secret: jwtSuperSecretCode});
jwt.validate = function(params) {
    return jwt.sign(params, jwtSuperSecretCode)
}
module.exports = jwt;