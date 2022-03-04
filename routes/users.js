/*
 * @Descripttion: 
 * @version: 
 * @@Company: 
 * @Author: FY01
 * @Date: 2018-04-26 20:09:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-02 15:33:32
 */
const express = require('express');
const router = express.Router();
// const baseURl = "120.77.232.204:8889"
const baseURl = ""

/* GET users listing. */
router.get(baseURl + '/', function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send('respond with a resource');
});

module.exports = router;
