/* jshint esversion: 6 */

const express = require('express');
const hbs = require('hbs');

var app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');
app.use(express.static(__dirname));
app.use(express.static(__dirname + '/sources'));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/styles'));

app.get('/', (req, res) => {
	res.render('index.hbs');
});

app.listen(port, () => {
	console.log(`Server is up on port ${port}`);
});