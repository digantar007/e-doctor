var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
    res.render('viewPatient', { title: 'Add New Patient' });
});







module.exports = router;