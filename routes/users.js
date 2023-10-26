var express = require('express');
var router = express.Router();
// Initializing the variables
var sum = 0;
var more = 0;
// Defining the router
router.get('/', function(req, res, next) {
  more += 1;
  // Adding 'more' to 'sum'
  sum += more;
  res.send(`Sum is: ${sum}`);
});

module.exports = router;
