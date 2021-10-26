var express = require('express');
var router = webby.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Vamshi Krishna Thirunagari' });
});

module.exports = router;
