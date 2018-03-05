
/*
 * GET home page.
 */
var data = require('../update.json');

exports.view = function(req, res){
  res.render('calendar',data);
};

exports.getData = function(req, res){
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(data));
};