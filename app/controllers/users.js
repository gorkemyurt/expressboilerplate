var mongoose = require('mongoose')
  , User = mongoose.model('User')
 , http = require('https')
 ,querystring = require('querystring')

exports.login = function(req,res){
	if(req.user){
		res.send(req.profile);
		res.render('index');
	}
	else{
		res.render('login')
	}

}
