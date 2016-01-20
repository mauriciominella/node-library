var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

var bookController = function(bookService, navigation){

    var middleware = function(req, res, next){
  			/*if(!req.user){
  					return res.redirect('/');
  			}*/
  			next();
  	};

    var getIndex = function(req, res){

			var url = 'mongodb://localhost:27017/libraryApp';

			mongodb.connect(url, function(err, db){
					var collection = db.collection('books');

					collection.find({}).toArray(
						function(err, results){
								res.render('bookListView',
																			{
																			 title:'Books',
																			 nav: navigation,
																			 books: results
																		 });
								db.close();
					});

			});
		};

    var getById = function (req, res) {

	    var id = new objectId(req.params.id);

			var url = 'mongodb://localhost:27017/libraryApp';

			mongodb.connect(url, function(err, db){
					var collection = db.collection('books');

					collection.findOne({_id: id},
						function(err, results){

                bookService.getBookbyId(results.bookId,
                    function(err, book){

                      results.book = book;

                      res.render('bookView',
      																			{
      																			 title:'Books',
      																			 nav: navigation,
      																			 book: results
      																		 });
                    }
                );


								db.close();
					});

			});
		};

    return {
        getIndex : getIndex,
        getById: getById,
        middleware: middleware
    };
};

module.exports = bookController;
//https://www.goodreads.com/book/show/50?format=xml&key=bX4QAhJfiEp8G6yE8RW7w
