// ! testcafe --speed 0.8 chrome hix.js --live
import { Selector, Role } from 'testcafe'
import receiptReport2API from './2-api'

const dataSet = require("./data.json")
// console.log('結帳交班表', dataSet)
// console.log('結帳交班表', receiptReport2API)

// ? Hix登入操作 hixadmin / Hix1234
// 使用者名稱
const userName = Selector('#app').child('div').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(0).child('input')
// 密碼
const userPassword = Selector('#app').child('div').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(1).child('div').nth(0).child('input')
// 系統日期
const date1 = Selector('#app').child('div').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(2).child('div').child('label')
// 指定日期
const date2 = Selector('div').withAttribute("aria-label", "2022年11月21日 星期一")
// 帳務時段
const time1 = Selector('#app').child('div').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(3).child('select')
// 指定時段
const time2 = Selector('#app').child('div').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(3).child('select').child('option').nth(2)
// 站別
const index1 = Selector('#app').child('div').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(4).child('select')
// 指定站別
const index2 = Selector('#app').child('div').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(4).child('select').child('option').nth(2)
// 選擇入口頁面
const p = Selector('#app').child('div').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(5).child('div')
// 登入
const signInButton = Selector('#app').child('div').child('div').child('div').child('div').child('div').nth(1).child('form').child('button')

// ? 角色登入確認
const confirmUser = Selector('html').child('body').child('div').child('div').child('div').child('div').nth(0).child('div').nth(1).child('div').nth(3).child('span')
const confirmUserName = Selector('html').child('body').child('div').child('div').child('div').child('div').nth(0).child('div').nth(1).child('div').nth(3).child('div').child('div').nth(0).child('div').nth(1).child('div').child('div')

// 護理師 登入
const userA = Role('http://test.hixcare.tw/login/signIn', async t => {
  // ? Hix登入操作
  await t
  .typeText(userName, 'A369')
  .typeText(userPassword, 'A369')
  .click(signInButton)
  // ? 角色登入確認
  await t.hover(confirmUser)
  const user = confirmUserName.innerText
  await t.expect(user).eql('詹喬齡')
})

// ? 結帳交班表
const receiptReportButton = Selector('span').withText("結帳交班表")
const dateFromButton1 = Selector('#app').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(0).child('div').child('div').nth(1).child('div').child('div').child('section').child('div').child('div').child('div').nth(0).child('div').nth(1).child('div').child('label')
const dateFromButton2 = Selector('#app').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(0).child('div').child('div').nth(1).child('div').child('div').child('section').child('div').child('div').child('div').nth(0).child('div').nth(1).child('div').child('div').child('div').child('div').child('div').nth(1).child('div').nth(2).child('div').nth(3).child('div').nth(2).child('span')

// ? 資料群組
const baseGroupRuleDOM = Selector('#app').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(0).child('div').child('div').nth(1).child('div').child('div').child('section').child('div').child('div').child('div').nth(5).child('div').nth(1).child('div')

const groupRule1 = baseGroupRuleDOM.child('div').nth(0).child('label').child('span')
// 日期
const groupRule2 = baseGroupRuleDOM.child('div').nth(1).child('label').child('span')
// 日期+時段
const groupRule3 = baseGroupRuleDOM.child('div').nth(2).child('label').child('span')

// ? 顯示方式
const baseGroupRuleDOM2 = Selector('#app').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(0).child('div').child('div').nth(1).child('div').child('div').child('section').child('div').child('div').child('div').nth(6).child('div').nth(1)
// 日期加總
const groupRule22 = baseGroupRuleDOM2.child('div').child('div').nth(1).child('label').child('span')
// 人員加總
const groupRule23 = baseGroupRuleDOM2.child('div').child('div').nth(2).child('label').child('span')
// 時段加總
const groupRule32 = baseGroupRuleDOM2.child('div').child('div').nth(1).child('label').child('span')

// ? 按鈕預覽
const Button = Selector('#app').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(0).child('div').child('div').nth(0).child('div').child('button').nth(1).child('span')

