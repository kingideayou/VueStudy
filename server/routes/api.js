'use strict'

const AV           = require('../config').AV
const http         = require('http')
const https        = require('https')
const request      = require('request')

const getStoryList = function(uri, res) {
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

const getStoryDetail = function(uri, res) {
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

  if (url.includes('latest')) {//获取文章列表
    getStoryList(url, res)
  } else {
    getStoryDetail(url, res)
  }
}
