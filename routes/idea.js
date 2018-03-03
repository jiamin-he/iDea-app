
/*
 * GET home page.
 */
var data = require('../update.json');

exports.view = function(req, res){
  var id = req.params.id;
  for(i in data.updates){
  	if(data.updates[i].id == id) {
  		res.render("idea",{
  			"idea":data.updates[i],
        "bottom-bar": data["bottom-bar"]
  		});
  	}
  }
  for(i in data.ideas){
  	if(data.ideas[i].id == id) {
  		res.render("idea",{
  			"idea":data.ideas[i],
        "bottom-bar": data["bottom-bar"]
  		});
  	}
  }
};