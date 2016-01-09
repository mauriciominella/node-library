//modules
var express = require('express');
var app = express();

var port = process.env.PORT || 5000;

var bookRouter = express.Router();

//express setup
app.use(express.static('public'));
app.use(express.static('src/views'));
app.set('views', './src/views');
var handlebars = require('express-handlebars');
app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');

//routes
var navigation = [{Link:'/Books', Text: 'Books'},{Link:'/Authors', Text:'Authors'}]

var books = [
	{
		title: 'War and Peace',
		genre: 'Historical Fiction',
		author: 'Lev Nikolayevich Tolstoy',
		read: false
	},
	{
		title: 'Les Misérable',
		genre: 'Historical Fiction',
		author: 'Cool Author',
		read: false
	},
	{
		title: 'Other Book',
		genre: 'Other Book Genre',
		author: 'Other Book Author',
		read: false
	}
];
bookRouter.route('/')
	.get(function(req, res){
		res.render('books', {title:'Books', nav: navigation, books: books });
	});

bookRouter.route('/single')
	.get(function (req, res) {
		res.send('Hello Single Book');
	});

app.use('/Books', bookRouter)

app.get('/', function(req, res){
	res.render('index', {	title: 'Home', nav: navigation });
});

//starting the server
app.listen(5000, function(err){
	console.log('running server on port ' + port);
});
