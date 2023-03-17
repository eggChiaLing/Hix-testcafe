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
// ? 資料群組
const baseGroupRuleDOM = Selector('#app').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(0).child('div').child('div').nth(1).child('div').child('div').child('section').child('div').child('div').child('div').nth(5).child('div').nth(1).child('div')
// ? 顯示方式
const showBaseGroupRuleDOM = Selector('#app').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(0).child('div').child('div').nth(1).child('div').child('div').child('section').child('div').child('div').child('div').nth(6).child('div').nth(1)
// ? 按鈕預覽
const Button = Selector('#app').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(0).child('div').child('div').nth(0).child('div').child('button').nth(1).child('span')

// ?! 櫃位
// /html/body/div/div/
// div/div[3]/div/div/div/div/div/div/div/div/div/div[1]/div/div[2]/div/div/section/div/div/div[4]/div[1]/label 櫃位
// div/div[3]/div/div/div/div/div/div/div/div/div/div[1]/div/div[2]/div/div/section/div/div/div[5]/div/div/div[2]/label 全選/櫃檯
const u = Selector('#app').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(0).child('div').child('div').nth(1).child('div').child('div').child('section').child('div').child('div').child('div').nth(3).child('div').nth(0).child('label') //櫃位
const u1DOM = Selector('#app').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(0).child('div').child('div').nth(1).child('div').child('div').child('section').child('div').child('div').child('div').nth(4).child('div').child('div')

// ?! 人員
// div/div[3]/div/div/div/div/div/div/div/div/div/div[1]/div/div[2]/div/div/section/div/div/div[4]/div[2]/label 人員
// div/div[3]/div/div/div/div/div/div/div/div/div/div[1]/div/div[2]/div/div/section/div/div/div[5]/div/div[1]/label 全選
// div/div[3]/div/div/div/div/div/div/div/div/div/div[1]/div/div[2]/div/div/section/div/div/div[5]/div/div[2]/div[1]/label 龍群測試
// div/div[3]/div/div/div/div/div/div/div/div/div/div[1]/div/div[2]/div/div/section/div/div/div[5]/div/div[2]/div[9]/label 林芝羽
const uu = Selector('#app').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(0).child('div').child('div').nth(1).child('div').child('div').child('section').child('div').child('div').child('div').nth(3).child('div').nth(1).child('label') //人員
const uuDOM = Selector('#app').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(0).child('div').child('div').nth(1).child('div').child('div').child('section').child('div').child('div').child('div').nth(4).child('div').child('div').nth(0).child('label') // 全選
const uuBaseDOM = Selector('#app').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(0).child('div').child('div').nth(1).child('div').child('div').child('section').child('div').child('div').child('div').nth(4).child('div').child('div').nth(1) // 單選人員

//! 明細 DOM
const baseTotalDOM = Selector('#app').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(1).child('div').nth(1).child('div').child('div') //掛號小計
const reportReportItemSummary = baseTotalDOM.child('table').nth(1).child('tbody').child('tr').child('td').nth(2).child('span').nth(4) //押金小計
const receiptDepositItemSummary = baseTotalDOM.child('table').nth(3).child('tbody').child('tr').child('td').nth(2).child('span').nth(4) //門診小計
const receiptSelfBehalfItemSummary = baseTotalDOM.child('table').nth(5).child('tbody').child('tr').child('td').nth(2).child('span').nth(4) //自費小計
const ecReportItemSummary = baseTotalDOM.child('table').nth(7).child('tbody').child('tr').child('td').nth(2).child('span').nth(4) //總計
const totalReceiptSummary = baseTotalDOM.child('table').nth(8).child('tbody').child('tr').nth(4).child('td').nth(8).child('span')

//! 日期--日期加總 DOM
const DATETotalDOM = Selector('#app').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(1).child('div').nth(1).child('div').child('div').child('table').child('tbody').child('tr').nth(1) // 取第一筆
const DATETdata = DATETotalDOM.child('th') //日期
const registFee = DATETotalDOM.child('td').nth(0) //掛號費
const registFee4Nhi = DATETotalDOM.child('td').nth(1) //掛號費部份負擔	
const registFee4NhiPT = DATETotalDOM.child('td').nth(2) //復健部份負擔
const nhiSelfFee = DATETotalDOM.child('td').nth(3) //藥費負擔	
const selfFee = DATETotalDOM.child('td').nth(4) //自費
const behalf = DATETotalDOM.child('td').nth(5) //代收
const deposit = DATETotalDOM.child('td').nth(6) //押金
const ar = DATETotalDOM.child('td').nth(7) //欠款
const amount = DATETotalDOM.child('td').nth(8) //實收

