import { Selector, Role } from 'testcafe'
import receiptReportAPI from '../receiptReportAPI'
// 參數資料 dataNull
const dataSet = require("../dataNull3.json")
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
const shiftAllDOM = accountingShiftDOM.child('div').nth(0).child('label') // 時段全選
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

// API參數 ＆ DOM位置控制
const dateFromNumber = "10" // 指定日期
const dateFromValue = Selector('span').withExactText(dateFromNumber) // 日期 DOM 位置
const accountingShift = [ "AM", "PM", "EVENING" ]
const groupRuleValue = [ "null", "DATE", "DATE_SHIFT" ]

fixture('結帳交班表')
.page('http://test.hixcare.tw/dashboard').skipJsErrors()
  .beforeEach(async t => {
    await t
      .useRole(userA) // 護理長登入
      .click(receiptReportButton) // 進入結帳交班表
      .click(dateFromButton) // 點開日期
      .click(dateFromValue) // 指定日期 動態點選
  })
  .afterEach(async t => {
    console.log('------功能OK-----')
  })
  .before(async t => {
    console.log('------開始-----')
  })
  .after(async t => {
    console.log('------結束-----')
  })
  
// ! test.skip only＝ 跳過此測試區域指令
test(`時段全選`, async t => {
  const accountingShiftIndex = -1 // 時段 DOM
  const groupRuleIndex = 0 // 資料群組
  const showGroupRuleIndex = 0 // 顯示方式
  const showGroupRuleValue = "明細"
  const accountingShiftIds = accountingShift.filter(i => i !== accountingShift[accountingShiftIndex])
  const groupRule = baseGroupRuleDOM.child('div').nth(groupRuleIndex).child('label').child('span') // 資料群組
  const showGroupRule = showBaseGroupRuleDOM.child('div').child('div').nth(showGroupRuleIndex).child('label').child('span') // 顯示方式
  await t
    .click(groupRule) // 資料群組 動態點選
    .click(showGroupRule) // 明細
    .click(Button) // 預覽
    .wait(500)
  await t.click(Button) // 預覽
  // API
  const get = await receiptReportAPI(dateFromNumber, accountingShiftIds, groupRuleValue[groupRuleIndex], showGroupRuleValue)
  // 比對 預覽的合計＆小計值與 API 回傳值
  await t.expect(await reportReportItemSummary.innerText).eql(`${get.reportReportItemSummary}`, '【掛號批價】小計值錯誤')
  await t.expect(await receiptDepositItemSummary.innerText).eql(`${get.receiptDepositItemSummary}`, '【押金】小計值錯誤')
  await t.expect(await receiptSelfBehalfItemSummary.innerText).eql(`${get.receiptSelfBehalfItemSummary}`, '【門診自費/代收】小計值錯誤')
  await t.expect(await ecReportItemSummary.innerText).eql(`${get.ecReportItemSummary}`, '【自費購物】小計值錯誤')
  await t.expect(await totalReceiptSummary.innerText).eql(`${get.totalReceiptSummary}`, '實收合計值錯誤')
})

test(`時段單選`, async t => {
  let accountingShiftIndex = 0 // 時段 DOM
  const groupRuleIndex = 0 // 資料群組
  const showGroupRuleIndex = 0 // 顯示方式
  const showGroupRuleValue = "明細"
  while (accountingShiftIndex < 3) {
    const shiftDOM = accountingShiftDOM.child('div').nth(1).child('div').nth(accountingShiftIndex).child('label') // 時段
    const accountingShiftIds = accountingShift.filter(i => i === accountingShift[accountingShiftIndex])
    const groupRule = baseGroupRuleDOM.child('div').nth(groupRuleIndex).child('label').child('span') // 資料群組
    const showGroupRule = showBaseGroupRuleDOM.child('div').child('div').nth(showGroupRuleIndex).child('label').child('span') // 顯示方式
    if (accountingShiftIndex > 0) {
      await t
        .click(shiftAllDOM) // 全選
        .click(shiftAllDOM) // 取消全選
        .click(shiftDOM) // 選時段 動態點選 下午、晚上
      } else {
        await t
        .click(shiftAllDOM) // 取消全選
        .click(shiftDOM) // 選上午
    }
    await t
      .click(groupRule) // 資料群組 動態點選
      .click(showGroupRule) // 明細
      .click(Button) // 預覽
      .wait(1000)
    // API
    const get = await receiptReportAPI(dateFromNumber, accountingShiftIds, groupRuleValue[groupRuleIndex], showGroupRuleValue)
    console.log('API參數', accountingShiftIds, accountingShiftIndex, await shiftDOM.innerText, groupRuleValue[groupRuleIndex], get.reportReportItemSummary, '【掛號批價】', await reportReportItemSummary.innerText)
    // 比對 預覽的合計＆小計值與 API 回傳值
    await t.expect(await reportReportItemSummary.innerText).eql(`${get.reportReportItemSummary}`, '【掛號批價】小計值錯誤')
    await t.expect(await receiptDepositItemSummary.innerText).eql(`${get.receiptDepositItemSummary}`, '【押金】小計值錯誤')
    await t.expect(await receiptSelfBehalfItemSummary.innerText).eql(`${get.receiptSelfBehalfItemSummary}`, '【門診自費/代收】小計值錯誤')
    await t.expect(await ecReportItemSummary.innerText).eql(`${get.ecReportItemSummary}`, '【自費購物】小計值錯誤')
    await t.expect(await totalReceiptSummary.innerText).eql(`${get.totalReceiptSummary}`, '實收合計值錯誤')
    accountingShiftIndex++
  }
})

