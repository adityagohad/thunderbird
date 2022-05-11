const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const res = require('express/lib/response');
const { exercises } = require('../public/data/data');

//const uri = 'mongodb://0.0.0.0:27017';
const uri = "mongodb+srv://adityagohad:xyzzyspoonS1@cluster0.u2lym.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const dbName = 'thunderbird';

const initDB = function (callback) {
    MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
        assert.equal(null, err);
        const db = client.db(dbName);
        callback(db, client);
    });
}

const insertDocuments = function (db, data, callback) {
    const collection = db.collection('user');
    collection.insertOne(data, function (err, result) {
        callback(result);
    });
};

const updateDocuments = function (db, data, callback) {
    const collection = db.collection('user');
    collection.updateOne({ email : data.email},
        { $set: { exercises: data.exercises } },
        { upsert: true }, function (err, result) {
        callback(result);
    });
};

//updateUser("adad@sefe", 2);
//addUser("adityagohad@gmail.com");

function addUser(user){
    initDB(function (db, client) {
        insertDocuments(db, user, function () {
            client.close()
        });
    });
}

function updateUser(email, exerciseId){
    initDB(function (db, client){
        const user = db.collection('user');
        user.findOne({email : email}, function(err, result){
            assert.equal(err, null);
            if(result != null){
                var att = result.exercises.find(exercise => exercise.id == exerciseId);
                if(att == undefined){
                    result.exercises.push({
                        id : exerciseId,
                        attempt : 1
                    });
                    var updateData = {
                        email : result.email,
                        exercises : result.exercises
                    };
                    updateDocuments(db, updateData, function () {
                        client.close()
                    });
                }else{
                    result.exercises.forEach(element => {
                        if(element.id == exerciseId){
                            element.attempt = element.attempt + 1;
                        }
                    });
                    var updateData = {
                        email : result.email,
                        exercises : result.exercises
                    };
                    updateDocuments(db, updateData, function () {
                        client.close()
                    });
                }
            }else{
                console.log(3);
                addUser({
                    email : email,
                    exercises : [
                        {
                            id : exerciseId,
                            attempt : 1
                        }
                    ]
                });
                client.close();
            }
        });
    });
}

module.exports = { updateUser }