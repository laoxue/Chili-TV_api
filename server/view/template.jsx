'use strict';
import { renderToString } from 'react-dom/server';
const React = require('react');
import Login from './login/login';
import Article from './article/article';
import Index from './index/index';
import ReactDom from 'react-dom';
// ReactDom.hydrate(<Home />, document.getElementById('root'))
const Template = () => {
    return (
        <html>
            <head>
            <title>管理后台</title>
            <link rel="stylesheet" href="http://aladjs.cn/antd.css"></link>
            <link rel="stylesheet" href="https://cdn.bootcdn.net/ajax/libs/quill/2.0.0-dev.4/quill.snow.min.css"></link>
            </head>
            <body>
            <div id="root"><Index /></div>
            </body>
        <script src="/component/index.js"></script>
        <script src="https://cdn.bootcdn.net/ajax/libs/quill/2.0.0-dev.4/quill.min.js"></script>
        </html>
    );
}
module.exports = Template;