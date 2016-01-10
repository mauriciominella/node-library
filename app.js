//modules
var express = require('express');
var app = express();

var port = process.env.PORT || 5000;

var navigation = [{Link:'/Books', Text: 'Book'},{Link:'/Authors', Text:'Author'}]

var bookRouter = require('./src/routes/bookRoutes')(navigation);

//express setup
app.use(express.static('public'));
app.use(express.static('src/views'));
app.set('views', './src/views');
var handlebars = require('express-handlebars');
app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');

//routes
app.use('/Books', bookRouter);

app.get('/', function(req, res){
	res.render('index', {	title: 'Home', nav: navigation });
});

//starting the server
app.listen(5000, function(err){
	console.log('running server on port ' + port);
});
