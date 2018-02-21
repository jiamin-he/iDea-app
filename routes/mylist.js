
/*
 * GET home page.
 */
var data = require('../update.json');

exports.view = function(req, res){
  res.render('mylist',data);
};

exports.tried = function(req, res){
  for(i in data.ideas){
  	if(data.ideas[i].id == req.params.triedId) {
  		data.ideas[i].userTried="true";
  	}
  }
  res.render('mylist',data);
}