const http = require('http');
const express = require('express');
const {port, url} = require('./config/config');
const recipesRouter = require('./routes/recipes');
const moongoose = require("mongoose");

moongoose.Promise = global.Promise;
moongoose
    .connect(url)
    .then(() => {
        console.log("successfully connected to the database");
    })
    .catch(() => {
        console.log("unable to connect to the database  Exiting now..");
        process.exit();
    });

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

module.exports = app;