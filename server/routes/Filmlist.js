const jwt = require("jsonwebtoken")  //token 签发与验证
const bcrypt = require("bcryptjs") // 字符串加密
const Filmlist = require("../models/Filmlist") // 导入影单模型
const Film = require("../models/Films") // 导入用户模型
const mongoose = require("mongoose") // 操作mongoose 数据库
// 自定义路由插件
exports.plugin = {
    name:'filmlist',
    register: (server, options, next) => {
        // 保存影单
        server.route([
            {
                method: 'POST',
                path: '/savefilmlist',
                handler: async (request, h) => {
                  console.log('调用film')
                  console.log(request.payload)
                //   let itemid = []
                //   for(var i=0;i<request.payload.filmidbox.length;i++){
                //     let params = {
                //         filmid: request.payload.filmidbox[i]
                //     }
                //     itemid.push(params)
                //   }
                  let date = new Date();
                  let year = date.getFullYear();
                  let month = date.getMonth() + 1;
                  let day = date.getDate();
                  let now = `${year}-${month}-${day}`
                  let banner = []
                  let header = {
                     count:request.payload.filmidbox.length,
                     date: now,
                     subtit: request.payload.remark,
                     title: request.payload.filmname
                  }
                  console.log('header')
                  banner.push(request.payload.banner)
                  let params = {
                     yingheader:header,
                     yincontent:request.payload.filmidbox,
                     yintou:banner
                  }
                  console.log(params)
                  return Filmlist.create(params)
                  .then(data => {
                      console.log(data)
                      return {
                          code:0
                      }
                  })
                  // 如果有id 则请求单条 如果没有则请求全部影片
                }
            }
        ]),
        server.route([
            {
                method: 'GET',
                path: '/getfilmlistuser',
                handler: async (request, h) => {
               
                  // 如果有id 则请求单条 如果没有则请求全部影片
                  
                }
            }
        ])
    }
}