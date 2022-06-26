const mongo = require("mongodb");
const client = new mongo.MongoClient("mongodb+srv://root:z0z0159159@rydercluster.9ooyb5o.mongodb.net/?retryWrites=true&w=majority");
client.connect(async function (err){
  if(err){
    console.log('連線失敗',err)
    return
  }
  console.log('連線成功',err)
  
  // 操作資料庫和集合
  let db = client.db("myWebsite")
  let collection = db.collection("user")

  // 新增單一資料
  // let result = await collection.insertOne({
  //   email:'newTest@gmail.com',
  //   password:'z0z0159159',
  //   level:1
  // })
  // 新增多比資料
  let result = await collection.insertMany([
    {
    email:'aaa@gmail.com',
    password:'aa',
    level:1
    },
    {
      email:'bbb@gmail.com',
      password:'bb',
      level:2
    },
    {
      email:'CCC@gmail.com',
      password:'CC',
      level:3
    },
  ])
  // 新增單一資料時回傳 id
  console.log('新增成功',result.insertedId);
  // 新增單一資料時回傳複數 id
  console.log('新增成功',result.insertedIds);

  client.close()
})
