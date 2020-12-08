// 自定义路由插件
exports.plugin = {
    name:'commits',
    register: (server, options, next) => {
        server.route({
            path: "/index",
            method: "GET",
            handler: (request, h) => {
                return h.render('index',
                {
                    title: '这里是后台管理',
                    msg: '这边是后台管理部分'
                },
                {
                    //改变视图模板在目录路径
                    path:'./view/index'
                })
            }
        })
    }
}