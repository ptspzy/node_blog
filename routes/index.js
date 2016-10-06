var express = require('express');
var router = express.Router();

var crypto = require('crypto'),
User = require('../models/user.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '这是主页',name:'彭中耀' });
});

module.exports = router;
