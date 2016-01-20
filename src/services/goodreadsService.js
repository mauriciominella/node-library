var http = require('http');
var xml2js = require('xml2js');
var parser = xml2js.Parser({explicitArray: false});

var goodreadsService = function(){

    var getBookbyId = function(id, cb){

        var options = {
            host: 'www.goodreads.com',
            path: '/book/show/50?format=xml&key=bX4QAhJfiEp8G6yE8RW7w'
        };

        var httpCallback = function(response){

        };

        cb(null, { description: 'Book description here!'});

        http.request(options, callback).end();
    };

    return {
        getBookbyId: getBookbyId
    }
};

module.exports = goodreadsService;