//? 掛號小計 /html/body/div/div/div/div[3]/div/div/div/div/div/div/div/div/div/div[2]/div[2]/div/div/table[4]/tbody/tr/td[3]/span[5]
//? 押金小計 /html/body/div/div/div/div[3]/div/div/div/div/div/div/div/div/div/div[2]/div[2]/div/div/table[4]/tbody/tr/td[3]/span[5]
//? 門診小計 /html/body/div/div/div/div[3]/div/div/div/div/div/div/div/div/div/div[2]/div[2]/div/div/table[6]/tbody/tr/td[3]/span[5]
//? 自費小計 /html/body/div/div/div/div[3]/div/div/div/div/div/div/div/div/div/div[2]/div[2]/div/div/table[8]/tbody/tr/td[3]/span[5]
//? 總計 /html/body/div/div/div/div[3]/div/div/div/div/div/div/div/div/div/div[2]/div[2]/div/div/table[9]/tbody/tr[5]/td[9]/span
const baseTotalDOM = Selector('#app').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(1).child('div').nth(1).child('div').child('div')
const reportReportItemSummary = baseTotalDOM.child('table').nth(1).child('tbody').child('tr').child('td').nth(2).child('span').nth(4)
const receiptDepositItemSummary = baseTotalDOM.child('table').nth(3).child('tbody').child('tr').child('td').nth(2).child('span').nth(4)
const receiptSelfBehalfItemSummary = baseTotalDOM.child('table').nth(5).child('tbody').child('tr').child('td').nth(2).child('span').nth(4)
const ecReportItemSummary = baseTotalDOM.child('table').nth(7).child('tbody').child('tr').child('td').nth(2).child('span').nth(4)
const totalReceiptSummary = baseTotalDOM.child('table').nth(8).child('tbody').child('tr').nth(4).child('td').nth(8).child('span')

// TODO: 區間
// 開始日期
// /html/body/div[1]/div/div/div[3]/div/div/div/div/div/div/div/div/div/div[1]/div/div[2]/div/div/section/div/div/div[1]/div[2]/div/label
// 結束日期
// /html/body/div[1]/div/div/div[3]/div/div/div/div/div/div/div/div/div/div[1]/div/div[2]/div/div/section/div/div/div[2]/div[2]/div/label

// TODO: 時段
// All
// /html/body/div[1]/div/div/div[3]/div/div/div/div/div/div/div/div/div/div[1]/div/div[2]/div/div/section/div/div/div[3]/div[2]/div[1]/label
// AM
// /html/body/div[1]/div/div/div[3]/div/div/div/div/div/div/div/div/div/div[1]/div/div[2]/div/div/section/div/div/div[3]/div[2]/div[2]/div[1]/input
// PM
// /html/body/div[1]/div/div/div[3]/div/div/div/div/div/div/div/div/div/div[1]/div/div[2]/div/div/section/div/div/div[3]/div[2]/div[2]/div[2]/input
// EVENING
// /html/body/div[1]/div/div/div[3]/div/div/div/div/div/div/div/div/div/div[1]/div/div[2]/div/div/section/div/div/div[3]/div[2]/div[2]/div[3]/input

fixture('護理長登入')
  .page('http://test.hixcare.tw/dashboard').skipJsErrors()

//! 使用資料帶動測試
dataSet.forEach((data, index) => {
  // 取得 每筆測試資料
  const { name, groupRuleIndex, groupRuleValue } = data
  console.log(name, groupRuleIndex, groupRuleValue, index)
  // 取得 資料群組 DOM---動態點選
  const groupRule = baseGroupRuleDOM.child('div').nth(groupRuleIndex).child('label').child('span')


  test(`${name}，第`, async t => {
    // ? 1-護理長登入
    await t.useRole(userA)
    await t
      // ? 2-進入結帳交班表
      .click(receiptReportButton)
      // ? 3-日期
      .click(dateFromButton1)
      // ? 4-選日期區間 12/20-當日
      .click(dateFromButton2)
      // ? 5-資料群組---動態點選
      .click(groupRule)
      // ? 6-預覽
      .click(Button)
    // TODO: 7-丟參數給API
    // const groupRule111 = await groupRule1.innerText
    // const groupRule222 = await groupRule2.innerText
    // const groupRule333 = await groupRule3.innerText
    console.log('不設定+明細~~~~~~~~~~', groupRuleValue)
    // TODO: 8-API 回應值符合 JSON Schema
    // 取 API回傳值
    const get = await receiptReport2API(groupRuleValue)
    console.log('get', get)
    // 取 畫面小計、總計
    const reportReportTotal = await reportReportItemSummary.innerText
    const receiptDepositTotal = await receiptDepositItemSummary.innerText
    const receiptSelfBehalfTotal = await receiptSelfBehalfItemSummary.innerText
    const ecReportTotal = await ecReportItemSummary.innerText
    const totalReceipt = await totalReceiptSummary.innerText
    console.log('取小計、總計', reportReportTotal)
    console.log('取小計、總計', receiptDepositTotal)
    console.log('取小計、總計', receiptSelfBehalfTotal)
    console.log('取小計、總計', ecReportTotal)
    console.log('取小計、總計', totalReceipt)
    // TODO: 9-比對 預覽的合計＆小計值與 API 回傳值
    // await t.expect(await reportReportItemSummary.innerText).eql(`${get.reportReportItemSummary}`, '不設定+明細-【掛號批價】小計值錯誤')
    // await t.expect(await receiptDepositItemSummary.innerText).eql(`${get.receiptDepositItemSummary}`, '不設定+明細-【押金】小計值錯誤')
    // await t.expect(await receiptSelfBehalfItemSummary.innerText).eql(`${get.receiptSelfBehalfItemSummary}`, '不設定+明細-【門診自費/代收】小計值錯誤')
    // await t.expect(await ecReportItemSummary.innerText).eql(`${get.ecReportItemSummary}`, '不設定+明細-【自費購物】小計值錯誤')
    // await t.expect(await totalReceiptSummary.innerText).eql(`${get.totalReceiptSummary}`, '不設定+明細-合計值錯誤')
  })
})



