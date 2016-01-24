var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//Route to register
router.get('/register', function(req, res, next) {
  res.render('register',{
		'title': 'Register'
	});
});

//Route to login
router.get('/login', function(req, res, next) {
  res.render('login',{
		'title': 'Login'
	});
});


module.exports = router;
