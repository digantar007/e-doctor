var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
    res.render('loginPatient', { title: 'Add New Patient' });
});







module.exports = router;