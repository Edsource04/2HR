var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var rel = require('mongoose-relationship');

var languageSchema = new Schema(
  {
    languageName: {type: String},
	  percentage: {type: Number},
	  profile: {type: Schema.ObjectId, ref: 'Profile', childPath: 'languages'}
  }
);

languageSchema.plugin(rel, { relationshipPathName: 'profile'});

var language = mongoose.model('Language', languageSchema);

module.exports = language;