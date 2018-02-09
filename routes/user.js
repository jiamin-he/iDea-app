
/*
 * GET home page.
 */
var data = require('../update.json');

exports.view = function(req, res){
  var name = req.params.name;
  console.log(name);
  res.render("user",{
  	"name": name
  });
};