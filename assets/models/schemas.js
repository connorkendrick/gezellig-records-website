var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsSchema = new Schema({
	published: Date,
	articleContent: String
});

var newsReleases = new Schema({
	albumArt: String,
	title: String,
	artist: String,
	albumLink: String,
	albumLinkTitle: String
});