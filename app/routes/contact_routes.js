module.exports = function(app, db) {
	app.post('/contacts', (req, res) => {
	  const note = { text: req.body.body, title: req.body.title };
    db.collection('contacts').insert(note, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result.ops[0]);
      }
    });
  });
  app.get('/contacts', (req, res) => {
	  res.send('Hello')
  });
};