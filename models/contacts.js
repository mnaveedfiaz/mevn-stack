const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
	first_name:{
		type: string,
		required:true
	},
	last_name:{
		type: string,
		required:true
	},
	phone:{
		type: string,
		required:true
	}
})

const Contact = module.exports(Contact, contactSchema);