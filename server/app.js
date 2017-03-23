'use strict'

const express   = require('express')
const app       = express()

// RESOURCES
// const imagebox    = require('./routes/imagebox')
const api         = require('./routes/api')

//
app.use(function(req, res, next) {
    res.set({
        'Access-Control-Allow-Origin': '*'
    })
    next()
})
app.use(express.static(__dirname + '/public'));

// APIS
// app.get('/imagebox', imagebox.upload)
// app.get('/readapi', api.requestApi)
app.get('*', (req, res) => {res.sendFile(__dirname + '/public/index.html')})

app.listen(3000, () => {
  console.log('Node app is running on port:', 3000);

  // 注册全局未捕获异常处理器
  process.on('uncaughtException', function(err) {
    console.error("Caught exception:", err.stack);
  });
  process.on('unhandledRejection', function(reason, p) {
    console.error("Unhandled Rejection at: Promise ", p, " reason: ", reason.stack);
  });
})
