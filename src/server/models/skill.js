var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var rel = require('mongoose-relationship');

var skillSchema = new Schema(
  {
     name: {type: String},
	   percentage: {type: Number},
	   profile: { type: Schema.ObjectId, ref: "Profile", childPath: "skills"}
  }
);

skillSchema.plugin(rel, {relationshipPathName: 'profile'});

var skill = mongoose.model('Skill', skillSchema);

module.exports = skill;

