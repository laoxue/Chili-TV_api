const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// 定义一个模式 电影列表
var FilmModelSchema = new Schema({
    yingheader: {type:Object},
    yincontent:  {type:Array},
    yintou: {type:Array}
}, {collection: "filmlists"});

module.exports = Film = mongoose.model('Filmlist', FilmModelSchema);