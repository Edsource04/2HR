var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var rel = require('mongoose-relationship');

var profileSchema = new Schema({
    fullname: {type: String},
	currentPosition: {type: String},
	address: {type: String},
	email: {type: String},
	telephone: {type: String},
	cellphone: {type: String},
	imgSrc: {type: String},
	user: { type: Schema.ObjectId, ref: "User", childPath: "profile"},
	skills: [{type: Schema.ObjectId, ref: "Skill"}],
	languages: [{type: Schema.ObjectId, ref: "Language"}],
	workExperiences: [{type: Schema.ObjectId, ref: "WorkExperience"}],
	educations: [{type: Schema.ObjectId, ref: "Education"}]
});

profileSchema.plugin(rel, { relationshipPathName: 'user'});

var profile = mongoose.model('Profile', profileSchema);

module.exports = profile;

