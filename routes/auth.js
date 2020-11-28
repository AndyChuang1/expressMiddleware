var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function (req, res, next) {
  res.json({ mag: 'Auth login' });
});
router.get('/forgetPwd', function (req, res, next) {
  res.json({ msg: 'Forget password' });
});

module.exports = router;
