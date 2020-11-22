var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function (req, res, next) {
  const {
    query: { id },
  } = req;

  if (id == 1) {
    res.json({ mag: 'Auth login' });
  } else {
    next();
  }
});
router.get('/forgetPwd', function (req, res, next) {
  res.json({ msg: 'Forget password' });
});

module.exports = router;
