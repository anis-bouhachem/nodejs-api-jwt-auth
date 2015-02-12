/**
 * Created by Anis on 11/02/2015.
 */

var fs = require('fs');

// Database
var dbFile = '../user.json';
if (fs.existsSync(__dirname + '/../user.local.json')) {
    dbFile = '../user.local.json';
}
var user = require(dbFile);
/*
var userPassword = user.password;
delete user.password;
*/
module.exports = user;

