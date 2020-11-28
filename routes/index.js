var express = require('express');
var router = express.Router();
var userRouter = require('./users');
var authRouter = require('./auth');
const RoutersConfig = require('config').get('routers');
const routeSet = new Set(RoutersConfig.map((each) => each.route));

router.use('/api', (req, res, next) => {
  const { originalUrl } = req;
  if (routeSet.has(originalUrl)) {
    next();
  } else {
    return res.status(401).json({ msg: 'Not allow' });
  }
});

router.use('/api/users', userRouter);
router.use('/api/auth', authRouter);

module.exports = router;