//! 日期--人員加總 DOM
// /html/body/div/div
// div/div[3]/div/div/div/div/div/div/div/div/div/div[2]/div[2]/div/div[1]/table[1]/tbody/tr[2]
// div/div[3]/div/div/div/div/div/div/div/div/div/div[2]/div[2]/div/div[1]/table[1]/tbody/tr[2]/td[1]
const receiptSummaryBaseDOM = Selector('#app').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(1).child('div').nth(1).child('div').child('div').nth(0).child('table').nth(0).child('tbody').child('tr').nth(1) //抓第一位
const receiptSummaryByUsersName = receiptSummaryBaseDOM.child('td').nth(0) //人員姓名
const receiptSummaryByUsersAmount = receiptSummaryBaseDOM.child('td').nth(1).child('span').nth(1)
const receiptSummaryByUsersExpend = receiptSummaryBaseDOM.child('td').nth(1).child('span').nth(3)
const receiptSummaryByUsersTotal = receiptSummaryBaseDOM.child('td').nth(1).child('span').nth(5)


//! 日期+時段--時段加總 DOM
// /html/body/div[1]/div/
// div/div[3]/div/div/div/div/div/div/div/div/div/div[2]/div[2]/div/div/div[1]/table[2]
// div/div[3]/div/div/div/div/div/div/div/div/div/div[2]/div[2]/div/div/div[1]/table[2]/tbody[1]/tr[4]//td[9]/span
// div/div[3]/div/div/div/div/div/div/div/div/div/div[2]/div[2]/div/div/div[1]/table[2]/tbody[2]/tr[4]/td[9]/span
// div/div[3]/div/div/div/div/div/div/div/div/div/div[2]/div[2]/div/div/div[1]/table[2]/tbody[3]/tr[4]/td[9]/span
const DATEbaseTotalDOM = Selector('#app').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(1).child('div').nth(1).child('div').child('div').child('div').nth(0).child('table').nth(1)
const amAmountTotalDOM = DATEbaseTotalDOM.child('tbody').nth(0).child('tr').nth(3).child('td').nth(8).child('span')
const pmAmountTotalDOM = DATEbaseTotalDOM.child('tbody').nth(1).child('tr').nth(3).child('td').nth(8).child('span')
const eveAmountTotalDOM = DATEbaseTotalDOM.child('tbody').nth(2).child('tr').nth(3).child('td').nth(8).child('span')

// div/div[3]/div/div/div/div/div/div/div/div/div/div[2]/div[2]/div/div/div[1]/table[3]/tbody/tr/th
// div/div[3]/div/div/div/div/div/div/div/div/div/div[2]/div[2]/div/div/div[1]/table[3]/tbody/tr/td[9]/span
const dataBaseDOM = Selector('#app').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(1).child('div').nth(1).child('div').child('div').child('div').nth(0).child('table').nth(2)
const dataDOM = dataBaseDOM.child('tbody').child('tr').child('th')
const dataAmountTotalDOM = dataBaseDOM.child('tbody').child('tr').child('td').nth(8).child('span')

// API參數 ＆ DOM位置控制
const dateFromNumber = "10" // !指定日期
const dateFromValue = Selector('span').withExactText(dateFromNumber) // 日期 DOM 位置
const accountingShift = [ "AM", "PM", "EVENING" ]
const counterUserText = '全部'
const groupRuleValue = [ "null", "DATE", "DATE_SHIFT" ]

fixture('結帳交班表')
.page('http://test.hixcare.tw/dashboard').skipJsErrors()
  .beforeEach(async t => {
    await t
      .useRole(userA) // 護理長登入
      .click(receiptReportButton) // 進入結帳交班表
      .click(dateFromButton) // 點開日期
      .click(dateFromValue) // 指定日期 動態點選
    console.log('-------單元測試開始--------')
  })
  .afterEach(async t => {
    // console.log('-------單元測試結束--------')
  })
  .before(async t => {
    console.log('------------------------------開始---------------------------------------')
  })
  .after(async t => {
    console.log('------------------------------結束---------------------------------------')
  })
  
