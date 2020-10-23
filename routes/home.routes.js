var express = require('express');
var router = express.Router();

var {home,homeSearch} = require('../controllers/home.controller')
/* GET home page. */
router.get('/home', home);
router.post('/home/search', homeSearch);
// router.get('/AddStudentResult',AddStudentResult)

module.exports = router;