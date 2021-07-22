const express = require('express');
const router = express.Router();

/**  register
 * a) path : /register
 * b) method: POST
 * c) params: username / password
 * d) admin :  exist
 * e) success: {code: 0, data: {_id: 'abc', username: ‘xxx’, password:’123’}
 * f) fail: {code: 1, msg: '此用户已存在'}
 */
router.post('/register',(req,res) => {
  const {username,password} = req.body
  if (username === 'admin'){
    res.send({code: 1, msg: '此用户已存在'})
  }else {
    res.send({code: 0, data: {_id: 'abc', username, password}})
  }
})


module.exports = router;
