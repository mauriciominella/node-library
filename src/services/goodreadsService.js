var http = require('http');
var xml2js = require('xml2js');
var parser = xml2js.Parser({explicitArray: false});

var goodreadsService = function(){

    var getBookbyId = function(id, cb){

        var options = {
            host: 'www.goodreads.com',
            path: '/book/show/' + id + '?format=xml&key=bX4QAhJfiEp8G6yE8RW7w'
        };

        var httpCallback = function(response){
            var str = '';

            response.on('data', function(chunk){
                str += chunk;
            });

            response.on('end', function () {
                console.log(str);
                parser.parseString(str,
                  function(err, jsonDocument){
                    cb(null, jsonDocument.GoodreadsResponse.book);
                });
            });
        };

        http.request(options, httpCallback).end();
    };

    return {
        getBookbyId: getBookbyId
    };
};

module.exports = goodreadsService;
