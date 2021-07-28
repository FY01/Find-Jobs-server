/**
 * @Description: handle chat
 * @author:
 * @date 2021/7/26
*/
const {ChatModel} = require('../db/models')
module.exports = (server) => {
    const io = require('socket.io')(server)
    io.on('connection',(socket) => {
        socket.on('sendMsg',({from,to,content}) => {
            console.log('服务器接收到的信息',{from,to,content})
            const chat_id = [from,to].sort().join('_')
            const create_time = Date.now()
            new ChatModel({from,to,content,chat_id,create_time}).save((error,chatMsg) => {
                console.log('服务器发送的消息',chatMsg)
                //send mag to all the connector,need to handler it in browser
                io.emit('receiveMsg',chatMsg)
            })

        })
    })
}