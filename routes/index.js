
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};


/*
 * Get about page.
 */

exports.about = function(req, res){
  res.render('about', { title: 'Express'})
};

/*
 * Get sign in page
 */

exports.signin = function(req, res){
	res.render('signin', { title: 'Express'})
};

exports.login = function(req, res){
	res.render('index', { title: 'Welcome ' + req.body.passwd})
}
