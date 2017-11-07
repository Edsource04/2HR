const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const app = express();

//api 
const api = require('./routes/api');

//use body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//use cors
app.use(cors());
//api location
app.use('/api', api);

//set the port for server
const port = process.env.port || 3000;

//set the server to listen
const server = http.createServer(app);

server.listen(port, ()=> {
    console.log('Server running on port: '+port);
});