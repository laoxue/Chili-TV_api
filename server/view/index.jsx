'use strict';

const React = require('react');
const Loginbpx = require('./login/login')
import { Button } from 'antd';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const React = require('react');
const loginCss = {
    infologo:{
        width:"150px",
        height:"150px"
    }
}
const container = {
    textAlign: "center", /*让div内部文字居中*/
    backgroundColor: "#fff",
    borderRadius: "20px",
    width: "300px",
    height: "350px",
    margin: "auto",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  };
class View extends React.Component {
    render () {

        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="http://aladjs.cn/antd.css"></link>
                </head>
                <body>
                    <div style={container}>
                    <img style={loginCss.infologo} src="http://aladjs.cn/%E6%96%B0%E5%BB%BA%E9%A1%B9%E7%9B%AE%20%281%29.png" alt="logo"/>
                    <Input addonBefore="用户名" size="large" placeholder="请输入用户名"/>
                    <br />
                    <br />
                    <Input addonBefore="密&nbsp;&nbsp;&nbsp;码" size="large" placeholder="请输入密码"/>
                    <br />
                    <br />
                    <Button type="primary" danger>
                    登录
                    </Button>
                    </div>
                </body>
            </html>
        );
    }
}


module.exports = View;