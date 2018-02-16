
/*
 * GET home page.
 */
var data = require('../update.json');

exports.view = function(req, res){
  res.render("add_new_ideas",data);
};