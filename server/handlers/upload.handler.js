const fs = require('fs')
const Path = require('path')
// 上传图片功能handler
const handleFileUpload = (file, name) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(Path.resolve(__dirname,`../public/${name}.jpg`), file, err => {
       if (err) {
        reject(err)
       }
       resolve({ headUrl : `http://192.168.253.6:3000/v1/chili/${name}.jpg`})
    })
  })
}
module.exports = handleFileUpload