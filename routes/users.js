/**
 * Created by Anis on 11/02/2015.
 */
var user = require('../config').user;
module.exports = function(app) {

    app.get('/users/me', function(req, res) {
        if (req.user) {
            var publicUser = user;
            delete publicUser.password;
            res.json(publicUser);
        } else {
            res.json(403, { message: 'Not authorized' });
        }
    });

}