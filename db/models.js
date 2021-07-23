/**
 * @Description: models:handle db's collection
 * @author:
 * @date 2021/7/22
*/

//1.connect db
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/find-jobs')
const conn = mongoose.connection
conn.on('connected',()=>{
    console.log('connect success!')
})

//2.define/export Model
const userSchema = mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    type: {type: String, required: true}, // type: assassin/leader
    header: {type: String},
    post: {type: String}, // position
    info: {type: String},
    company: {type: String},
    salary: {type: String}
})
const UserModel = mongoose.model('user',userSchema)
exports.UserModel = UserModel

