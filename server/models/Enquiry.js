
var mongoose = require('mongoose');

var userEnquiry = new mongoose.Schema({
  Name: {type: String, require: true, minlength: 2},
  Email: {type: String, require: true, minlength: 2},
  Subject: {type: String, require: true, minlength: 2},
  Message: {type: String, require: true, minlength: 2},
}, {timeStamps: true});

var Enquiry = mongoose.model('Enquiry', userEnquiry);
