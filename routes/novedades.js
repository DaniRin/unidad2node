var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
//   res.render('index', { title: 'NOVEDADES' });
  res.send('Hola, esta es la página de novedades')
});

module.exports = router;