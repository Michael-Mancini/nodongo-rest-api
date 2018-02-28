const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('ERROR unable to connect to mongo');
    }
    console.log('~~~ MongoDB :) ~~~');

    const db = client.db('TodoApp');

    // deleteMany
    // db.collection('Todos').deleteMany({text: "Eat lunch"}).then((res) => {
    //     console.log(res);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: "identical"}).then((res) => {
    //     console.log(res);
    // });

    // findOneAndDelete - deletes doc and returns object
    // db.collection('Todos').findOneAndDelete({completed: false}).then((doc) => {
    //     console.log(doc);
    // });

    // challenge - find duplicates and delete all but one

    var duplicates = [];

    db.collection('Users').find().toArray().then((res, err) => {

        for(i = 0; i < res.length; i++){
            var temp = {
                name: res[i].name,
                count: 0
            };
            for(sec = 0; sec < res.length; sec++){
                if (temp.name === res[sec].name) {
                    temp.count++;
                }
            }
            if (temp.count > 1 && duplicates.indexOf(temp) < 0) {
                console.log('logged');
                console.log(duplicates.indexOf(temp));
                duplicates.push(temp);
                console.log(duplicates.indexOf(temp));
            } else if (temp.count > 1) {
                console.log('added');
                console.log(duplicates.indexOf(temp));
            }
        }

        console.log(duplicates);

        // for(x = 0; x < duplicates.length; x++){
        //     for(y = 0; y < duplicates[x].count - 1; y++){
        //         console.log(duplicates[x]);
        //         // db.collection('Users').deleteOne({name: duplicates[x].name}).then((res) => {
        //         //     console.log(res);
        //         // }, (err) => {
        //         //     console.log('ERROR');
        //         // });
        //     }
        // }


    }, (err) => {
        console.log('ERROR BITCH');
    });



    client.close();
});