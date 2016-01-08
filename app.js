var express = require('express');

var app = express();

app.use(express.static('public'));
app.use(express.static('src/views'));
app.set('views', './src/views');
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
	res.render('index');
});

app.get('/books', function(req, res){
	res.send('Hello Books');
});

var port = 5000;
app.listen(5000, function(err){
	console.log('running server on port ' + port);
});
