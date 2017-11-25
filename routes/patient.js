var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/patient', function(req, res, next) {
  res.render('patient', { title: 'Patient' });
});

module.exports = router;
