var express = require('express');
var router = express.Router();

var {Dashboard,AddStudentResult} = require('../controllers/admin.controller')
/* GET home page. */
router.get('/', Dashboard);
router.get('/AddStudentResult10',AddStudentResult)

module.exports = router;