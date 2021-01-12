const hapi = require("hapi"); // 引入hapi
const Inert = require("inert"); // 引入静态加载
const Path = require("path"); // 引入路径
const fs = require("fs"); // 引入读取
const Vision = require('vision') // 引入接口
// const Jade = require('jade');
const mongoose = require('mongoose')
const redis = require("redis")
const Article = require("./models/Article") // 导入用户模型
const Film = require("./models/Films") // 导入用户模型
const Filmlist = require("./models/Filmlist") // 导入用户模型
const HapiReactViews = require('hapi-react-views') // react引擎
require('@babel/register')({
    presets: ['@babel/preset-react', '@babel/preset-env']
});
require('babel-polyfill')
// 创建接口服务器
const server = new hapi.Server({
    host: '0.0.0.0',
    routes: {
        cors: {
            origin: ["*"]
        }
    },
    port: 3000
})
const io = require("socket.io")(server.listener, {
    cors: {
      origin: '*',
    }
  });
server.app.websocket = io
require('./config/index.js')
// 创建应用
// ----------------------------------------------- 分割线 --------------------------------------------------------------------

// 链接本地数据库
const mongoDBUrl = 'mongodb://127.0.0.1/chili-tv';
server.app.db = mongoose.connect(mongoDBUrl,
    { 
        useNewUrlParser: true ,
        useUnifiedTopology:true}
)
// redis链接
const redisDBUrl = redis.createClient(6379, '127.0.0.1')
server.app.dbRedis = redisDBUrl

mongoose.Promise = global.Promise;
mongoose.connection.on("connected", () => {
    console.log("mongodb数据库连接成功")
    // console.log(mongoose)
});
mongoose.connection.on("error", (error) => {
    console.log("mongodb数据库连接失败", error)
});
// ----------------------------------------------- 分割线 ---------------------------------------------------------------------
// 定义服务启动函数
const init = async () => {
    // 日志
    await server
    .register({
        plugin: require('hapi-pino'),
        options: {
            prettyPrint: true // 格式化输出
        }
    })
    // 文档
    await server.register({
        plugin: require('lout')
    })
    // 登录相关路由
    await server
    .register({
        plugin:require("./routes/Users")
    },{
        routes:{
            // 前缀
            prefix:'/v1/chili'
        }
    })
    .catch(err => {
        console.log(err)
    })
    .catch(err => {
        console.log(err)
    })
    // 电影相关路由
    await server
    .register({
        plugin:require("./routes/Films")
    },{
        routes:{
            // 前缀
            prefix:'/v1/chili'
        }
    })
    .catch(err => {
        console.log(err)
    })
    .catch(err => {
        console.log(err)
    })
    // 文章相关路由
    // await server
    // .register({
    //     plugin:require("./routes/Articles")
    // },{
    //     routes:{
    //         // 前缀
    //         prefix:'/v1/chili'
    //     }
    // })
    // .catch(err => {
    //     console.log(err)
    // })
    // .catch(err => {
    //     console.log(err)
    // })
    // 评论先关路由
    await server
    .register({
        plugin:require("./routes/Commit")
    },{
        routes:{
            // 前缀
            prefix:'/v1/chili'
        }
    })
    .catch(err => {
        console.log(err)
    })

    await server
    .register({
        plugin:require("./routes/Filmlist")
    },{
        routes:{
            // 前缀
            prefix:'/v1/chili'
        }
    })
    .catch(err => {
        console.log(err)
    })

    await server
    .register({
        plugin:require("./routes/socket")
    })
    .catch(err => {
        console.log(err)
    })
    .catch(err => {
        console.log(err)
    })
	await server.register(Vision)  // 注册接口
    await server.register(Inert)  // 注册静态
	server.views({
		engines: { 
            jsx:HapiReactViews
         },
         relativeTo: __dirname,
         path: 'view'
	})
    
    // 获取静态文件路由
    server.route({
        path: "/index",
        method: "GET",
        handler: (request, h) => {
            return h.view('index',
            {
                title: '这里是后台管理',
                msg: '这边是后台管理部分'
            },
            {
                //改变视图模板在目录路径
                path:'./view'
            })
        }
    })
    server.route({
        path: "/",
        method: "GET",
        handler: (request, h) => {
            return h.view('template',
            {
                title: '后台管理系统',
                msg: '后台管理系统'
            },
            {
                //改变视图模板在目录路径
                path:'./view'
            })
        }
    })
    server.route({
        path: "/login",
        method: "GET",
        handler: (request, h) => {
            return h.view('login',
            {
                title: '这里是后台管理',
                msg: '这边是后台管理部分'
            },
            {
                //改变视图模板在目录路径
                path:'./view/login'
            })
        }
    })
    // server.route({
    //     path: "/filmlist",
    //     method: "GET",
    //     handler: (request, h) => {
    //         return Film.find({})
    //         .then(film => {
    //             return Filmlist.aggregate([
    //                 {
    //                    $lookup:
    //                       {
    //                          from: "films",
    //                          localField: 'yincontent',
    //                          foreignField: "filmname",
    //                          as: "yincontent"
    //                      }
    //                 }
    //              ])
    //             .then((res) => {
    //                                 // console.log(film)
    //                 return h.view('filmlist',
    //                 {
    //                     filmlist: film,
    //                     hasfilem:res
    //                 },
    //                 {
    //                     //改变视图模板在目录路径
    //                     path:'./view/filmlist'
    //                 }) 
    //             })
    //         })
    //     }
    // })
    // server.route({
    //     path: "/article",
    //     method: "GET",
    //     handler: (request, h) => {
    //         return Article.find({})
    //            .then(article => {
    //             //    console.log(article)
    //                 if (article) {
    //                     return h.view('article',
    //                     {
    //                         articles: article
    //                     },
    //                     {
    //                         //改变视图模板在目录路径
    //                         path:'./view/article'
    //                     })
    //                 } else {
    //                     return {
    //                         code:-1,
    //                         msg:"找不到相关文章!"
    //                     }
    //                 }
    //             })
            
    //     }
    // })
    await server.start(); // 启动服务器
    // await client.start();
    console.log(`Server running at : ${server.info.uri}`);
    // console.log(`Client running at : ${client.info.uri}`);
}

init();