var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' })
});

/* GET page2. */
router.get('/page2', function(req, res) {
    res.render('page2', { title: 'Hello, World!' })
});

/* GET page3. */
router.get('/page3', function(req, res) {
    res.render('page3', { title: 'Hello, World!' })
});


module.exports = router;
