var express = require('express');
var app = express();

app.get('/', function(req, res, next){
	res.send("Hello World!");
});

if(require.main === module){
	app.listen(3001);
}

module.exports = app;