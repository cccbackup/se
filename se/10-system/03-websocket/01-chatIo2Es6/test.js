const ok = require('assert').ok
const app = require('./app')
const puppeteer = require('puppeteer')
var browser, page1, page2

const opts = {
  // headless: false,
  slowMo: 10,
  timeout: 10000
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

describe('Socket.io 簡易聊天系統，使用 Puppeteer 測試', function() {
  before (async function () {
    browser = await puppeteer.launch(opts)
    page1 = await browser.newPage()
    page2 = await browser.newPage()
  })
  after(function() {
    browser.close()
    app.close()
  })

  describe('測試聊天訊息是否有同步更新', function() {
    var cccMsg1 = 'Hello! I am ccc.'
    var snoopyMsg1 = 'Hello! I am snoopy.'
    it('兩位使用者 ccc 與 snoopy 進入聊天室', async function() {
      await page1.goto('http://localhost:3000', {waitUntil: 'domcontentloaded'})
      await page2.goto('http://localhost:3000', {waitUntil: 'domcontentloaded'})
    })
    it('ccc 填入姓名並發送 hello 訊息，確認是否雙方都看到該訊息！', async function() {
      await page1.focus('#user')
      await page1.keyboard.type('ccc')
      await page1.focus('#msg')
      await page1.keyboard.type(cccMsg1)
      await sleep(500)
      await page1.click('#send')

      await sleep(500)
      
      let html1 = await page1.content()
      ok(html1.indexOf(cccMsg1) >= 0)
      
      let html2 = await page2.content()
      ok(html2.indexOf(cccMsg1) >= 0)
    })
    it('snoopy 填入姓名並發送 hello 訊息，確認是否雙方都看到該訊息！', async function() {
      await page2.focus('#user')
      await page2.keyboard.type('snoopy')
      await page2.focus('#msg')
      await page2.keyboard.type(snoopyMsg1)
      await sleep(500)
      await page2.click('#send')

      await sleep(500)

      let html1 = await page1.content()
      ok(html1.indexOf(snoopyMsg1) >= 0)
      
      let html2 = await page2.content()
      ok(html2.indexOf(snoopyMsg1) >= 0)
    })
  })
})
