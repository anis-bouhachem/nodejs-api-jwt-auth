// Require deps
var express = require('express');


var config = require('./config');
var routes = require('./routes');


var passport = config.passport;


// setup server
var app = express();

config.app(app);

app.use(passport.initialize());

routes.security(app, passport);

routes.users(app);


var funnyPicIndex = Math.floor(Math.random()*12);
function getNextFunnyPic() {
  funnyPicIndex++;
  if (funnyPicIndex > 12) {
    funnyPicIndex = 0;
  }
  return __dirname + '/funny-pics/' + funnyPicIndex + '.jpg';
}

app.get('/funny-pic', function(req, res) {
  if (req.user) {
    res.sendfile(getNextFunnyPic());
  } else {
    res.json(403, { message: 'Not authorized' });
  }
});

// listen on port

var server = app.listen(3000, function() {
  var addy = server.address();
  console.log('Server listening at: ', addy.address + ':' + addy.port);
});

