
/*
 * GET home page.
 */
var data = require('../update.json');

exports.view = function(req, res){
  data.ideas.sort(function(a,b){
    var dateA = new Date(a.operationTime);
    var dateB = new Date(b.operationTime);
    return dateB.valueOf() - dateA.valueOf();
  })
  var toTry = 0, tried = 0;
  for(i in data.ideas){
    if(data.ideas[i].myList == "true" && data.ideas[i].userTried == "true")
      tried++;
    if(data.ideas[i].myList == "true" && data.ideas[i].userTried == "false")
      toTry++;
  }
  data["toTry"] = toTry;
  data["tried"] = tried;
  // console.log(data);

  // default: toTry active
  if(!data["toTrySection"]) {
    data["toTrySection"] = {
      "section": "true",
      "class": " show active "
    }
    data["triedSection"] = {
      "section": "false",
      "class": " "
    } 
  }
  
  res.render('mylist',data);
};

exports.tried = function(req, res){
  var temp = new Date();
  var object = {
  	"reflection": req.query.reflection,
  	"date": temp.toString(),
    "year": temp.toDateString(),
    "time": temp.toTimeString().substr(0, "23:15:30".length),
    "property": req.query.property,
    "provider": "McDonald"
  }
  console.log(object);
  for(i in data.ideas){
  	if(data.ideas[i].id == req.params.triedId) {
  		data.ideas[i].userTried="true";
  		if(!data.ideas[i]["notes"]) data.ideas[i]["notes"] = [];
  		data.ideas[i]["notes"].unshift(object);
      var temp = new Date();
  		data.ideas[i].operationTime = temp.toString();
  		break;
  	}
  }
  var section = req.params.fromSection;
  // console.log(section);
  data["toTrySection"] = {
    "section": (section == "toTry"? "true":"false"),
    "class": (section == "toTry"? " show active ": " ")
  }
  console.log("toTrySection " + data["toTrySection"].section);
  console.log("toTrySection " + data["toTrySection"].class);
  data["triedSection"] = {
    "section": (section == "tried"? "true":"false"),
    "class": (section == "tried"? " show active ": " ")
  } 
  console.log("triedSection " + data["triedSection"].section);
  console.log("triedSection " + data["triedSection"].class);
  var fromPage = req.params.fromPage;
  if(fromPage == "mylist"){
    console.log("equals to mylist");
    res.redirect('/mylist');
  } 
  else {
    console.log("equals to details");
    res.redirect('/idea/'+req.params.triedId);
  }
}

exports.calendarNav = function(req,res) {

  data["toTrySection"] = {
    "section": "false",
    "class":  " "
  }
  data["triedSection"] = {
    "section": "true",
    "class": " show active "
  }
  data["navCard"] = req.params.id;
  // console.log(data["navCard"])
  res.redirect('mylist');

}

exports.updateNavId = function(req,res) {
  data["navCard"] = req.body.navCard;
  data["toTrySection"] = req.body.toTrySection;
  data["triedSection"] = req.body.triedSection;
  res.send(data);
}