var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/getall', function (req, res, next) {
  res.send('Get All api');
});

module.exports = router;
