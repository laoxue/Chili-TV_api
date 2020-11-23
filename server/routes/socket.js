const jwt = require("jsonwebtoken")  //token 签发与验证
var users = []
// 自定义路由插件
exports.plugin = {
  name:'websocket',
  register: (server, options, next) => {
    server.app.websocket.on('connection', function(socket){
      
      if(socket.handshake.query.token) {
        
        try{
          console.log('有人登陆了哦!');
          console.log(users)
          const decoded = jwt.verify(
            socket.handshake.query.token,
            process.env.SECRET_KEY
          )
          socket.username = decoded.username
          if(users.indexOf(decoded.username) < 0) {
            users.push(decoded.username)
          }
          console.log(decoded.username)
          console.log(users.indexOf(decoded.username))
          socket.emit('users',{number:users.length});  // 发送给自己
          socket.broadcast.emit('users',{number:users.length}); // 发送给其他人
          socket.on('chats_val', (msg) => {
              console.log(msg)
              server.app.dbRedis.get(decoded.username,function(err, reply){
                if (err) {
                  console.log(err);  
                  return;  
                }
                server.app.websocket.emit('chat message', {val:msg,id:socket.id,username:JSON.parse(reply).username,headUrl:JSON.parse(reply).headUrl});
              })
              
          });
        }catch(err){
           console.log(err)
        }
       
      } else {
        console.log('无效登陆!');
      }
      // console.log(socket.handshake.query.token)
      // console.log(decoded.username)
      // console.log(socket)
    });
    // server.app.websocket.on('disconnect', function(socket){
    //   console.log('用户退出');
    //   // const decoded = jwt.verify(
    //   //   socket.handshake.query.token,
    //   //   process.env.SECRET_KEY
    //   // )
    //   // socket.username = decoded.username
		//   // users=users.slice(0,users.length-1);
		//   // // 统计连接数
		//   // socket.emit('users',{number:users.length});  // 发送给自己
		//   // socket.broadcast.emit('users',{number:users.length}); // 发送给其他人
    // });
    // server.app.websocket.on('login', function(socket){
    //   console.log('有人发送了信息');
    // });
  }
}
