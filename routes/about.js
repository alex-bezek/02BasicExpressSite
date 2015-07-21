var express = require('express');
var router = express.Router();

/* GET home page. */
//the '/' here is because its in its own route file. If it was in index.js it would be removed
router.get('/', function(req, res, next) {
  res.render('About', { title: 'About' });
});

module.exports = router;
