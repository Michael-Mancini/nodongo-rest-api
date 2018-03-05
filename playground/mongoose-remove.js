const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove()
Todo.findOneAndRemove({_id: '5a9c7d46083307719ee80e01'}).then((todo) => {

});

// Todo.findByIdAndRemove()

Todo.findByIdAndRemove('5a9c7d46083307719ee80e01').then((todo) => {
    console.log(todo);
});