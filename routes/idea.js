
/*
 * GET home page.
 */
var data = require('../update.json');

exports.view = function(req, res){
  var id = req.params.id;
  for(i in data.updates){
  	if(data.updates[i].id == id) {
  		data.idea.push({"idea":data.updates[i].checked});
  	}
  }
  console.log(data);
  res.render("idea",data);
};