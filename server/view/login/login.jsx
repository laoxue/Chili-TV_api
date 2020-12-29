'use strict';

const React = require('react');
import { Button } from 'antd';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
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
const userLogin = (e) => {
    alert(1)
    // e.preventDefault()
    // fetch('http://192.168.253.6:3000/v1/chili/login', {
    //     body: JSON.stringify( {
    //     username: document.querySelector('input[name="username"]').value,
    //     password: document.querySelector('input[name="password"]').value
    //   }),
    //   headers:{
    //     'Accept': 'text/javascript, application/javascript, application/ x-javascript, */*',
    //     'Content-Type':'application/json'
    //   },
    //     method: 'POST' // *GET, POST, PUT, DELETE, etc.
    //   })
}
const Login = () => {
    const userLogin = (e) => {
        alert(1)
        // e.preventDefault()
        // fetch('http://192.168.253.6:3000/v1/chili/login', {
        //     body: JSON.stringify( {
        //     username: document.querySelector('input[name="username"]').value,
        //     password: document.querySelector('input[name="password"]').value
        //   }),
        //   headers:{
        //     'Accept': 'text/javascript, application/javascript, application/ x-javascript, */*',
        //     'Content-Type':'application/json'
        //   },
        //     method: 'POST' // *GET, POST, PUT, DELETE, etc.
        //   })
    }
        return (
            <html>
                <head>
                    {/* <title>{this.props.title}</title> */}
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
                    <Button type="primary" danger onClick={userLogin}>
                    登录11
                    </Button>
                    <button onClick={userLogin}>8888</button>
                    </div>
                </body>
            </html>
        );

}


module.exports = Login;