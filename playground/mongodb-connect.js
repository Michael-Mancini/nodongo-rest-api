// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //object destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('ERROR unable to connect to mongo');
    }
    console.log('~~~ MongoDB :) ~~~');

    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Weebly Wop',
    //     completed: false
    // }, (err, res) => {
    //     if (err) {
    //         return console.log('Insertion failed', err);
    //     }
    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Michael', 
    //     age: 12,
    //     location: 'Earth'
    // }, (err, res) => {
    //     if (err) {
    //         return console.log('Insertion to Users failed', err);
    //     }
    //     console.log(res.ops[0]._id.getTimestamp());
    // });

    client.close();
});