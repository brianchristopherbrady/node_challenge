var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(function (req, res, next) {
      res.write('a');
      next();
    });

    app.use('/hello', function (req, res, next) {
      res.write('b');
      next();
    });

    app.use(function (req, res, next) {
      res.write('c');
      next();
    });

    app.use('/hello', function (req, res) {
      res.end('hello');
    });

    app.use('/goodbye', function (req, res) {
      res.end('goodbye');
    });

    app.use(function (req, res) {
      res.end('end');
    });


var server = app.listen(app.get('port'), function() {
	console.log('Server up: http://localhost:' + app.get('port'));
});