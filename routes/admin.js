var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('adminHome',{title:'Patient Module'});
});


router.post('/login',function(req,res,next){

    console.log(req.body)
    console.log(req.body)
    var db = req.db;
    console.log("here is doctor")
    // Get our form values. These rely on the "name" attributes
    var collection = db.get('doctor');
    collection.find({},{},function(e,docs){
        console.log('here is the login');
        res.render('viewDoctor', {
            "doctorList" : docs
        });
         console.log('here is the patient',docs);
    });
    
});

router.post('/', function(req, res) {
    console.log("hello data")
    console.log(req.body)

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var patientName = req.body.pname;
    var patientAge = req.body.age;
    var patientMobile =req.body.pmobile;
    var password = req.body.patientPassword;
    var cpassword = req.body.cpatientPassword;

    // Set our collection
    var collection = db.get('patient');

    // Submit to the DB
    collection.insert({
        "p_name" : patientName,
        "age" : patientAge,
        "mobile":patientMobile,
        "password" : password,
        "cpassword" : cpassword
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.render('patient', { title: 'Login Patient' });
        }
    });
});











module.exports = router;