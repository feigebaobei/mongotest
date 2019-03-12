let MongoClient = require('mongodb').MongoClient,
  mongoose = require('mongoose'),
  Schema = mongoose.Schema
// 连接mongodb
MongoClient.connect('mongodb://localhost:27017/mongotest', {useNewUrlParser:true}, function (err, client) {
  console.log('Connected to MongoDB!')
  // console.log(client, 'client')
  // let db = client.db('testing')
  // db.collection('user').insertOne({'title': 'Snowcrash'}, (err, result) => {
  //   result.findOne({title: 'Snowcrash'}, function (err, doc) {
  //     console.log(doc._id + ' - ' + doc.titile)
  //   })
  //   client.close()
  // })

  // 创建数据库
  let students = client.db('students')
  // // 创建集合
  // students.createCollection('site', function (err, res) {
  //   console.log('创建集合')
  //   client.close()
  // })

  // // 插入一条数据
  // let objOnly = {name: 'top', url: 'www.top.com'}
  // let objOnly = {name: 'gg3', url: 'www.top.com'}
  // students.collection('site').insertOne(objOnly, (err, res) => {
  //   console.log('insertOne')
  //   client.close()
  // })

  // // 插入多条数据
  // let objMany = [
  //   {name: 'gg0', url: 'www.gg0.com'},
  //   {name: 'gg1', url: 'www.gg1.com'},
  //   {name: 'gg2', url: 'www.gg2.com'}
  // ]
  // students.collection('site').insertMany(objMany, (err, res) => {
  //   console.log('insertMany')
  //   client.close()
  // })

  // 查询数据
  // students.collection('site').find({}).toArray((err, res) => {
  //   console.log(res)
  //   client.close()
  // })
  // students.collection('site').find({'name': 'gg0'}).toArray((err, res) => {
  //   console.log(res)
  //   client.close()
  // })

  // update
  // students.collection('site').updateOne({name: 'gg0'}, {$set: {url: 'https://www.gg0.com'}}, (err, res) => {
  //   console.log('update')
  //   client.close()
  // })

  // del
  // students.collection('site').deleteOne({name: 'gg1'}, (err, res) => {
  //   console.log(res)
  //   client.close()
  // })

  // order
  // 以name字段排序.1:升序.-1降序
  // students.collection('site').find({name: 'top'}).sort({url: -1}).toArray((err, res) => {
  //   console.log(res)
  //   client.close()
  // })

  // 分页
  // students.collection('site').find({name: 'top'}).sort({url: -1}).skip(2).limit(2).toArray((err, res) => {
  //   console.log(res)
  //   client.close()
  // })

  // product
  // students.collection('order').insertOne({status: 1, product_id: 154}, (err, res) => {
  //   console.log(res)
  //   client.close()
  // })
  // students.collection('product').insertMany([{_id: 154, name: '笔记本电脑'},{_id: 155, name: '耳机'},{_id: 156, name: '台式电脑'}], (err, res) => {
  //   console.log(res)
  //   client.close()
  // })

  // 左连接
  // students.collection('order').aggregate([
  //   {$lookup: {
  //     from: 'product', // 右集合
  //     localField: 'product_id', // 左集合join字段
  //     foreignField: '_id', // 右集合join字段
  //     as: 'orderdetails' // 新生成的字段(类型Array)
  //   }}
  // ]).toArray((err, res) => {
  //   console.log(res)
  //   client.close()
  // })

  let Account = new Schema({
    username: {type: String},
    date_created: {type: Date, default: Date.now()},
    visits: {type: Number, default: 0},
    active: {type: Boolean, default: false}
  })

})