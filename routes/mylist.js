
/*
 * GET home page.
 */
var data = require('../update.json');

exports.view = function(req, res){
  res.render('mylist',data);
};