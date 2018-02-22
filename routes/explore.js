
/*
 * GET home page.
 */
var data = require('../update.json');

// the first part of default view is for newest (ideas)
// the second part is for trending (ideas2)
exports.defaultView = function(req, res){
  data["ideas2"]=data.ideas.slice();
  data.ideas.sort(function(a,b){
  	return b.createTime - a.createTime;
  });
  data.ideas2.sort(function(a,b){
  	return b.tried - a.tried;
  });
  console.log(data);
  res.render('explore',data);
};
