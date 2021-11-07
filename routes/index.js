var express = require('express');
var router = express.Router();
var queue_controller =require('../Controllers/job');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
