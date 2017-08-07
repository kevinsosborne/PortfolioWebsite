var mongoose = require('mongoose');
var Enquiry = mongoose.model('Enquiry');


module.exports = function(app){

app.get('/', function(req, res){
  res.render('homepage');
});


}
