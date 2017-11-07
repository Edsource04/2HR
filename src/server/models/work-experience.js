var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var rel = require('mongoose-relationship');

var wExpSchema = new Schema(
  {
    name: {type: String},
	location: {type: String},
	dateFrom: {type: Date},
	dateTo: { type: Date},
	isCurrent: {type: Boolean, default: false},
	description: {type: String},
	profile: {type: Schema.ObjectId, ref: 'Profile', childPath: 'workExperiences'}
  }
);

wExpSchema.plugin(rel, { relationshipPathName: 'profile'});

var exp = mongoose.model('WorkExperience', wExpSchema);

module.exports = exp;