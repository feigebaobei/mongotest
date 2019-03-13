var User = require('./user.js')
function insert() {
  var user = new User({
    username: 'Tracy McGrady',
    userpwd: 'abcd',
    userage: 37,
    logindate: new Date()
  })
  user.save(function (err, res) {
    if (err) {
      console.log('Error: ' + err)
    } else {
      console.log(`res: ${res}`)
    }
  })
}
// insert()

function update() {
  var whereStr = {'username': 'Tracy McGrady'}
  var updateStr = {'userpwd': 'xxxx'}
  User.updateOne(whereStr, updateStr, (err, res) => {
    if (err) {
      console.log(`Error: ${err}`)
    } else {
      console.log(`Res: ${res}`)
    }
  })
}
// update()

function findByIdAndUpdate () {
  var id = '5c88b79260898f19784e5733'
  var updateStr = {'userpwd': 'aaa'}
  User.findByIdAndUpdate(id, updateStr, (err, res) => {
    if (err) {
      console.log(`Error: ${err}`)
    } else {
      console.log(`Res: ${res}`)
    }
  })
}
// findByIdAndUpdate()

function del () {
  var whereStr = {'username': 'Tracy McGrady'}
  User.remove(whereStr, (err, res) => {
    if (err) {
      console.log(`Error: ${err}`)
    } else {
      console.log(`Res: ${res}`)
    }
  })
}
// del()

function getByCondition () {
  var whereStr = {'username': 'Tracy McGrady'}
  var opt = {'username': 1, '_id': 0}
  User.find(whereStr, opt, (err, res) => {
    if (err) {
      console.log(`Error: ${err}`)
    } else {
      console.log(`Res: ${res}`)
    }
  })
}
getByCondition()

