
/*
 * GET home page.
 */
var data = require('../update.json');

// the first part of default view is for newest (ideas)
// the second part is for trending (ideas2)
exports.defaultView = function(req, res){
  data["ideas2"]=data.ideas.slice();
  data.ideas.sort(function(a,b){
  	var dateA = new Date(a.createTime);
  	var dateB = new Date(b.createTime);
  	return dateB.valueOf() - dateA.valueOf();
  });
  data.ideas2.sort(function(a,b){
  	return b.tried - a.tried;
  });

  // default: toTry active
  if(!data["newestSection"]) {
    data["newestSection"] = {
      "section": "true",
      "class": " show active "
    }
    data["trendingSection"] = {
      "section": "false",
      "class": " "
    } 
  }
  res.render('explore',data);
};

exports.altView = function(req, res){
  // console.log(data);
  res.render('explore2',data);
}

exports.switchView = function(req,res){
    data["trendingSection"] = {
      "section": (req.params.section == "trending"? "true":"false"),
      "class": (req.params.section == "trending"? " show active ":" ")
    }
    data["newestSection"] = {
      "section": (req.params.section == "newest"? "true":"false"),
      "class": (req.params.section == "newest"? " show active ":" ")
    } 
    res.redirect('/explore');
}