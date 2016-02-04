var express = require('express');
var router = express.Router();

var passport = require('passport');
var localStrategy = require('passport-local').Strategy;

var multer = require('multer');
var upload = multer({ 
	dest: './uploads/'
});


var User = require('../models/user');

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

router.post('/register',upload.single('profileimage'),function(req, res, next){
	//Get form values
	var name = req.body.name;
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
	var cpassword = req.body.cpassword;

// //Check for Image Field
	
	if(req.files && req.files.profileimage){
		console.log('Uploading File...');
		
    // File Info
		var profileImageOriginalName = req.files.profileimage.originalname;
    var profileImageName = req.files.profileimage.name;
		var profileImageMime = req.files.profileimage.mimetype;
    var profileImagePath = req.files.profileimage.path;
    var profileImageExt = req.files.profileimage.extension;
    var profileImageSize = req.files.profileimage.size;
	} else {
    // Set a Default Image
		var profileImageName = 'noimage.png';
		console.log('Profile - ',profileImageName);
	}
	//Form Validation - Express Validator
	req.checkBody('name','Name field is requireed').notEmpty();
	req.checkBody('email','Email field is requireed').notEmpty();
	req.checkBody('email','Invalid Email').isEmail();
	req.checkBody('username','UserName is required').notEmpty();
	req.checkBody('cpassword','Passwords do not match').equals(req.body.password);
	req.checkBody('password','Password is required').notEmpty();
	
	
	// Check for Errors
	var errors = req.validationErrors();
	
	if(errors){
		res.render('register',{
			errors: errors,
			name: name,
			email: email,
			username: username,
			password: password,
			cpassword: cpassword
		});	
	}else{
		var newUser = new User({
			name: name,
			email: email,
			username: username,
			password: password,
			profileimage: profileImageName
		});
		
		//Create User
		User.createUser(newUser,function(err, user){
			if(err) throw err;
			console.log(user);
		});
		
		//Success Message
		req.flash('success','You are now registered and may log in');
		res.location('/');
		res.redirect('/');
	}
	
});

//User Login
passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(_id, done) {
  User.getUserById(_id, function(err, user) {
    done(err, user);
  });
});

passport.use(new localStrategy(
	function(username, password, done){
		User.getUserByUsername(username,function(err, user){
			if(err) throw err;
			if(!user){
				console.log('Unknown User');
				return done(null, false,{message: 'Unknown User'});
			}
			
			User.comparePassword(password, user.password, function(isMatch){
				if(isMatch){
					return done(null, user);
				}else{
					console.log('Invalid Password');
					return done(null, false, {message: 'Invalid Password'});
				}
			});
		});
	}
));

router.post('/login',passport.authenticate('local',{failureRedirect:'/users/login',failureFlash:'Invalid Username or Password'}),function(req, res, next){
	console.log('Authentication Successful');
	req.flash('success', 'You are logged in');
	res.redirect('/');
});

router.get('/logout', function(req, res){
	req.logout();
	req.flash('success','You have logged out');
	res.redirect('/users/login');
});

module.exports = router;