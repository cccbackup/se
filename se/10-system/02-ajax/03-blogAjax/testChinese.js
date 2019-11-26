const ok = require('assert').ok
const app = require('./app');
const puppeteer = require('puppeteer');
var browser, page

const opts = {
  headless: false,
  slowMo: 10,
  timeout: 10000
};

describe('AJAX 型網誌系統', function() {
  before (async function () {
    browser = await puppeteer.launch(opts);
    page = await browser.newPage();
  });
  after(function() {
    browser.close();
    app.close();
  });

  describe('使用 Puppeteer 測試貼文功能', function() {
    it('發出 GET / 應該會看到目前沒有任何貼文', async function() {
      await page.goto('http://localhost:3000', {waitUntil: 'domcontentloaded'})
      let html = await page.content()
      ok(html.indexOf('<p>You have <strong>0</strong> posts!</p>') >= 0)
    })
    it('按下 #createPost 按鈕，應該會進入 New Post 畫面', async function() {
      await page.click('#createPost')
      let html = await page.content()
      ok(html.indexOf('<h1>New Post</h1>') >= 0)
    })
    it('填好一筆資料 {title:"貼文標題 1", body:"貼文內容 1"} 後按下儲存鈕', async function() {
      await page.focus('#title')
      await page.keyboard.type('貼文標題 1')
      await page.focus('#body')
      await page.keyboard.type('貼文內容 1')
      await page.click('#savePost')
    })
    it('should see <p>You have <strong>1</strong> posts!</p>', async function() {
      let html = await page.content()
      ok(html.indexOf('<p>You have <strong>1</strong> posts!</p>') >= 0)
    })
    it('should see <p>You have <strong>1</strong> posts!</p>', async function() {
      await page.click('#show0')
      let html = await page.content()
      ok(html.indexOf('<h1>貼文標題 1</h1>') >= 0) 
    })
  })
})
