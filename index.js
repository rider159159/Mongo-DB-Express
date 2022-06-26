// const fs = require("fs")

// // Argument-1 讀取檔案，Argument-2 讀取編碼 ，
// fs.readFile("./test",{ encoding:"utf-8"},function(err,data){
//   if(err){
//     console.log('讀取失敗')
//   }else{
//     console.log('讀取成功，資料:',data)
//   }
// })

// // Argument-1 寫入檔案，Argument-2 寫入內容，Argument-3 寫入含式判斷
// fs.writeFile("./test","Hello Writing File", function(err){
//   if(err){
//     console.log('寫入失敗')
//   }else{
//     console.log('寫入失敗')
//   }
// })

const express = require('express')
const app = express()
const session = require('express-session')

//使用 session 
app.use(session({
  // 任何文字
  secret:'RyderAnything',
  resave :false,
  saveUninitialized:true
}))

// 設定樣板引擎 Ag1 區分方法，Ag2 設定引入樣板字面為何 
app.set('view engine','ejs')
// 匯出樣板引擎檔案 Ag1 區分方法，Ag2 設定樣板字面檔案在哪 
app.set("views","./views")


// 使用靜態網址
app.use(express.static('public'))

//首頁
app.get("/",function(req,res){
  // res.send('hello')
  // console.log('主機名稱',req.hostName)
  // console.log('通訊協定',req.protocol)

  // console.log('使用者代理',req.get('user-agent'))
  // console.log('偏好語言',req.get('accept-language'))
  const sessionCityName = { 'sessionCityName':req.session.sessionCityName}
  // const lang = req.get('accept-language')
  // if(lang.startsWith('en')){

  //   res.send('hello homePage')
  // }else{
  //   res.send('你好這是首頁，曾經查詢過 '+sessionCityName)
  // }
  res.render('home.ejs',sessionCityName)
})
// 設定路徑
app.get("/get",function(req,res){
  const name = req.query.city
  // 取出使用者查詢城市名稱
  req.session.sessionCityName = name
  let data = { cityName:"台北",cityNum: 300 }

  if(name === 'taipei'){
    res.render('city.ejs',data)
  }else if(name === 'taoyuan'){
    data = {cityName:"桃園",cityNum: 150 }
    res.render('city.ejs',data)
  }else{
    // 重新導向
    res.redirect('/')
    // res.send('目前沒資料')
  }
  // res.send('get')
})

app.listen(3000,function(){
  console.log('serve running')
})
