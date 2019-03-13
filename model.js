// let mongoose = require('mongoose'),
//   Schema = mongoose.Schema

// mongoose.connect('mongondb://localhost:27017/mongotest')
// mongoose.connection.on('open', () => {
//   console.log('mongoose connected.')
// })
// let Account = new Schema({
//   username: { type: String },
//   dete_created: { type: Date, default: Date.now()},
//   visits: { type: Number, default: 0 },
//   active: { type: Boolean, default: false }
// })
// let AccountModel = mongoose.model('Account', Account) // 把Account做为'Account'模式
// let newUser = new AccountModel({ username: 'randomUser' })

// console.log(newUser.username)
// console.log(newUser.date_created)
// console.log(newUser.visits)
// console.log(newUser.active)



// 使用mongoose连接mongodb,并导出mongoose对象
var mongoose = require('mongoose'),
  DB_URL = 'mongodb://localhost:27017/mongoosesample'

mongoose.connect(DB_URL, {useNewUrlParser:true})
mongoose.connection.on('connected', () => {
  console.log('Mongoose connection open to ' + DB_URL)
})

mongoose.connection.on('error',function (err) {    
    console.log('Mongoose connection error: ' + err);  
});    

mongoose.connection.on('disconnected', function () {    
    console.log('Mongoose connection disconnected');  
});    

module.exports = mongoose