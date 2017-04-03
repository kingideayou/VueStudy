'use strict'

const AV           = require('../config').AV
const http         = require('http')
const https        = require('https')
const request      = require('request')

const ERROR_CODE = {
    1: {
        code: 1,
        message: 'Invailed Url'
    },
    2: {
        code: 2,
        message: 'Invailed Image'
    },
    3: {
        code: 3,
        message: 'Invailed extension'
    },
    4: {
        code: 4,
        message: 'Image too large'
    },
    5: {
        code: 5,
        message: 'read file error'
    },
    6: {
        code: 6,
        message: 'Timeout'
    }
}

const getData = function (uri) {
  let promise = new AV.Promise()
  let client = http

  if (/^https:\/\//.test(uri)) {
      client = https
  } else if (!/^http:\/\//.test(uri)){
      promise.reject(ERROR_CODE[1])
      return promise
  }

  request({
          url: uri,
          json: true
      }, (err, response, data) => {
          if (!err && response.statusCode === 200) {
              promise.resolve(data)
          } else {
              promise.reject(ERROR_CODE[6])
          }
  })

  return promise
}

const getStoryList = function(uri) {
  let query = new AV.Query('ZhihuDailyApi')
  query
      .equalTo('apiUrl', uri)
      .first()
      .then(data => {
        if (data) {
          console.log(data);
          console.log(data.get('json'));
          console.log(data.id);
          return res.send({
            code: 200,
            data: JSON.parse(data.get('json'))
          })
        } else {
          console.log('getStoryList data is null');
        }
      })
      .catch(function (err) {
        res.send('getStoryList 从 LeanCloud 拉取信息失败')
      })
}

const getStoryDetail = function(uri) {
  let query = new AV.Query('ZhihuDaily')
  query
      .equalTo('url', 'http://news-at.zhihu.com/api/4/news/9325179')
      .first()
      .then(data => {
        if (data) {
          console.log(data);
          console.log(data.get('content'));
          console.log(data.id);
          return res.send({
            code: 200,
            data: JSON.parse(data.get('content'))
          })
        } else {
          console.log('getStoryDetail data is null');
        }
      })
      .catch(function (err) {
        res.send('getStoryList 从 LeanCloud 拉取信息失败')
      })
}

module.exports.getJsonFromApi = function(req, res) {
  console.log(req.query.uri);
  let url = req.query.uri;
  getData(url)
    .then(data => {
      console.log(data);
      res.send(data).end()
    })
    .catch(err => { res.send(ERROR_CODE[1]) })
  /*
  if (url.includes('latest')) {//获取文章列表
    getStoryList(url)
          .then(data => {
            console.log(data);
            res.send(data).end()
          })
          .catch(err => { res.send(ERROR_CODE[1]) })
  } else {
    getStoryDetail(url, res)
  }
  */
}
