var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

var bookController = function(bookService, navigation){

    //Midleware
    var middleware = function(req, res, next){
  			if(!req.user){ return res.redirect('/'); }
  			next();
  	};

    //GetIndex
    var getIndex = function(req, res){

			var url = 'mongodb://localhost:27017/libraryApp';

      var dbConnectCallback = function(err, db){

					var collection = db.collection('books');

					collection.find({}).toArray(
						function(err, results){

								res.render('bookListView', { title:'Books', nav: navigation, books: results});
								db.close();
					});
			};

			mongodb.connect(url, dbConnectCallback);

		};

    //getById
    var getById = function (req, res) {

	    var id = new objectId(req.params.id);

			var url = 'mongodb://localhost:27017/libraryApp';

      var dbConnectCallback = function(err, db){

					var collection = db.collection('books');

          var findOneCallback = function(err, results){

              var render = function(){
                  render('bookView', { title:'Books', nav: navigation, book: results });
              };

              var findBook = function(){

                  bookService.getBookbyId(results.bookId,
                    function(err, book){
                      results.book = book;
                      render();
                    }
                  );
              };

              (results.bookId) ? findBook() : render();

              db.close();
        };

          collection.findOne({_id: id}, findOneCallback);
			}

			mongodb.connect(url, dbConnectCallback);
		};

    return {
        getIndex : getIndex,
        getById: getById,
        middleware: middleware
    };
};

module.exports = bookController;
