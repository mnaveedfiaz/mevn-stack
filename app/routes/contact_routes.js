module.exports = function(app, db) {
	
	var ObjectID = require('mongodb').ObjectID;

	app.post('/contacts', (req, res) => {
	  const contact = { text: req.body.body, title: req.body.title };
    db.collection('contacts').insertOne(contact, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result.ops[0]);
      }
    });
  });
  
  app.get('/contacts/:id', (req, res) => {
  	const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('contacts').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    });
  });

  app.delete('/contacts/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('contacts').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send('Contact with id ' + id + ' deleted successfully!');
      } 
    });
  });

  app.put('/contacts/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const note = { text: req.body.body, title: req.body.title };
    db.collection('contacts').update(details, note, (err, result) => {
      if (err) {
          res.send({'error':'An error has occurred'});
      } else {
          res.send(note);
      } 
    });
  });

};