// ! test.skip only 跳過此測試區域指令
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
  // API
  const get = await receiptReportAPI(dateFromNumber, accountingShiftIds, groupRuleValue[groupRuleIndex], showGroupRuleValue, counterUserText)
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
    const get = await receiptReportAPI(dateFromNumber, accountingShiftIds, groupRuleValue[groupRuleIndex], showGroupRuleValue, counterUserText)
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
    const get = await receiptReportAPI(dateFromNumber, accountingShiftIds, groupRuleValue[groupRuleIndex], showGroupRuleValue, counterUserText)
    // 比對 預覽的合計＆小計值與 API 回傳值
    await t.expect(await reportReportItemSummary.innerText).eql(`${get.reportReportItemSummary}`, '【掛號批價】小計值錯誤')
    await t.expect(await receiptDepositItemSummary.innerText).eql(`${get.receiptDepositItemSummary}`, '【押金】小計值錯誤')
    await t.expect(await receiptSelfBehalfItemSummary.innerText).eql(`${get.receiptSelfBehalfItemSummary}`, '【門診自費/代收】小計值錯誤')
    await t.expect(await ecReportItemSummary.innerText).eql(`${get.ecReportItemSummary}`, '【自費購物】小計值錯誤')
    await t.expect(await totalReceiptSummary.innerText).eql(`${get.totalReceiptSummary}`, '實收合計值錯誤')
    accountingShiftIndex++
  }
})

// ! test.skip only 跳過此測試區域指令
test(`櫃位`, async t => {
  const accountingShiftIndex = -1 // 時段 DOM
  const groupRuleIndex = 0 // 資料群組
  const showGroupRuleIndex = 0 // 顯示方式
  const showGroupRuleValue = "明細"
  const accountingShiftIds = accountingShift.filter(i => i !== accountingShift[accountingShiftIndex])
  const groupRule = baseGroupRuleDOM.child('div').nth(groupRuleIndex).child('label').child('span') // 資料群組
  const showGroupRule = showBaseGroupRuleDOM.child('div').child('div').nth(showGroupRuleIndex).child('label').child('span') // 顯示方式
  let u1TextIndex = 0 // 櫃位(全部、櫃檯)
  while (u1TextIndex < 2) {
    const u1 = u1DOM.child('div').nth(u1TextIndex).child('label')
    await t
      .click(u) // 櫃位
      .click(u1) // (全部、櫃檯)
    await t
      .click(groupRule) // 資料群組 不設定
      .click(showGroupRule) // 顯示方式 明細
      .click(Button) // 預覽
      .wait(500)
    const u1Text = await u1.innerText
    // API
    const get = await receiptReportAPI(dateFromNumber, accountingShiftIds, groupRuleValue[groupRuleIndex], showGroupRuleValue, u1Text)
    // console.log(get)
    // console.log(u1TextIndex, u1Text, await reportReportItemSummary.innerText, '【掛號批價】', get.reportReportItemSummary)
    // 比對 預覽的合計＆小計值與 API 回傳值
    await t.expect(await reportReportItemSummary.innerText).eql(`${get.reportReportItemSummary}`, '【掛號批價】小計值錯誤')
    await t.expect(await receiptDepositItemSummary.innerText).eql(`${get.receiptDepositItemSummary}`, '【押金】小計值錯誤')
    await t.expect(await receiptSelfBehalfItemSummary.innerText).eql(`${get.receiptSelfBehalfItemSummary}`, '【門診自費/代收】小計值錯誤')
    await t.expect(await ecReportItemSummary.innerText).eql(`${get.ecReportItemSummary}`, '【自費購物】小計值錯誤')
    await t.expect(await totalReceiptSummary.innerText).eql(`${get.totalReceiptSummary}`, '實收合計值錯誤')
    u1TextIndex++
  }
})

