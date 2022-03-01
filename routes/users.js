/*
 * @Descripttion: 
 * @version: 
 * @@Company: 
 * @Author: FY01
 * @Date: 2018-04-26 20:09:30
 * @LastEditors: 
 * @LastEditTime: 2022-03-01 18:42:43
 */
const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