// ! test.skip ＝ 跳過此測試區域指令
// ! .wait(1000)
test.skip('結帳交班表--不設定+明細', async t => {
  // ? Hix登入操作
  await t.useRole(userA)
  await t
    // 結帳交班表
    .click(receiptReportButton)
    // 選日期區間
    .click(dateFromButton1)
    // 日期 12/20-當日
    .click(dateFromButton2)
    // 不設定+明細
    // .click(groupRule1)
    // TODO: 動態變動點選
    .click(groupRule).withText(groupRule)
    .click(Button)
    // .wait(1000)  
  // TODO: 丟參數給API
  const groupRule111 = await groupRule1.innerText
  const groupRule222 = await groupRule2.innerText
  const groupRule333 = await groupRule3.innerText
  console.log('不設定+明細~~~~~~~~~~', groupRule111, groupRule222, groupRule333)
  // TODO: API 回應值符合 JSON Schema
  // 取 API回傳值
  const get = await receiptReport2API(groupRule111)
  console.log('get', get)
  // 取 畫面小計、總計
  // const reportReportTotal = await reportReportItemSummary.innerText
  // const receiptDepositTotal = await receiptDepositItemSummary.innerText
  // const receiptSelfBehalfTotal = await receiptSelfBehalfItemSummary.innerText
  // const ecReportTotal = await ecReportItemSummary.innerText
  // const totalReceipt = await totalReceiptSummary.innerText
  // console.log('取小計、總計', reportReportTotal)
  // console.log('取小計、總計', receiptDepositTotal)
  // console.log('取小計、總計', receiptSelfBehalfTotal)
  // console.log('取小計、總計', ecReportTotal)
  // console.log('取小計、總計', totalReceipt)
  // TODO: 比對 預覽的合計＆小計值與 API 回傳值
  await t.expect(await reportReportItemSummary.innerText).eql(`${get.reportReportItemSummary}`, '不設定+明細-【掛號批價】小計值錯誤')
  await t.expect(await receiptDepositItemSummary.innerText).eql(`${get.receiptDepositItemSummary}`, '不設定+明細-【押金】小計值錯誤')
  await t.expect(await receiptSelfBehalfItemSummary.innerText).eql(`${get.receiptSelfBehalfItemSummary}`, '不設定+明細-【門診自費/代收】小計值錯誤')
  await t.expect(await ecReportItemSummary.innerText).eql(`${get.ecReportItemSummary}`, '不設定+明細-【自費購物】小計值錯誤')
  await t.expect(await totalReceiptSummary.innerText).eql(`${get.totalReceiptSummary}`, '不設定+明細-合計值錯誤')
    // 日期+時段+明細
    // .click(Button)
    // .wait(1000)
    // 日期+時段+時段加總
    // .click(groupRule32)
    // .click(Button)
    // .wait(1000)
    // 日期+明細
    // .click(groupRule2)
    // .click(Button)
    // .wait(1000)
    // 日期+日期加總
    // .click(groupRule22)
    // .click(Button)
    // .wait(1000)
    // 日期+人員加總
    // .click(groupRule23)
    // .click(Button)
})

// TODO: 自動化測試程式要通過語法檢查 (npm run lint)
