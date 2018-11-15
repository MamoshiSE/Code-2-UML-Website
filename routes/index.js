var express = require('express');
var router = express.Router();
var Git = require("nodegit");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
 var gitPath = req.body;
	
		if (!req.body) {
			res.sendStatus(40)
		}
		Git.Clone(gitPath, gitPath.slice(19).replace(/\//g, "_"));
		res.send('The files from the git repository at: ' + gitPath + " have been cloned and is now stored in: " +  gitPath.slice(19).replace(/\//g, "_"));
	
});


module.exports = router;
