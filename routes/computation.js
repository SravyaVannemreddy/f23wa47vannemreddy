var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
 if(req.query.x==undefined) {
    sqaureroot = Math.random();
 } 
 else {
    sqaureroot = req.query.x;
 }
 var result = Math.sqrt(sqaureroot);
  res.render('computation', { Additional: `Math.sqrt(${sqaureroot}) is ${result}` });
});

module.exports = router;