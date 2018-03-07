
/*
 * GET home page.
 */
var data = require('../orderHistory.json');

exports.view = function(req, res){
  data['viewAlt'] = false;
  res.render('buyer_orderHistory_A', data);
};

exports.viewAlt = function(req, res){
  data['viewAlt'] = true;
  res.render('buyer_orderHistory_A', data);
};