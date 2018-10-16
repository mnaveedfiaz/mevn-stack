var express = require('express');
var router = express.Router();

const Contact = require('../model/contacts');

router.get('/contacts', (req, res, next)=>{
	Contact.find(err, contacts){
		res.json(contacts);
	}
});

router.post('/contact', (req, res, next)=>{
	let newContact = new Contact({
		first_name = req.body.first_name;
		last_name = req.body.last_name;
		phone = req.body.phone;
	});
	newContact.save((err, contact)=>{
		if(err){
			console.log("Error saving contact");
		}else{
			console.log("saved successfully");
		}
	});
});

router.delete('/contact/:id', (req, res, next)=>{
	// delete
});

module.exports = router ;