test(`時段多選`, async t => {
  let accountingShiftIndex = 0 // 時段 DOM
  const groupRuleIndex = 0 // 資料群組
  const showGroupRuleIndex = 0 // 顯示方式
  const showGroupRuleValue = "明細"
  while (accountingShiftIndex < 3) {
    const shiftDOM = accountingShiftDOM.child('div').nth(1).child('div').nth(accountingShiftIndex).child('label') // 時段
    const accountingShiftIds = accountingShift.filter(i => i !== accountingShift[accountingShiftIndex])
    const groupRule = baseGroupRuleDOM.child('div').nth(groupRuleIndex).child('label').child('span') // 資料群組
    const showGroupRule = showBaseGroupRuleDOM.child('div').child('div').nth(showGroupRuleIndex).child('label').child('span') // 顯示方式
    if (accountingShiftIndex > 0) {
      await t
        .click(shiftAllDOM) // 全選
        .click(shiftDOM) // 選時段 動態點選 下午、晚上
    } else {
      await t
        .click(shiftDOM) // 選上午
    }
    await t
      .click(groupRule) // 資料群組 動態點選
      .click(showGroupRule) // 明細
      .click(Button) // 預覽
      .wait(1000)
    // API
    const get = await receiptReportAPI(dateFromNumber, accountingShiftIds, groupRuleValue[groupRuleIndex], showGroupRuleValue)
    console.log('API參數', accountingShiftIds, accountingShiftIndex, await shiftDOM.innerText, groupRuleValue[groupRuleIndex], get.reportReportItemSummary, '【掛號批價】', await reportReportItemSummary.innerText)
    // 比對 預覽的合計＆小計值與 API 回傳值
    await t.expect(await reportReportItemSummary.innerText).eql(`${get.reportReportItemSummary}`, '【掛號批價】小計值錯誤')
    await t.expect(await receiptDepositItemSummary.innerText).eql(`${get.receiptDepositItemSummary}`, '【押金】小計值錯誤')
    await t.expect(await receiptSelfBehalfItemSummary.innerText).eql(`${get.receiptSelfBehalfItemSummary}`, '【門診自費/代收】小計值錯誤')
    await t.expect(await ecReportItemSummary.innerText).eql(`${get.ecReportItemSummary}`, '【自費購物】小計值錯誤')
    await t.expect(await totalReceiptSummary.innerText).eql(`${get.totalReceiptSummary}`, '實收合計值錯誤')
    accountingShiftIndex++
  }
})

// ! test.skip only ＝ 跳過此測試區域指令
test(`資料群組`, async t => {
  let groupRuleIndex = 0 // 資料群組
  const showGroupRuleIndex = 0 // 顯示方式 明細
  const showGroupRuleValue = "明細"
  while (groupRuleIndex < 3) {
    const accountingShiftIds = accountingShift
    const groupRule = baseGroupRuleDOM.child('div').nth(groupRuleIndex).child('label').child('span') // 資料群組
    const showGroupRule = showBaseGroupRuleDOM.child('div').child('div').nth(showGroupRuleIndex).child('label').child('span') // 顯示方式
    await t
      .click(groupRule) // 資料群組 動態點選
      .click(showGroupRule) // 
      .click(Button) // 預覽
      .wait(1000)
    // API
    const get = await receiptReportAPI(dateFromNumber, accountingShiftIds, groupRuleValue[groupRuleIndex], showGroupRuleValue)
    console.log('API參數', groupRuleIndex, showGroupRuleIndex, groupRuleValue[groupRuleIndex], get.reportReportItemSummary, '【掛號批價】', await reportReportItemSummary.innerText)
    // 比對 預覽的合計＆小計值與 API 回傳值
    await t.expect(await reportReportItemSummary.innerText).eql(`${get.reportReportItemSummary}`, '【掛號批價】小計值錯誤')
    await t.expect(await receiptDepositItemSummary.innerText).eql(`${get.receiptDepositItemSummary}`, '【押金】小計值錯誤')
    await t.expect(await receiptSelfBehalfItemSummary.innerText).eql(`${get.receiptSelfBehalfItemSummary}`, '【門診自費/代收】小計值錯誤')
    await t.expect(await ecReportItemSummary.innerText).eql(`${get.ecReportItemSummary}`, '【自費購物】小計值錯誤')
    await t.expect(await totalReceiptSummary.innerText).eql(`${get.totalReceiptSummary}`, '實收合計值錯誤')
    groupRuleIndex++
  }
})

