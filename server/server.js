const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
        // send an object instead of an array for flexibility and the option
        // to add a custom status code or another property
    }, (error) => {
        res.status(400).send(error);
    });
});

var port = 3000;
app.listen(3000, () => {
    console.log(`Server started on port: ${port}`);
});

module.exports = {app};