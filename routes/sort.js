
/*
 * GET home page.
 */
var data = require('../update.json');

exports.sortBy = function(req, res){
  console.log("hi");
  var uniqid = Date.now();
  var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  var uniqid = randLetter + Date.now();
  console.log(uniqid);
  var newIdea = {
  	  "name":req.query.provider,
      "id": uniqid,
      "title" : req.query.title,
      "tried": "0",
      "liked":"0",
      "description": req.query.description,
      "imageURL": "",
      "property": req.query.add_to == 1?"public":"private",
      "userTried": req.query.user_tried == 1?"true":"false"
  };
  console.log(newIdea);
  data.ideas.unshift(newIdea);
  res.render("explore",data);
};