var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('doctor', { title: 'doctor' });
});


router.post('/login', function(req, res, next) {
  console.log(req.body)
    var db = req.db;
    console.log("here is doctor")
    // Get our form values. These rely on the "name" attributes
    var collection = db.get('patient');
    collection.find({},{},function(e,docs){
        console.log('here is the login');
        res.render('doctorDashboard', {
            "patientlist" : docs
        });
         console.log('here is the patient',docs);
    });
});


module.exports = router;
