let mongoose = require('mongoose'),
  Schema = mongoose.Schema

mongoose.connect('mongondb://localhost:27017/mongotest')
mongoose.connection.on('open', () => {
  console.log('mongoose connected.')
})
let Account = new Schema({
  username: { type: String },
  dete_created: { type: Date, default: Date.now()},
  visits: { type: Number, default: 0 },
  active: { type: Boolean, default: false }
})
let AccountModel = mongoose.model('Account', Account) // 把Account做为'Account'模式
let newUser = new AccountModel({ username: 'randomUser' })

console.log(newUser.username)
console.log(newUser.date_created)
console.log(newUser.visits)
console.log(newUser.active)
