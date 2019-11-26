// const kdd = require('kdd')
const ok = require('assert').ok
const app = require('./app')
const server = app.listen()
const request = require('supertest').agent(server)

describe('Blog 網誌系統', function() {
  after(function() {
    server.close()
  })

  describe('使用個案：貼文功能測試', function() {
    it('發出 GET / 請求: 應該會看到貼文列表 Posts 中沒有任何貼文', function(done) {
      request
      .get('/')
      .expect(200, function(err, res) {
        if (err) return done(err)
        ok(res.text.indexOf('<title>Posts</title>') >= 0)
        ok(res.text.indexOf('<p>You have <strong>0</strong> posts!</p>') >= 0)
        done()
      })
    })

    it('發出 POST /post/new 請求儲存貼文後，應該會導回根目錄 /', function(done) {
      request
      .post('/post')
      .send({title: '測試貼文 1', body: '測試貼文 1 的內容'})
      .end(function(err, res) {
        if (err) return done(err)
        ok(res.headers.location == '/')
        done()
      })
    })

    it('發出 GET /post/0 請求，應該會看到剛剛儲存的那則貼文', function(done) {
      request
      .get('/post/0')
      .expect(200, function(err, res) {
        if (err) return done(err)
        ok(res.header['content-type'].indexOf('html') >= 0)
        ok(res.text.indexOf('<h1>測試貼文 1</h1>') >= 0)
        ok(res.text.indexOf('<p>測試貼文 1 的內容</p>') >= 0)
        done()
      })
    })
  })
})
