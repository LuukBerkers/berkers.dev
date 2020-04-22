var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // The regex removes the trailing slash if there is one.
  // But not here because the path is only a slash
  // req.path.replace(/\/+$/, '')
  res.render('index', { title: 'Express', loc: '/' });
});

module.exports = router;
