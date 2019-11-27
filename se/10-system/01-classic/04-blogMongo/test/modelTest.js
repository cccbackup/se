const ok = require('assert').ok
const M = require('../model')

describe('Blog 資料庫 Model 測試', function() {
  before(function() {
  })
  after(function() {
    M.clear()
    M.close()
  })

  describe('', function() {
    it('開啟資料庫', async function() {
      await M.open()
    })
    
    it('貼一篇文章', async function() {
      let post1 = await M.add({title: '貼文 1', body: '內容 1'})
      console.log(post1)
      let rpost1 = await M.get(post1._id.id)
      ok(rpost1._id.equals(post1._id))
    })

    it('列出文章', async function() {
      let posts = await M.list()
      console.log('posts=', posts)
      ok(posts.length > 0)
    })
  })
})
