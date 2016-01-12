var express = require('express');

var adminRouter = express.Router();

var router = function(navigation){

  adminRouter.route('/addBooks')
    .get(function (req, res) {
      

      res.send('inserting books');
    });

  return adminRouter;
}

module.exports = router;
