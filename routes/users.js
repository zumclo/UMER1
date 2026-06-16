var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/umer', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/s', function(req, res, next) {
  res.send("not sada route")
});
module.exports = router;
