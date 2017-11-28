//Api user
var express = require('express');
var jwt = require('jsonwebtoken');
var User = require('../models/user');
var Education = require('../models/education');
var Language = require('../models/language');
var Profile = require('../models/profile');
var Skill = require('../models/skill');
var WorkExperience = require('../models/work-experience');
var ObjectID = require('mongodb').ObjectID;
var multer = require('multer');  // require multer to handle image upload
var MulterConfig = require('../config/multer-config');
var fs = require('fs');
var path = require('path');

 var router = express.Router();

 function verifyToken(req, res, next){
   const bearerHeader = req.headers["authorization"];
   if(typeof bearerHeader !== 'undefined'){
      const bearer = bearerHeader.split(" ");
	  const bearerToken = bearer[1];
	  req.token = bearerToken;
	  next();
   }else{
      res.sendStatus(403);
   }
 };



 router.get('/users', verifyToken, (req, res) => {
    jwt.verify(req.token, 'edsource_secret', function(err, data){
		console.log(data);
	   if(err){
	      throw err;
	   }
	   User.find((err, users) => {

		if (err){
			throw err;
		}
		return res.json(users);
	   });
	});
 });

 router.post('/register', function(req, res, next){
     var v_user = User.findOne({username: req.body.username}, (err, user)=>{
	     if(err){
		    return res.json(err);
		 }
		 else if(!user)
		 {
		      var user = new User(
					 {
					 username: req.body.username,
					 password: req.body.password,
					 role: req.body.role || 'user'
					 }
				 );
			 user.save((err, user) =>{
			      if(err){
				     throw err;
				  }
				var token = jwt.sign({user: user}, 'edsource_secret');
				return res.status(200).json({user: user, token: token});
			 });
		 }else
		 {
		    return res.status(400).json({});
		 }
	 });
  });

  router.post('/user/profile', verifyToken, (req, res) =>{
	jwt.verify(req.token, 'edsource_secret', function(err, data){
		if(err) return res.json(err);
		
		var userSchema = User.findOne({_id: ObjectID(data.user._id)}, (err, user) =>{
			if(err){
				 throw err;
			}
			//creation of profile
			var profile = new Profile({
				fullname: req.body.fullname,
				currentPosition: req.body.currentPosition,
				address: req.body.address,
				email: user.username,
				telephone: req.body.telephone,
				cellphone: req.body.cellphone,
				imgSrc: req.body.imgSrc,
				user: user._id});
			profile.save();
			
			//creation of skills
			for(var i = 0; i < req.body.skills.length; i++){
				var skill = new Skill({
					name: req.body.skills[i].name,
					percentage: parseInt(req.body.skills[i].percentage),
					profile: profile._id
				});
				skill.save();
				profile.skills.push(skill);
			
			}

			//creation of languages
			for(var i = 0; i < req.body.languages.length; i++){
				var language = new Language({
					languageName: req.body.languages[i].languageName,
					percentage: parseInt(req.body.languages[i].percentage),
					profile: profile._id
				});

				language.save();
				profile.languages.push(language);
			}

			//creation of work-experience
			for(var i = 0; i < req.body.workExperiences.length; i++){
				var wExp = new WorkExperience({
					name: req.body.workExperiences[i].name,
					location: req.body.workExperiences[i].location,
					dateFrom: req.body.workExperiences[i].dateFrom,
					dateTo: req.body.workExperiences[i].dateTo,
					isCurrent: req.body.workExperiences[i].isCurrent,
					description: req.body.workExperiences[i].description,
					profile: profile._id
				});
                  wExp.save();
				  profile.workExperiences.push(wExp);
			}

			//creation of education

            for(var index = 0; index < req.body.educations.length; index++){
				var edu = new Education({
					schoolName: req.body.educations[index].schoolName,
					dateFrom: req.body.educations[index].dateFrom,
					dateTo: req.body.educations[index].dateTo,
					gradeObtained: req.body.educations[index].gradeObtained,
					profile: profile._id
				});
				edu.save();
				profile.educations.push(edu);
			}

			profile.save((err, doc)=>{
				if(err) return res.status(500).json(err);
				
		       return res.status(201).json(doc);
			   
			});

		});
	  });
  });

  router.get('/user/profile/:id', verifyToken, (req, res) =>{
        jwt.verify(req.token, 'edsource_secret', (err, data) =>{
			if(err) throw err;

			Profile.findOne({user: ObjectID(req.params.id)})
	            .populate('user')
				.populate('skills')
				.populate('languages')
				.populate('workExperiences')
				.populate('educations')
				.exec( function(err, profilePop){
					if(err) throw err;
				}).then((doc)=>{
					return res.status(200).json(doc);
				});
		});
	 });
	 
	 router.get('/user/profiles', verifyToken, (req, res) =>{
        jwt.verify(req.token, 'edsource_secret', (err, data) =>{
			if(err) throw err;

			Profile.find()
	            .populate('user')
				.populate('skills')
				.populate('languages')
				.populate('workExperiences')
				.populate('educations')
				.exec( function(err, profilePop){
					if(err) throw err;
				}).then((doc)=>{
					return res.status(200).json(doc);
				});
		});
	 });
	 
	 router.post('/profile/upload',verifyToken, multer(MulterConfig).single('imgSrc'), function(req, res){
					 jwt.verify(req.token, 'edsource_secret', (err, data) => {
                        
						if(err) throw err;
						
		               if(req.file){
						   
					   req.body.imgSrc = req.file.filename;
                      }
				   
					const profileSchema = new Profile({
						fullname: req.body.fullname,
						currentPosition: req.body.currentPosition,
						address: req.body.address,
						email: req.body.email,
						telephone: req.body.telephone,
						cellphone: req.body.cellphone,
						imgSrc: req.body.imgSrc,
						user: data.user._id
					}).save();
				   
					profileSchema.then((err, doc) => {
						 if(err){
										 return res.status(500).json(err);
									 }
									
									 return res.status(201).json(doc);
					});
				});  
  });

  router.post('/loadPicture', verifyToken, multer(MulterConfig).single('imgSrc'), (req, res) =>{
	  jwt.verify(req.token, 'edsource_secret', (err, data) =>{
                  if(err){
					  throw err;
				  }
				  
                   if(req.file){
					   Profile.findById({_id: ObjectID(req.body.profile)}, (err, profile)=>{
                               if(err){
								   res.status(500).send(err);
							   }
							   if(profile.imgSrc){
								   console.log(path.join(__dirname,'..','..', profile.imgSrc));
								   fs.unlink(path.join(__dirname,'..','..', profile.imgSrc), (err) =>{
											if(err){
												throw err;
											}
										
								   });

								   var _imgSrc = path.join('assets/profiles', req.file.filename);
								   profile.imgSrc = _imgSrc;
								   profile.save((err, doc) => {
									if(err){
										res.status(500).send(err);
									}
									res.status(201).send({userPicture: _imgSrc});
								   });
							   }
							   else{
								        var _imgSrc = path.join('assets/profiles', req.file.filename);
										profile.imgSrc = _imgSrc;
										profile.save((err, doc) => {
										 if(err){
											 res.status(500).send(err);
										 }
										 res.status(201).send({userPicture: _imgSrc});
										});
							   }
							   
					   });
				   }
				   else{
					   res.status(500).send({error: 'No se mando ninguna Foto'});
				   }
						});
				  
	  });
  


module.exports = router;