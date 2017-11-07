var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var rel = require('mongoose-relationship');

var schoolSchema = new Schema(
  {
    schoolName: {type: String},
	dateFrom: {type: Date},
	dateTo: {type: Date},
	gradeObtained: {type: String},
	profile: {type: Schema.ObjectId, ref: 'Profile', childPath: 'educations'}
  }
);

schoolSchema.plugin(rel, { relationshipPathName: 'profile'});

var education = mongoose.model('Education', schoolSchema);

module.exports = education;

//http://mongoosejs.com/docs/populate.html
//url to get data from relationship.