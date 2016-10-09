var express = require('express');
var app = express();

app.get('/index', function(req, res) {
	res.send('Hello World!');
});


app.get('/products', function(req, res) {
	var emptyArray = [];
	res.json(emptyArray);
})

app.listen(3000, function() {
	console.log('Example app listening on port 3000!');
});