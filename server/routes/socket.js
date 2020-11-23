const jwt = require("jsonwebtoken")  //token 签发与验证
// 自定义路由插件
exports.plugin = {
  name:'websocket',
  register: (server, options, next) => {
    server.app.websocket.on('connection', function(socket){
      
      if(socket.handshake.query.token) {
        console.log('有人登陆了哦!');
        const decoded = jwt.verify(
          socket.handshake.query.token,
          process.env.SECRET_KEY
        )
        socket.on('chats_val', (msg) => {
            console.log(msg)
            server.app.websocket.emit('chat message', {val:msg,id:socket.id,username:decoded.username});
        });
      } else {
        console.log('无效登陆!');
      }
      console.log(socket.handshake.query.token)
      // console.log(decoded.username)
      // console.log(socket)
    });
    // server.app.websocket.on('disconnect', function(socket){
    //   console.log('用户退出');
    // });
    // server.app.websocket.on('login', function(socket){
    //   console.log('有人发送了信息');
    // });
  }
}
