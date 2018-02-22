
/*
 * GET home page.
 */
var data = require('../update.json');

exports.view = function(req, res){
  data.ideas.sort(function(a,b){
  	return b.operationTime - a.operationTime;
  })
  res.render('mylist',data);
};

exports.tried = function(req, res){
  var object = {
  	"reflection": req.query.reflection,
  	"date": Date.now()
  }
  console.log(object);
  for(i in data.ideas){
  	if(data.ideas[i].id == req.params.triedId) {
  		data.ideas[i].userTried="true";
  		if(!data.ideas[i]["notes"]) data.ideas[i]["notes"] = [];
  		data.ideas[i]["notes"].unshift(object);
  		data.ideas[i].operationTime = Date.now();
  		break;
  	}
  }
  res.render('mylist',data);
}