
/*
 * GET home page.
 */
var data = require('../update.json');

exports.addIdeas = function(req, res){
  var uniqid = Date.now();
  var date = new Date();
  // console.log(uniqid);
  // console.log(date.valueOf());
  var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  var uniqid = randLetter + Date.now();
  var newIdea = {
  	  "name":"lalala",
      "id": uniqid,
      "title" : req.query.title,
      "tried": req.query.user_tried == 1?"1":"0",
      "liked":"0",
      "description": req.query.description,
      "imageURL": "",
      "createTime": date.toString(),
      "operationTime": date.toString(),
      "property": req.query.add_to,
      "userTried": req.query.user_tried,
      "feeling": req.query.category,
      "date":"",
      "reflection": "",
      "eventName": "Adventurous - 1", 
      "calendar": "Adventurous", 
      "color": "pink",
      "myList": "true",
      "notes": [],
      "cost": req.query.cost,
      "time": req.query.time,
      "comments": [{"data": "1519265609445" ,"comment": "good idea!"}]
  };
  console.log(newIdea);
  data.ideas.unshift(newIdea);

  if(newIdea.property == "public") {
    res.redirect('/explore');
    // res.render("explore",data); 
  }
  else if(newIdea.userTried == "true") {
    res.redirect('/mylist');
    // res.render("mylist",data);
    // $("#nav a[href="#tried"]").tab("show"); 
  } else res.redirect('/mylist'); 
  // res.render("mylist",data);
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
      var temp = new Date();
      data.ideas[i].operationTime = temp.toString();
      // index = i;
      // object = data.ideas[i];
      break;
    }
  }
  // if(index >= 0) data.ideas.splice(index,1);
  // data.ideas.unshift(object);
  // res.render('explore',data);
  var stayPage = req.params.stayPage;
  if(stayPage == "explore") res.redirect('/explore');
  else res.redirect('myList');
};

exports.quicklyAdd2 = function(req,res){
  var cur = req.body.id;
  // console.log(cur);
  for(i in data.ideas) {
    if(data.ideas[i].id == cur) {
      data.ideas[i].myList = "true";
      var temp = new Date();
      data.ideas[i].operationTime = temp.toString();
      break;
    }
  }
  res.send(data);
}

exports.quicklyDelete = function(req,res){
  var cur = req.body.id;
  // console.log(cur);
  for(i in data.ideas) {
    if(data.ideas[i].id == cur) {
      data.ideas[i].myList = "false";
      var temp = new Date();
      data.ideas[i].operationTime = temp.toString();
      break;
    }
  }
  res.send(data);
}