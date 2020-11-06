const http = require('http');
const express = require('express');
const {port} = require('../config');
const recipesRouter = require('./routes/recipes');

const app = express();
app.use(express.json());

app.use('/recipes', recipesRouter);

app.use('/', function (req, res) {
    res.send('An API for browsing and adding recipes');
});

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})