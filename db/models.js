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
    console.log('connect success! listening in port 4000')
})

//2.define/export UserModel
// schema
const userSchema = mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    type: {type: String, required: true}, // type: assassin/leader
    header: {type: String},
    task: {type: String}, // position
    info: {type: String},
    company: {type: String},
    salary: {type: String}
})
//Model
const UserModel = mongoose.model('user',userSchema)
// exports
exports.UserModel = UserModel

//2.define/export ChatModel
const chatSchema = mongoose.Schema({
    from: {type: String, required: true},  //userId : from who
    to: {type: String, required: true},   //userId: to who
    chat_id: {type: String, required: true}, // usersId: from + to === to + from
    content: {type: String, required: true},
    read: {type: Boolean, default: false},  // isRead or not
    create_time: {type: Number, default: false},
})
const ChatModel = mongoose.model('chat',chatSchema)
exports.ChatModel = ChatModel

