var mongoose = require('mongoose');
var Enquiry = mongoose.model('Enquiry');

module.exports = {

  // dashboard: function(req, res){
  //   People.find({}, function(err, results){
  //     res.json({something: results})
  //   });
  // },
  // addname: function(req, res){
  //   console.log(req.params);
  //   let person = new Enquiry ({name: req.params.name});
  //      person.save(function (err) {
  //          if (!err) {
  //              res.json({person: req.params.name})
  //          }
  //          else {
  //              console.log("something wen wrong");
  //          }
  //      })
  //  },
  //  remove: function(req, res){
  //    People.remove({name: req.params.name},function(err, results){
  //      if (err){console.log(err);
  //      res.json('Did not delete person')}
  //      else{
  //      console.log(results)
  //      res.json('Deleted person')};
  //    })
  //  },
  //  display: function(req, res){
  //    People.find({name: req.params.name}, function(err, results){
  //      res.json({person: results})
  //    })
  //  }

}
