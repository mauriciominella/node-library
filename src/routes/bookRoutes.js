var express = require('express');

var bookRouter = express.Router();

var router = function(navigation){

	var books = [
		{
			title: 'War and Peace',
			genre: 'Historical Fiction',
			author: 'Lev Nikolayevich Tolstoy',
			read: false
		},
		{
			title: 'Les Misérables',
			genre: 'Historical Fiction',
			author: 'Cool Author',
			read: false
		},
		{
			title: 'Other Book',
			genre: 'Other Book Genre',
			author: 'Other book author books'
		}
	]

	bookRouter.route('/')
		.get(function(req, res){
			res.render('bookListView', {title:'Books', nav: navigation, books: books });
		});

	bookRouter.route('/:id')
		.get(function (req, res) {
	    var id = req.params.id
			res.render('bookView', {title:'Books', nav: navigation, book: books[id] });
		});

		return bookRouter;
}

module.exports = router;
