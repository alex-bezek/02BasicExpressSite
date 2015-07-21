var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

// Show Contact Form
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send', function(req, res, next){
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'my personal email',
			pass: 'my personal password'
		}
	});

	var mailOptions = {
		from: 'From Email',
		to: 'To email',
		subject: 'NodeJS express test website',
		text: 'You have a new submission with the following details...\nName: ' + req.body.name + '\nEmail: ' + req.body.email + '\nMessage: ' + req.body.message, 
		html: '<p>This is my new submission from my Nodejs and Express test website</p><ul><li>Name: ' +  req.body.name+ '</li><li>Email: ' + req.body.email + '</li><li>Message: ' + req.body.message + '</li></ul>'
	};

	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			console.log(error);
		} else {
			console.log('Message Sent: ' + info.response);
		}
		res.redirect('/');
	});
});

module.exports = router;