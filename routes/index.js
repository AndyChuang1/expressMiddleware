var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function (req, res, next) {
  const {
    query: { id },
  } = req;

  if (id == 1) {
    res.json({ mag: 'login test' });
  } else {
    next();
  }
});

module.exports = router;
