module.exports = (server) => {
    const io = require('socket.io')(server)
    io.on('connection',(socket) => {
        socket.on('sendMsg',(data) => {
            console.log('服务器接收到的信息',data)
            socket.emit('receiveMsg',data)
        })
    })
}