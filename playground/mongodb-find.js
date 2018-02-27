// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //object destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('ERROR unable to connect to mongo');
    }
    console.log('~~~ MongoDB :) ~~~');

    const db = client.db('TodoApp');

    // db.collection('Todos').find({_id: new ObjectID('5a95a7c8083307719ee804f0')}).toArray().then((docs) => {
    //     console.log('---Todos---');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('ERROR unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('ERROR unable to fetch todos', err);
    // });

    db.collection('Users').find({name: 'Martin'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('ERROR unable to fetch');
    });

    client.close();
});