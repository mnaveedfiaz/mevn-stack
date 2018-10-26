module.exports = function(app, db) {
	app.post('/contacts', (req, res) => {
	  console.log(req.body)
	  res.send('Hello')
  });
  app.get('/contacts', (req, res) => {
	  res.send('Hello')
  });
};