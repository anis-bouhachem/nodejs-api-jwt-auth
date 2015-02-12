/**
 * Created by Anis on 11/02/2015.
 */
var config = require('../config');

var jwt = config.jwt;

module.exports = function(app, passport) {

// setup routes
    app.post('/login', function(req, res, next) {
        passport.authenticate('local', function(err, user, info) {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.json(404, 'No user found...');
            }
            req.logIn(user, function(err) {
                if (err) {
                    return next(err);
                }
                var token = jwt.validate({
                    username: user.username
                });
                return res.json(200, { token: token, user: user });
            });
        })(req, res, next);
    });

    app.get('/logout', function(req, res) {
        req.logout();
        res.json(200, { success: true });
    });

};
