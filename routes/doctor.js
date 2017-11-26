var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('doctor', { title: 'doctor' });
});


router.post('/login', function(req, res, next) {
  console.log(req.body)
    var db = req.db;
    var doctorName = req.body.dname;
    var doctorPassword = req.body.doctorPassword;
    console.log("doctor name:",doctorName)
    console.log("my password",doctorPassword)
    if (doctorName == 'shiva' && doctorPassword == 'shiva') 
    	{
    		var collection = db.get('patient');
		    collection.find({},{},function(e,docs){
		        res.render('doctorDashboard', {
		            "patientlist" : docs,
		            "doctorName" : doctorName
		        });
		    });

    	} else {
    		res.render('error.hbs' , {message : 'Your id or password is not correct'})

    	}
 
    
});


module.exports = router;
