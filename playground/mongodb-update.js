const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('ERROR unable to connect to mongo');
    }
    console.log('~~ Mongo :) ~~');

    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a95b06a083307719ee805de')
    // }, {
    //     $set: {
    //         text: 'found and updated'
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((res) => {
    //     console.log(res);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a95b1f3083307719ee8060e')
    }, {
        $set: {
            name: 'Penisfacehead'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res.lastErrorObject);
        console.log(JSON.stringify(res.value, undefined, 2));
    });

    client.close();
});