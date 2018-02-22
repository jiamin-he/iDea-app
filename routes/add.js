
/*
 * GET home page.
 */
var data = require('../update.json');

exports.addIdeas = function(req, res){
  var uniqid = Date.now();
  var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  var uniqid = randLetter + Date.now();
  console.log(uniqid);
  var newIdea = {
  	  "name":req.query.provider,
      "id": uniqid,
      "title" : req.query.title,
      "tried": req.query.user_tried == 1?"1":"0",
      "liked":"0",
      "description": req.query.description,
      "imageURL": "",
      "createTime": Date.now(),
      "operationTime": Date.now(),
      "property": req.query.add_to == 1?"public":"private",
      "userTried": req.query.user_tried == 1?"true":"false"
  };
  console.log(newIdea);
  data.ideas.unshift(newIdea);
  if(newIdea.property == "public") res.render("explore",data);
  else if(newIdea.userTried == "true") {
    res.render("mylist",data);
    // $("#nav a[href="#tried"]").tab("show"); 
  } else res.render("mylist",data);
};

// exports.tried = function(req, res){
//   for(i in data.ideas){
//     if(data.ideas[i].id == req.params.triedId) {
//       data.ideas[i].userTried="true";
//       break;
//     }
//   }
//   res.render('mylist',data);
// }

exports.quicklyAdd = function(req, res){
  // var index = -1;
  // var object;
  for(i in data.ideas) {
    if(data.ideas[i].id == req.params.id) {
      data.ideas[i].myList="true";
      data.ideas[i].operationTime = Date.now();
      // index = i;
      // object = data.ideas[i];
      break;
    }
  }
  // if(index >= 0) data.ideas.splice(index,1);
  // data.ideas.unshift(object);
  res.render('explore',data);
};