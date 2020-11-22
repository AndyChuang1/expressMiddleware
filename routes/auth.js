var express = require('express');
var router = express.Router();
var defaultRouter = require('./default');

/* GET users listing. */
router.use('/default', defaultRouter);

router.use('/default', (req, res, next) => {
  req.token = 'add token here';
  next();
});
router.get('/default/token', (req, res, next) => {
  res.json({ msg: req.token });
});
module.exports = router;
