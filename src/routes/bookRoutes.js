var express = require('express');
var bookRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;


var router = function(navigation){

	var bookService = require('../services/goodreadsService')();
	var bookController = require('../controllers/bookController')(bookService, navigation);

	bookRouter.use(bookController.middleware);

	bookRouter.route('/')
		.get(bookController.getIndex);

	bookRouter.route('/:id')
		.get(bookController.getById);

		return bookRouter;
};

module.exports = router;
