const express = require('express');
const router = express.Router();
//encrypt password
const md5 = require('blueimp-md5')

const filter = {password:0,__v:0}

const {UserModel,ChatModel} = require('../db/models')
/**  register
 * 1) success: userModel.save(),res.cookie(),{code: 0, data: {_id, username，type}，}
 * 2) fail: {code: 1, msg: 'user already exist'}
 */
router.post('/register',(req,res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  //get data from req
  const {username,password,type} = req.body
  UserModel.findOne({username},(err,user) => {
    if (user) {
      res.send({code:1,msg:`name ${username} already exist`})
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
      res.send({code:1,msg:`wrong username or wrong password`})
    }else {
      // set a cookie back to browser
      res.cookie('userId',user._id,{maxAge:1000*60*60*24*7})
      res.send({code:0,data:user})
    }
  })
})
/**
 * updateUser based on cookie(userId)
 * 1) success: res.cookie(),{code: 0, data: user}
 * 2) fail: clearCookie(userId),{code: 1, msg: 'login first pls'}
 */
router.post('/update',(req,res) => {
  const {userId} = req.cookies
  if (!userId){
    res.send({code:1,msg:'login first pls'})
    return
  }
  const user = req.body
  UserModel.findByIdAndUpdate({_id:userId},user,(error,oldUser) => {
    if (!oldUser){
      res.clearCookie(userId)
      res.send({code:1,msg:'login first pls'})
    }else {
      const {username,type,_id} = oldUser
      const data = Object.assign(user,{username,type,_id})
      res.send({code:0,data})
    }
  })
})
/**
 * getUser based on cookie(userId)
 * 1) success: {code: 0, data: user}
 * 2) fail: {code: 1, msg: 'login first pls'}
 */
router.get('/getUser',(req,res) => {
  const {userId} = req.cookies
  if (!userId){
    res.send({code:1,msg:'login first pls'})
    return
  }
  UserModel.findOne({_id:userId},filter,(error,user) => {
    res.send({code:0,data:user})
  })
})
/**
 * getUserList based on type(assassin/leader)
 * 1) success: {code: 0, data: user}
 *
 */
router.get('/userList',(req,res) => {
  const {type} = req.query
  UserModel.find({type},filter,(error,users) => {
    if (!error){}
    res.send({code:0,data:users})
  })
})

/**
 * get current user's chatList
 * 1) success:
 *
 */
router.get('/msgList',(req,res) => {
  const {userId} = req.cookies
  UserModel.find((error,userArray) => {
    const users = userArray.reduce((users,{username,header,_id}) => {
      users[_id] = {username,header}
      return users
    },{})
    ChatModel.find({'$or': [{from: userId}, {to: userId}]}, filter, function (err, chatMsgs) {
      res.send({code: 0, data: {users, chatMsgs}})
    })
  })
})
/**
 * update information's status to be read
 * 1) success: {code: 0, data: 2}
 *
 */
router.post('/readMsg', function (req, res) {

  const from = req.body.from
  const to = req.cookies.userId
  console.log(to)

  ChatModel.update({from, to, read: false}, {read: true}, {multi: true}, function (err, doc) {
    // console.log(doc)
    res.send({code: 0, data: doc.nModified})
  })
})




module.exports = router;
