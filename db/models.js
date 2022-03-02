/*
 * @Descripttion: 
 * @version: 
 * @@Company: 
 * @Author: FY01
 * @Date: 2021-07-31 11:19:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-02 10:19:50
 */
/**
 * @Description: models:handle db's collection
 * @author:
 * @date 2021/7/22
*/

//1.连接到数据库
const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost:27017/find-jobs')
// server端数据库
mongoose.connect('mongodb://0.0.0.0:20411/find-jobs')
const conn = mongoose.connection
conn.on('connected', () => {
    console.log('connect success! listening in port 80')
})

//2.定义用户文档描述结构
// schema
const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    type: { type: String, required: true }, // type: assassin/leader
    header: { type: String },
    task: { type: String }, // position
    info: { type: String },
    company: { type: String },
    salary: { type: String }
})
// 定义集合
//Model

const UserModel = mongoose.model('user', userSchema)
// 导出
exports.UserModel = UserModel

//2.//2.定义聊天文档描述结构
const chatSchema = mongoose.Schema({
    from: { type: String, required: true },  //userId : from who
    to: { type: String, required: true },   //userId: to who
    chat_id: { type: String, required: true }, // usersId: from + to === to + from
    content: { type: String, required: true },
    read: { type: Boolean, default: false },  // isRead or not
    create_time: { type: Number, default: false },
})
const ChatModel = mongoose.model('chat', chatSchema)
exports.ChatModel = ChatModel



