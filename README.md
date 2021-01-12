### - [移动客户端页面 Chili-TV_client](https://github.com/laoxue/Chili-TV_client) <= 这个客户端的API服务器

<div align=center><img src="http://aladjs.cn/hapi.jpg" width="400"/></div>

![Build Status](https://img.shields.io/badge/build-passing-green.svg)
![Version 1.0.0](https://img.shields.io/badge/version-2.0.0-yellow.svg)
[![License](https://img.shields.io/badge/license-GPL3.0-blue.svg)]()

这个项目是无聊的时候做的，主要客户端为移动端，利用唤醒URL schema原理, 可以将自己喜欢的资源通过百度云分享上传到平台 利用平台的共享性 或许自己的所需资源，相当于一个百度云盘的集合，整体项目分三部分 采用前后端分离处理。

- [移动客户端页面 Chili-TV_client](https://github.com/laoxue/Chili-TV_client)  (基于Vue全家桶)
- [服务端接口API Chili-TV_api](https://github.com/laoxue/Chili-TV_api) (基于Node Hapi框架 + Mongodb + Redis)
- [PC后台管理页面 Chili-TV_web](https://github.com/laoxue/Chili-TV_web) (基于React + React-router + Ant-design)

此项目基于 Nodejs 框架 Hapi  + Mongodb + Redis + websocket
部分接口涉及爬虫 以及 excel模块操作。

# API功能
- [x] 账号相关 增删改查 -- 完成  /login
- [x] 资源相关 增删改查 -- 完成
- [x] 豆瓣爬虫实时获取查询数据 -- 完成
- [x] 模糊查询检索功能 -- 完成
- [x] 文章相关 增删改查
- [x] Excel导入资源
- [x] websocket服务器 实时聊天 -- 完成
- [x] 评论资源 -- 完成

## 开发及部署文档


## 联系作者

> 大家有任何问题或者建议都可以在 [issues](https://github.com/laoxue/Chili-TV_api/issues) 中反馈给我，我会慢慢完善这个项目。

- 我的邮箱：762452134@qq.com
- 我的微信: zxqsychen2010

# 总结

1、其实页面很多地方还是需要优化整理的，工作时间较忙 业余时间搞的项目 图一方便，开发时本着功能至上先实现功能 后优化项目代码的想法开发的，所以代码抽时间会优化维护

2.本身其实还有很多好玩的功能框架已经勾勒出来了,但苦于时间问题 待后续慢慢实现。

3.这个项目本身作为自我技术迭代，也希望能成为很多人入门的选择。项目本身不难，我希望通过用自己的想法想这个项目有趣起来。

## 感谢

所有项目中使用到的模块开发者
