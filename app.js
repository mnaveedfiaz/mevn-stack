// importing modules
const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
const db             = require('./config/db');

const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect("mongodb://127.0.0.1:27017/contactsDb",{ useNewUrlParser: true }, (err, database) => {
  if (err) return console.log(err)
  console.log("Connected to mongodb");	
  require('./app/routes')(app, database);
	
	app.listen(port, ()=>{
		console.log("Server started at port:"+port);
	});
});

