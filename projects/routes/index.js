var express = require('express'),
    mongoose = require('mongoose');
var router = express.Router();
    


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