// ! test.skip only 跳過此測試區域指令
test(`人員`, async t => {
  const accountingShiftIndex = -1 // 時段 DOM
  const groupRuleIndex = 0 // 資料群組
  const showGroupRuleIndex = 0 // 顯示方式
  const showGroupRuleValue = "明細"
  const accountingShiftIds = accountingShift.filter(i => i !== accountingShift[accountingShiftIndex])
  const groupRule = baseGroupRuleDOM.child('div').nth(groupRuleIndex).child('label').child('span') // 資料群組
  const showGroupRule = showBaseGroupRuleDOM.child('div').child('div').nth(showGroupRuleIndex).child('label').child('span') // 顯示方式
  let uUserIndex = -1 // 人員對象 0~8
  while (uUserIndex < 9) {
    const uUser = uuBaseDOM.child('div').nth(uUserIndex).child('label') // 人員對象 0~8
    await t.click(uu) // 人員
    if (uUserIndex === 0) {
      await t
      .click(uuDOM) // 取消全選
      .click(uUser) // 選人
    }
    if (uUserIndex >= 1) {
      await t
      .click(uuDOM) // 全選
      .click(uuDOM) // 取消全選
      .click(uUser) // 選人
    }
    await t
    .click(groupRule) // 資料群組 不設定
    .click(showGroupRule) // 顯示方式 明細
    .click(Button) // 預覽
    .wait(500)
    // TODO: API確認
    const get = await receiptReportAPI(dateFromNumber, accountingShiftIds, groupRuleValue[groupRuleIndex], showGroupRuleValue, '人員', uUserIndex)
    // console.log(uUserIndex, await uUser.innerText)
    // console.log(get)
    // console.log(await reportReportItemSummary.innerText, '【掛號批價】', get.reportReportItemSummary)
    // 比對 預覽的合計＆小計值與 API 回傳值
    await t.expect(await reportReportItemSummary.innerText).eql(`${get.reportReportItemSummary}`, '【掛號批價】小計值錯誤')
    await t.expect(await receiptDepositItemSummary.innerText).eql(`${get.receiptDepositItemSummary}`, '【押金】小計值錯誤')
    await t.expect(await receiptSelfBehalfItemSummary.innerText).eql(`${get.receiptSelfBehalfItemSummary}`, '【門診自費/代收】小計值錯誤')
    await t.expect(await ecReportItemSummary.innerText).eql(`${get.ecReportItemSummary}`, '【自費購物】小計值錯誤')
    await t.expect(await totalReceiptSummary.innerText).eql(`${get.totalReceiptSummary}`, '實收合計值錯誤')
    uUserIndex++
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
    const get = await receiptReportAPI(dateFromNumber, accountingShiftIds, groupRuleValue[groupRuleIndex], showGroupRuleValue, counterUserText)
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
  const get = await receiptReportAPI(dateFromNumber, accountingShiftIds, groupRuleValue[groupRuleIndex], showGroupRuleValue, counterUserText)
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
    // 比對合計值與 API 回傳值
    const get = await receiptReportAPI(dateFromNumber, accountingShiftIds, groupRuleValue[groupRuleIndex], showGroupRuleValue[showGroupRuleIndex], counterUserText)
    if (showGroupRuleValue[showGroupRuleIndex] === "明細") {
      await t.expect(await reportReportItemSummary.innerText).eql(`${get.reportReportItemSummary}`, '【掛號批價】小計值錯誤')
      await t.expect(await receiptDepositItemSummary.innerText).eql(`${get.receiptDepositItemSummary}`, '【押金】小計值錯誤')
      await t.expect(await receiptSelfBehalfItemSummary.innerText).eql(`${get.receiptSelfBehalfItemSummary}`, '【門診自費/代收】小計值錯誤')
      await t.expect(await ecReportItemSummary.innerText).eql(`${get.ecReportItemSummary}`, '【自費購物】小計值錯誤')
      await t.expect(await totalReceiptSummary.innerText).eql(`${get.totalReceiptSummary}`, '實收合計值錯誤')
    }
    if (showGroupRuleValue[showGroupRuleIndex] === "日期加總") {
      // console.log('日期加總', get)
      await t.expect(await DATETdata.innerText).eql(`${get.data}`, '日期錯誤')
      await t.expect(await registFee.innerText).eql(`${get.registFee}`, '掛號費 錯誤')
      await t.expect(await registFee4Nhi.innerText).eql(`${get.registFee4Nhi}`, '掛號費部份負擔 錯誤')
      await t.expect(await registFee4NhiPT.innerText).eql(`${get.registFee4NhiPT}`, '復健部份負擔 錯誤')
      await t.expect(await nhiSelfFee.innerText).eql(`${get.nhiSelfFee}`, '藥費負擔 錯誤')
      await t.expect(await selfFee.innerText).eql(`${get.selfFee}`, '自費 錯誤')
      await t.expect(await behalf.innerText).eql(`${get.behalf}`, '代收 錯誤')
      await t.expect(await deposit.innerText).eql(`${get.deposit}`, '押金 錯誤')
      await t.expect(await ar.innerText).eql(`${get.ar}`, '欠款 錯誤')
      await t.expect(await amount.innerText).eql(`${get.amount}`, '實收 錯誤')
    }
    if (showGroupRuleValue[showGroupRuleIndex] === "人員加總") {
      // console.log('人員加總', get)
      await t.expect(await receiptSummaryByUsersName.innerText).eql(`${get.receiptSummaryByUsersName}`, '人員姓名 錯誤')
      await t.expect(await receiptSummaryByUsersAmount.innerText).eql(`${get.receiptSummaryByUsersAmount}`, '$錯誤')
      await t.expect(await receiptSummaryByUsersExpend.innerText).eql(`${get.receiptSummaryByUsersExpend}`, '$錯誤')
      await t.expect(await receiptSummaryByUsersTotal.innerText).eql(`${get.receiptSummaryByUsersTotal}`, ' 合計 錯誤')
    }
    showGroupRuleIndex++
  }
})

