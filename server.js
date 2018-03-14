//Dependencies
// =======================================================
const express = require('express');
const bodyParse = require('body-parser');

//Set up the Express App
// =======================================================
const app = express();
const PORT = process.env.PORT || 3000;

//Set up the Express App to handle data parsing

//parse application/x-www-form-urlencoded
app.use(bodyParse.urlencoded({ extended: true }));
//parse application/json
app.use(bodyParse.json());

//Static directory
// app.use('app/public');

//Routes
// =======================================================
require('./app/routes/api-routes.js')(app);
require('./app/routes/html-routes.js')(app);

//starts the server to begin listening
// =======================================================
app.listen(PORT, function() {
	console.log('App listening on PORT ' + PORT);
});