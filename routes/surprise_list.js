
/*
 * GET home page.
 */
var data = require('../update.json');


exports.view = function(req, res){
  data.ideas.sort(function(a,b){
  	return b.tried - a.tried;
  });

  var data_list = {
	"all":[],
	"feeling":[],
	"cost": [],
	"time": [],
	"option": [],
	"bottom-bar": []
	};

  var feeling = req.query.feeling, time = req.query.time, cost = req.query.cost;
  console.log(feeling + time +cost);
  data_list['option'].push({"class":"badge-primary","name":feeling});
  data_list['option'].push({"class":"badge-success","name":time});
  data_list['option'].push({"class":"badge-warning","name":cost});

  for(i in data.ideas) {
  	var cur = data.ideas[i];
  	if(cur.feeling == feeling && cur.time == time && cur.cost == cost) {
  		data_list["all"].push(cur);
  	}
  	// if(cur.feeling == feeling) {
  	// 	data_list["feeling"].push(cur);
  	// }
  	// if(cur.time == time) {
  	// 	data_list["time"].push(cur);
  	// }
  	// if(cur.cost == cost) {
  	// 	data_list["cost"].push(cur);
  	// }
  }
  data_list['bottom-bar'] = data['bottom-bar'];
  res.render('surprise_list',data_list);
};