// ! test.skip only ＝ 跳過此測試區域指令
test(`日期+時段--顯示方式*2`, async t => {
  const groupRuleIndex = 2 // 資料群組 日期+時段
  let showGroupRuleIndex = 0 // 顯示方式
  const showGroupRuleValue = [ "明細", "時段加總" ]
  while (showGroupRuleIndex < 2) {
    const accountingShiftIds = accountingShift
    const groupRule = baseGroupRuleDOM.child('div').nth(groupRuleIndex).child('label').child('span') // 資料群組
    const showGroupRule = showBaseGroupRuleDOM.child('div').child('div').nth(showGroupRuleIndex).child('label').child('span') // 顯示方式
    await t
      .click(groupRule) // 資料群組 日期+時段
      .click(showGroupRule) // 顯示方式 
      .click(Button) // 預覽
      .wait(1000)
    // 比對合計值與 API 回傳值
    const get = await receiptReportAPI(dateFromNumber, accountingShiftIds, groupRuleValue[groupRuleIndex], showGroupRuleValue[showGroupRuleIndex], counterUserText)
    if (showGroupRuleValue[showGroupRuleIndex] === "明細") {
      await t.expect(await reportReportItemSummary.innerText).eql(`${get.reportReportItemSummary}`, '【掛號批價】小計值錯誤')
      await t.expect(await receiptDepositItemSummary.innerText).eql(`${get.receiptDepositItemSummary}`, '【押金】小計值錯誤')
      await t.expect(await receiptSelfBehalfItemSummary.innerText).eql(`${get.receiptSelfBehalfItemSummary}`, '【門診自費/代收】小計值錯誤')
      await t.expect(await ecReportItemSummary.innerText).eql(`${get.ecReportItemSummary}`, '【自費購物】小計值錯誤')
      await t.expect(await totalReceiptSummary.innerText).eql(`${get.totalReceiptSummary}`, '實收合計值錯誤')
    }
    if (showGroupRuleValue[showGroupRuleIndex] === "時段加總") {
      await t.expect(await amAmountTotalDOM.innerText).eql(`${get.amAmount}`, '上午 小計值錯誤')
      await t.expect(await pmAmountTotalDOM.innerText).eql(`${get.pmAmount}`, '下午 小計值錯誤')
      await t.expect(await eveAmountTotalDOM.innerText).eql(`${get.eveAmount}`, '晚上 小計值錯誤')
      await t.expect(await dataDOM.innerText).eql(`${get.data}`, '批價日')
      await t.expect(await dataAmountTotalDOM.innerText).eql(`${get.dataAmount}`, '批價日 實收合計值錯誤')
    }
    showGroupRuleIndex++
  }
})

// TODO: 自動化測試程式要通過語法檢查 (npm run lint)