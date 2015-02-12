/**
 * Created by Anis on 11/02/2015.
 */

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var user = require('./user');

// setup passport
passport.use(new LocalStrategy(function(username, password, done) {
    if (username === user.username && password === user.password) {
        console.log('authenticated');
        return done(null, user);
    } else {
        done(null, false, { message: 'Incorrect username or password' });
    }
}));

passport.serializeUser(function(user, done) {
    done(null, user.username);
});

passport.deserializeUser(function(username, done) {
    if (username === user.username) {
        done(null, user);
    } else {
        done('No user with username ' + username);
    }
});

module.exports = passport;
