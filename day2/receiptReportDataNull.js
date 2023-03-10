import { Selector, Role } from 'testcafe'
import receiptReportAPI from '../receiptReportAPI'
// 參數資料 dataNull
const dataSet = require("../day2/dataNull.json")
// console.log('結帳交班表', dataSet)
// console.log('結帳交班表 receiptReportAPI', receiptReportAPI)

// ! /html/body/div[1]/div = Selector('#app')
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
// ? 日期
const dateFromBasicDOM = Selector('#app').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(0).child('div').child('div').nth(1).child('div').child('div').child('section').child('div').child('div').child('div').nth(0).child('div').nth(1).child('div')
const dateFromButton = dateFromBasicDOM.child('label')
// ? 時段別
const accountingShiftDOM = Selector('#app').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(0).child('div').child('div').nth(1).child('div').child('div').child('section').child('div').child('div').child('div').nth(2).child('div').nth(1)
// ?! 櫃位＆人員
// ? 資料群組
const baseGroupRuleDOM = Selector('#app').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(0).child('div').child('div').nth(1).child('div').child('div').child('section').child('div').child('div').child('div').nth(5).child('div').nth(1).child('div')
// ? 顯示方式
const showBaseGroupRuleDOM = Selector('#app').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(0).child('div').child('div').nth(1).child('div').child('div').child('section').child('div').child('div').child('div').nth(6).child('div').nth(1)
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

fixture('進入結帳交班表')
  .page('http://test.hixcare.tw/dashboard').skipJsErrors()

//! 使用 data資料帶動測試
dataSet.forEach((data, index) => {
  // 取得 每筆測試資料
  const { name, dateFromNumber, accountingShiftTestStatus, accountingShiftIndex, accountingShiftIds, groupRuleIndex, groupRuleValue, showGroupRuleIndex, showGroupRuleValue } = data
  console.log(index, name, dateFromNumber, accountingShiftTestStatus, accountingShiftIndex, accountingShiftIds, groupRuleIndex, groupRuleValue, showGroupRuleIndex, showGroupRuleValue)
  // 指定日期
  const dateFromValue = Selector('span').withExactText(dateFromNumber)
  // 取得 時段別 陣列 DOM
  const shiftAllDOM = accountingShiftDOM.child('div').nth(0).child('label')
  const shiftDOM = accountingShiftDOM.child('div').nth(1).child('div').nth(accountingShiftIndex).child('label')
  // 取得 資料群組 陣列 DOM
  const groupRule = baseGroupRuleDOM.child('div').nth(groupRuleIndex).child('label').child('span')
  // 取得 顯示方式 陣列 DOM
  const showGroupRule = showBaseGroupRuleDOM.child('div').child('div').nth(showGroupRuleIndex).child('label').child('span')

  // ! test.skip ＝ 跳過此測試區域指令
  test(`${name}`, async t => {
    await t.useRole(userA) // 護理長登入
    await t
      .click(receiptReportButton) // 進入結帳交班表
      .click(dateFromButton) // 點開日期
      .click(dateFromValue) // 指定日期 動態點選
    if (accountingShiftTestStatus === "alone") {
      await t
        .click(shiftAllDOM) // 取消全選
        .click(shiftDOM) // 選時段 動態點選
      console.log('12333333', await shiftDOM.innerText)
    }
    if (accountingShiftTestStatus === "diverse") {
      await t.click(shiftDOM) // 選時段 動態點選
    }
    await t
      .click(groupRule) // 資料群組 動態點選
      .click(showGroupRule) // 顯示方式 動態點選
      .click(Button) // 預覽

    // console.log('不設定+明細~~~~~~~~~~', groupRuleValue)
    if (showGroupRuleValue === "時段加總") {
      const get = await receiptReportAPI(dateFromNumber, accountingShiftIds, groupRuleValue, showGroupRuleValue)
      console.log('get', get)
    } else if (showGroupRuleValue === "明細") {
      const get = await receiptReportAPI(dateFromNumber, accountingShiftIds, groupRuleValue, showGroupRuleValue)
      // console.log('get', get)
      // 取 畫面小計、總計
      // console.log('【掛號批價】', await reportReportItemSummary.innerText)
      // console.log('【押金】', await receiptDepositItemSummary.innerText)
      // console.log('【門診自費/代收】', await receiptSelfBehalfItemSummary.innerText)
      // console.log('【自費購物】', await ecReportItemSummary.innerText)
      // console.log('實收合計', await totalReceiptSummary.innerText)
      // 比對 預覽的合計＆小計值與 API 回傳值
      await t.expect(await reportReportItemSummary.innerText).eql(`${get.reportReportItemSummary}`, '【掛號批價】小計值錯誤')
      await t.expect(await receiptDepositItemSummary.innerText).eql(`${get.receiptDepositItemSummary}`, '【押金】小計值錯誤')
      await t.expect(await receiptSelfBehalfItemSummary.innerText).eql(`${get.receiptSelfBehalfItemSummary}`, '【門診自費/代收】小計值錯誤')
      await t.expect(await ecReportItemSummary.innerText).eql(`${get.ecReportItemSummary}`, '【自費購物】小計值錯誤')
      await t.expect(await totalReceiptSummary.innerText).eql(`${get.totalReceiptSummary}`, '實收合計值錯誤')
    }
  })
})

// TODO: 自動化測試程式要通過語法檢查 (npm run lint)
