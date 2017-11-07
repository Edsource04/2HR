var mongoose = require('mongoose');
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');

var apiRoutes = require('./routes/userRouter');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/hhrrdb', { useMongoClient: true});
var db = mongoose.connection;

db.on('err', console.error.bind(console, 'Error en la conexion: '));
db.on('open', function(){
 console.log('Conectado a la Base de datos');
});

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//cors
app.use(cors());

app.use(expressJWT({ secret: 'edsource_secret'}).unless({ path: ['/user/login', '/api/users', '/api/register']}));

var User = require('./models/user');

app.post('/user/login', function(req, res){
    if(!req.body.username){
	    res.status(400).send('Username Required');
		return;
	}
	if(!req.body.password){
	   res.status(400).send('Password Required');
	   return;
	}
	User.findOne({username: req.body.username}, function(err, user){
	    user.comparePassword(req.body.password, function(err, isMatch){
		   if(err) throw err;
		   if(!isMatch){
		      res.status(401).send('Invalid Password');
		   }else{
		       var token = jwt.sign({user: user}, 'edsource_secret');
		       res.status(200).json({user: user, token: token});
		   }
		});
	});
});

app.use('/api', apiRoutes);

app.listen(3000, () =>{
   console.log('Application running @ Port: 3000 with at: ' + __dirname);
});

