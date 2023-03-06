import { Selector, Role } from 'testcafe'
import receiptReport2API from '../2-api'
const dataSet = require("../data.json")
// console.log('結帳交班表', dataSet)
// console.log('結帳交班表', receiptReport2API)

// ? Hix登入操作 名稱＆密碼＆登入 hixadmin / Hix1234
const signInBasicDOM = Selector('#app').child('div').child('div').child('div').child('div').nth(1).child('form')
const userName = signInBasicDOM.child('div').nth(0).child('input')
const userPassword = signInBasicDOM.child('div').nth(1).child('div').nth(0).child('input')
const signInButton = signInBasicDOM.child('button')

// ? 角色登入確認
const confirmUserBasicDOM = Selector('html').child('body').child('div').child('div').child('div').child('div').nth(0).child('div').nth(1).child('div').nth(3)
const confirmUser = confirmUserBasicDOM.child('span')
const confirmUserName = confirmUserBasicDOM.child('div').child('div').nth(0).child('div').nth(1).child('div').child('div')

// ? 護理師 登入
const userA = Role('http://test.hixcare.tw/login/signIn', async t => {
  await t
  .typeText(userName, 'A369')
  .typeText(userPassword, 'A369')
  .click(signInButton)
  await t.hover(confirmUser)
  const user = confirmUserName.innerText
  await t.expect(user).eql('詹喬齡')
})

// ? 結帳交班表
const receiptReportButton = Selector('span').withText("結帳交班表")

// ? 開始＆結束日期
const dateFromBasicDOM = Selector('#app').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(0).child('div').child('div').nth(1).child('div').child('div').child('section').child('div').child('div').child('div').nth(0).child('div').nth(1).child('div')
const dateFromButton = dateFromBasicDOM.child('label')
//! 0-6 (日到六) (第三週)
// const dateFromValue = dateFromBasicDOM.child('div').child('div').child('div').child('div').nth(1).child('div').nth(2).child('div').nth(3).child('div').nth(2).child('span')
//! 0-6 (日到六) (第二週)
const dateFromValue = dateFromBasicDOM.child('div').child('div').child('div').child('div').nth(1).child('div').nth(2).child('div').nth(1).child('div').nth(1).child('span')

// ? 資料群組
const baseGroupRuleDOM = Selector('#app').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(0).child('div').child('div').nth(1).child('div').child('div').child('section').child('div').child('div').child('div').nth(5).child('div').nth(1).child('div')

// ? 顯示方式
const showBaseGroupRuleDOM = Selector('#app').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(0).child('div').child('div').nth(1).child('div').child('div').child('section').child('div').child('div').child('div').nth(6).child('div').nth(1)
// /html/body/div/div/div/div[3]/div/div/div/div/div/div/div/div/div/div[1]/div/div[2]/div/div/section/div/div/div[7]/div[2]/div/div[1]/label/span
// 日期加總
// const groupRule22 = baseGroupRuleDOM2.child('div').child('div').nth(1).child('label').child('span')
// // 人員加總
// const groupRule23 = baseGroupRuleDOM2.child('div').child('div').nth(2).child('label').child('span')
// // 時段加總
// const groupRule32 = baseGroupRuleDOM2.child('div').child('div').nth(1).child('label').child('span')

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

fixture('進入結帳交班表')
  .page('http://test.hixcare.tw/dashboard').skipJsErrors()

//! 使用資料帶動測試
dataSet.forEach((data, index) => {
  // 取得 每筆測試資料
  const { name, accountingShiftIds, groupRuleIndex, groupRuleValue, showGroupRuleIndex, showGroupRuleValue } = data
  console.log(index, name, accountingShiftIds, groupRuleIndex, groupRuleValue, showGroupRuleIndex, showGroupRuleValue)
  // 取得 開始日期 DOM
  // 取得 時段別 DOM
  // 取得 資料群組 DOM
  const groupRule = baseGroupRuleDOM.child('div').nth(groupRuleIndex).child('label').child('span')
  // 取得 顯示方式 DOM
  const showGroupRule = showBaseGroupRuleDOM.child('div').child('div').nth(showGroupRuleIndex).child('label').child('span')
  
  // ! test.skip ＝ 跳過此測試區域指令
  test(`${name}`, async t => {
    // ? 1-護理長登入
    await t.useRole(userA)
    // ? 2-進入結帳交班表
    await t
      .click(receiptReportButton)
      // ? 3-日期
      .click(dateFromButton)
      // ? 4-選日期區間 12/20-當日
      .click(dateFromValue)
      // ? 5-資料群組 動態點選
      .click(groupRule)
      // ? 6-顯示方式 動態點選
      .click(showGroupRule)
      // ? 7-預覽
      .click(Button)

    // console.log('不設定+明細~~~~~~~~~~', groupRuleValue)
    // TODO: 8-丟參數給API & API 回應值符合 JSON Schema
    if (showGroupRuleValue === "時段加總") {
      const get = await receiptReport2API(accountingShiftIds, groupRuleValue, showGroupRuleValue)
      console.log('get', get)
      // TODO: 抓 上午小計......
      // 取 畫面小計、總計
      // console.log('【掛號批價】', await reportReportItemSummary.innerText)
      // TODO: 9-比對 預覽的合計＆小計值與 API 回傳值
      // await t.expect(await reportReportItemSummary.innerText).eql(`${get.reportReportItemSummary}`, '【掛號批價】小計值錯誤')
    }
    // ? 8-丟參數給API
    if (showGroupRuleValue === "明細") {
      const get = await receiptReport2API(accountingShiftIds, groupRuleValue, showGroupRuleValue)
      // console.log('get', get)
      // 取 畫面小計、總計
      // console.log('【掛號批價】', await reportReportItemSummary.innerText)
      // console.log('【押金】', await receiptDepositItemSummary.innerText)
      // console.log('【門診自費/代收】', await receiptSelfBehalfItemSummary.innerText)
      // console.log('【自費購物】', await ecReportItemSummary.innerText)
      // console.log('實收合計', await totalReceiptSummary.innerText)
      // ? 9-比對 預覽的合計＆小計值與 API 回傳值
      await t.expect(await reportReportItemSummary.innerText).eql(`${get.reportReportItemSummary}`, '【掛號批價】小計值錯誤')
      await t.expect(await receiptDepositItemSummary.innerText).eql(`${get.receiptDepositItemSummary}`, '【押金】小計值錯誤')
      await t.expect(await receiptSelfBehalfItemSummary.innerText).eql(`${get.receiptSelfBehalfItemSummary}`, '【門診自費/代收】小計值錯誤')
      await t.expect(await ecReportItemSummary.innerText).eql(`${get.ecReportItemSummary}`, '【自費購物】小計值錯誤')
      await t.expect(await totalReceiptSummary.innerText).eql(`${get.totalReceiptSummary}`, '實收合計值錯誤')
    }
  })
})

// TODO: 自動化測試程式要通過語法檢查 (npm run lint)