// ! test.skip only ＝ 跳過此測試區域指令
test(`不設定--顯示方式*1`, async t => {
  const groupRuleIndex = 0 // 資料群組 不設定
  const showGroupRuleIndex = 0 // 顯示方式 明細
  const showGroupRuleValue = "明細"
  const accountingShiftIds = accountingShift
  const groupRule = baseGroupRuleDOM.child('div').nth(groupRuleIndex).child('label').child('span') // 資料群組
  const showGroupRule = showBaseGroupRuleDOM.child('div').child('div').nth(showGroupRuleIndex).child('label').child('span') // 顯示方式
  await t
    .click(groupRule) // 資料群組 不設定
    .click(showGroupRule) // 顯示方式 明細
    .click(Button) // 預覽
    .wait(1000)
  // API
  const get = await receiptReportAPI(dateFromNumber, accountingShiftIds, groupRuleValue[groupRuleIndex], showGroupRuleValue)
  console.log('API參數', groupRuleIndex, showGroupRuleIndex, groupRuleValue[groupRuleIndex], get.reportReportItemSummary, '【掛號批價】', await reportReportItemSummary.innerText)
  // 比對 預覽的合計＆小計值與 API 回傳值
  await t.expect(await reportReportItemSummary.innerText).eql(`${get.reportReportItemSummary}`, '【掛號批價】小計值錯誤')
  await t.expect(await receiptDepositItemSummary.innerText).eql(`${get.receiptDepositItemSummary}`, '【押金】小計值錯誤')
  await t.expect(await receiptSelfBehalfItemSummary.innerText).eql(`${get.receiptSelfBehalfItemSummary}`, '【門診自費/代收】小計值錯誤')
  await t.expect(await ecReportItemSummary.innerText).eql(`${get.ecReportItemSummary}`, '【自費購物】小計值錯誤')
  await t.expect(await totalReceiptSummary.innerText).eql(`${get.totalReceiptSummary}`, '實收合計值錯誤')
})

// ! test.skip only ＝ 跳過此測試區域指令
test(`日期--顯示方式*3`, async t => {
  const groupRuleIndex = 1 // 資料群組 日期
  let showGroupRuleIndex = 0 // 顯示方式
  const showGroupRuleValue = [ "明細", "日期加總", "人員加總" ]
  while (showGroupRuleIndex < 3) {
    const accountingShiftIds = accountingShift
    const groupRule = baseGroupRuleDOM.child('div').nth(groupRuleIndex).child('label').child('span') // 資料群組
    const showGroupRule = showBaseGroupRuleDOM.child('div').child('div').nth(showGroupRuleIndex).child('label').child('span') // 顯示方式
    await t
      .click(groupRule) // 資料群組 日期
      .click(showGroupRule) // 顯示方式 
      .click(Button) // 預覽
      .wait(1000)
    // API
    const get = await receiptReportAPI(dateFromNumber, accountingShiftIds, groupRuleValue[groupRuleIndex], showGroupRuleValue[showGroupRuleIndex])
    console.log('API參數', showGroupRuleValue[showGroupRuleIndex], showGroupRuleIndex)
    // 比對 預覽的合計＆小計值與 API 回傳值
    if (showGroupRuleValue[showGroupRuleIndex] === "明細") {
      console.log('【掛號批價】', await reportReportItemSummary.innerText, get.reportReportItemSummary)
      await t.expect(await reportReportItemSummary.innerText).eql(`${get.reportReportItemSummary}`, '【掛號批價】小計值錯誤')
      await t.expect(await receiptDepositItemSummary.innerText).eql(`${get.receiptDepositItemSummary}`, '【押金】小計值錯誤')
      await t.expect(await receiptSelfBehalfItemSummary.innerText).eql(`${get.receiptSelfBehalfItemSummary}`, '【門診自費/代收】小計值錯誤')
      await t.expect(await ecReportItemSummary.innerText).eql(`${get.ecReportItemSummary}`, '【自費購物】小計值錯誤')
      await t.expect(await totalReceiptSummary.innerText).eql(`${get.totalReceiptSummary}`, '實收合計值錯誤')
    }
    showGroupRuleIndex++
  }
})

// TODO: 自動化測試程式要通過語法檢查 (npm run lint)