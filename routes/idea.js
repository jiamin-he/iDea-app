
/*
 * GET home page.
 */
var data = require('../update.json');

exports.view = function(req, res){
  var id = req.params.id;
  for(i in data.updates){
  	if(data.updates[i].id == id) {
  		res.render("idea",{
  			"idea":data.updates[i]
  		});
  	}
  }
};