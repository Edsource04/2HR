const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

//connect to Database
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/hhrrdb', (err, db) => {
        if(err){
            return console.log(err);
        }
        console.log('Database Connected @ port 27017')
        closure(db);
    });
};

//error handling
const sendError = (req, res) =>{
   response.status = 501;
   response.message = typeof err == 'object' ? err.message : err;
   res.status(501).json(response);
};

//response handling
let response = {
    status: 200,
    data: [],
    message: null
};

//api/login
router.post('/login', (req, res, next) =>{
     connection((db) =>{
         db.collection('users')
           .find({username: req.body.username, password: req.body.password})
           .toArray()
           .then((users) => {
               if(users.length > 0){
                   response.data = users[0];
                   response.status = 200;
                   response.message = users.length + ' Found.';
               }else{
                   response.status = 401;
                   response.message = 'No User Found.'
               }
               res.json(response);
           })
           .catch((err) =>{
               sendError(err, res);
           });
     });
});

module.exports = router;