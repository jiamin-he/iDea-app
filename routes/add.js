
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
  // 0~5
  var random = Math.floor(Math.random() * 6);
  var newIdea = {
      "id": uniqid,
      "title" : req.query.title,
      "tried": req.query.user_tried == "true"?"1":"0",
      "description": req.query.description,
      "property": req.query.add_to == "0"?"public":"private",
      "feeling": req.query.category,
      "calendarColor": data.calendarColorMatch[(req.query.category)],
      "color": data.cardColor[random],
      "myList": req.query.add_to == "1"? "true":"false",
      "operationTime": date.toString(),
      "createTime": date.toString(),
      "notes": [],
      "cost": req.query.cost,
      "time": req.query.time,
      "userTried": req.query.user_tried,
  };
  console.log(newIdea);
  data.ideas.unshift(newIdea);

  if(newIdea.property == "public") {
    data["newestSection"] = {
      "section": "true",
      "class": " show active "
    }
    data["trendingSection"] = {
      "section": "false",
      "class": " "
    } 
    
    res.redirect('/explore');
    // res.render("explore",data); 
  }
  else if(newIdea.userTried == "true") {
    data["toTrySection"] = {
      "section": "false",
      "class":  " "
    }
    data["triedSection"] = {
      "section": "true",
      "class": " show active "
    }

    res.redirect('/mylist');
    // res.render("mylist",data);
    // $("#nav a[href="#tried"]").tab("show"); 
  } else {
    data["toTrySection"] = {
      "section": "true",
      "class": " show active "
    }
    data["triedSection"] = {
      "section": "false",
      "class": " "
    } 

    res.redirect('/mylist'); 
  }
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
      data.ideas[i].userTried = "false";
      console.log(data.ideas[i]);
      var temp = new Date();
      data.ideas[i].operationTime = temp.toString();
      break;
    }
  }
  res.send(data);
}