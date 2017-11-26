var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('patient',{title:'Patient Module'});
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
        res.render('patientlist', {
            "doctorList" : docs
        });
         console.log('here is the patient',docs);
    });
     // collection.find({
    //     "p_name" : patientName,
    //     "password" : password,
    // }, function (err, doc) {
    //     if (err) {
    //         // If it failed, return error
    //         res.send("There was a problem adding the information to the database.");
    //     }
    //     else {
    //         // And forward to success page
    //         res.render('patientlist', { title: 'Login Patient' },{
    //             'patientData' : doc
    //         });
    //     }
    // });
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

router.get('/registerPatient', function(req, res) {
    res.render('newpatient', { title: 'Add New Patient' });
});


/* POST to Add User Service */
router.post('/addp', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var patientName = req.body.pname;
    var patientAge = req.body.page;
    var patientGen =req.body.pgender;

    // Set our collection
    var collection = db.get('patient');

    // Submit to the DB
    collection.insert({
        "p_name" : patientName,
        "age" : patientAge,
        "gender":patientGen
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("list");
        }
    });
});


/* GET Userlist page. */
router.get('/list', function(req, res) {
    var db = req.db;
    var collection = db.get('patient');
    collection.find({},{},function(e,docs){
        res.render('loginPatient', {
            "patientlist" : docs
        });
    });
});



/* GET Userlist page. */
router.get('/dlist', function(req, res) {
    var db = req.db;
    var collection = db.get('doctor');
    console.log('here is the doctor');
    collection.find({},{},function(e,docs){
        console.log('here is the doctor');
        res.render('doctorlist', {
            "doctorlist" : docs
        });
         console.log('here is the doctor',docs);
    });
});


/* Book Appointment. */
router.get('/appointment', function(req, res) {
    res.render('appoint', { title: 'Select One Slot' });
});

/* Bill */
router.get('/bill', function(req, res) {
    res.render('bill', { title: 'Your Bill Is 5000rs' });
});



module.exports = router;