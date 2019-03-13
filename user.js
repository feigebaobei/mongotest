// 引入mongoose对象。定义Schema.
var mongoose = require('./model.js')
var Schema = mongoose.Schema
var UserSchema = new Schema({
  username: {type: String, index: true},
  userpwd: {type: String},
  userage: {type: Number},
  logindate: {type: Date, default: Date.now()}
})

module.exports = mongoose.model('User', UserSchema)