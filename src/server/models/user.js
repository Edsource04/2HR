var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {type: String, required: true, index: { unique: true}},
	password: {type: String, required: true},
	role: { type: String, required: true, default: 'user'},
	registerDate: {type: Date, default: Date.now},
	profile: {type: Schema.ObjectId, ref: "Profile"}
});

userSchema.pre('save', function(next){
   var user = this;
   
   if(!user.isModified('password')) return next();
   
   //generate salt
   bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
       if(err) return next(err);
	   
	   bcrypt.hash(user.password, salt, function(err, hash){
	      if(err) return next(err);
		  
		  //override the password with the new one.
		  user.password = hash;
		  next();
	   });
   });
});

userSchema.methods.comparePassword = function(inputPassword, callback){
  bcrypt.compare(inputPassword, this.password, function(err, isMatch){
     if (err) return callback(err);
	 callback(null, isMatch);
  });
};

var user = mongoose.model('User', userSchema);

module.exports = user;





