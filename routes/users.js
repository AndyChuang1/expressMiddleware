var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/getall', function (req, res, next) {
  console.log(req.token);
  res.send(req.token);
});

module.exports = router;
