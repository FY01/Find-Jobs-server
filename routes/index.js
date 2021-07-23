const express = require('express');
const router = express.Router();
//encrypt password
const md5 = require('blueimp-md5')

const filter = {password:0,__v:0}

const {UserModel} = require('../db/models')
/**  register
 * 1) success: userModel.save(),res.cookie(),{code: 0, data: {_id, username，type}，}
 * 2) fail: {code: 1, msg: 'user already exist'}
 */
router.post('/register',(req,res) => {
  //get data from req
  const {username,password,type} = req.body
  UserModel.findOne({username},(err,user) => {
    if (user) {
      res.send({code:1,meg:`name ${username} already exist`})
    }else {
      new UserModel({username,type,password:md5(password)}).save((err,user) => {
        // set a cookie back to browser
        res.cookie('userId',user._id,{maxAge:1000*60*60*24*7})
        const data = {username, type, _id:user._id} //do not send the password back
        res.send({code:0,data})
      })
    }
  })
})
/**  login
 * 1) success: res.cookie(),{code: 0, data: user}
 * 2) fail: {code: 1, msg: 'wrong username or wrong password'}
 */
router.post('/login',(req,res) => {
  //get data from req
  const {username,password} = req.body
  UserModel.findOne({username,password:md5(password)},filter,(err,user) => {
    //set a filter to refuse return user.password and user.__v
    if (!user) {
      res.send({code:1,meg:`wrong username or wrong password`})
    }else {
      // set a cookie back to browser
      res.cookie('userId',user._id,{maxAge:1000*60*60*24*7})
      res.send({code:0,data:user})
    }
  })
})




module.exports = router;
