// ! testcafe --speed 0.8 chrome hix.js --live
import { Selector, Role } from 'testcafe'

// ? Hix登入操作 hixadmin / Hix1234
// /html/body/div[1]/div/div/div/div/div/div[2]/form/div[1]/input 使用者名稱
const userName = Selector('#app').child('div').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(0).child('input')
// /html/body/div[1]/div/div/div/div/div/div[2]/form/div[2]/div[1]/input 密碼
const userPassword = Selector('#app').child('div').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(1).child('div').nth(0).child('input')
// /html/body/div[1]/div/div/div/div/div/div[2]/form/div[3]/div/label 系統日期
const date1 = Selector('#app').child('div').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(2).child('div').child('label')
// /html/body/div[1]/div/div/div/div/div/div[2]/form/div[3]/div/div/div/div/div[2]/div[3]/div[4]/div[4]/span 指定日期
// const date2 = Selector('#app').child('div').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').nth(1).child('div').nth(2).child('div').nth(3).child('div').nth(3).child('span')
const date2 = Selector('div').withAttribute("aria-label", "2022年11月21日 星期一")
// /html/body/div[1]/div/div/div/div/div/div[2]/form/div[4]/select 帳務時段
const time1 = Selector('#app').child('div').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(3).child('select')
// /html/body/div[1]/div/div/div/div/div/div[2]/form/div[4]/select/option[1] 指定時段
// const time2 = Selector('#app').child('div').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(3).child('select').child('option').nth(2)
// /html/body/div[1]/div/div/div/div/div/div[2]/form/div[5]/select 站別
const index1 = Selector('#app').child('div').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(4).child('select')
// /html/body/div[1]/div/div/div/div/div/div[2]/form/div[5]/select/option[1] 指定站別
// const index2 = Selector('#app').child('div').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(4).child('select').child('option').nth(2)
// /html/body/div[1]/div/div/div/div/div/div[2]/form/div[6]/div 選擇入口頁面
const p = Selector('#app').child('div').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(5).child('div')
// /html/body/div[1]/div/div/div/div/div/div[2]/form/button 登入
const signInButton = Selector('#app').child('div').child('div').child('div').child('div').child('div').nth(1).child('form').child('button')

// ? 角色登入確認
// /html/body/div/div/div/div[1]/div[2]/div[4]/span
const confirmUser = Selector('html').child('body').child('div').child('div').child('div').child('div').nth(0).child('div').nth(1).child('div').nth(3).child('span')
// /html/body/div/div/div/div[1]/div[2]/div[4]/div/div[1]/div[2]/div/div
const confirmUserName = Selector('html').child('body').child('div').child('div').child('div').child('div').nth(0).child('div').nth(1).child('div').nth(3).child('div').child('div').nth(0).child('div').nth(1).child('div').child('div')

// ? 角色登入
// 護理師
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
// /html/body/div/div
const dateFromButton1 = Selector('#app').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(0).child('div').child('div').nth(1).child('div').child('div').child('section').child('div').child('div').child('div').nth(0).child('div').nth(1).child('div').child('label')
const dateFromButton2 = Selector('#app').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(0).child('div').child('div').nth(1).child('div').child('div').child('section').child('div').child('div').child('div').nth(0).child('div').nth(1).child('div').child('div').child('div').child('div').child('div').nth(1).child('div').nth(2).child('div').nth(3).child('div').nth(2).child('span')
// /html/body/div/div/div/div[3]/div/div/div/div/div/div/div/div/div/div[1]/div/div[2]/div/div/section/div/div/div[1]/div[2]/div/label
// /html/body/div/div/div/div[3]/div/div/div/div/div/div/div/div/div/div[1]/div/div[2]/div/div/section/div/div/div[1]/div[2]/div/div/div/div/div[2]/div[3]/div[4]/div[3]/span

const baseGroupRuleDOM = Selector('#app').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(0).child('div').child('div').nth(1).child('div').child('div').child('section').child('div').child('div').child('div').nth(5).child('div').nth(1)
// ? 不設定
const groupRule1 = baseGroupRuleDOM.child('div').child('div').nth(0).child('label').child('span')
// ? 日期
const groupRule2 = baseGroupRuleDOM.child('div').child('div').nth(1).child('label').child('span')
// ? 日期+時段
// const groupRule3 = baseGroupRuleDOM.child('div').child('div').nth(2).child('label').child('span')
// /html/body/div/div/div/div[3]/div/div/div/div/div/div/div/div/div/div[1]/div/div[2]/div/div/section/div/div/div[6]/div[2]/div/div[1]/label/span
// /html/body/div/div/div/div[3]/div/div/div/div/div/div/div/div/div/div[1]/div/div[2]/div/div/section/div/div/div[6]/div[2]/div/div[2]/label/span
// /html/body/div[1]/div/div/div[3]/div/div/div/div/div/div/div/div/div/div[1]/div/div[2]/div/div/section/div/div/div[6]/div[2]/div/div[3]/label/span

const baseGroupRuleDOM2 = Selector('#app').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(0).child('div').child('div').nth(1).child('div').child('div').child('section').child('div').child('div').child('div').nth(6).child('div').nth(1)
// ? 日期加總
// /html/body/div/div/div/div[3]/div/div/div/div/div/div/div/div/div/div[1]/div/div[2]/div/div/section/div/div/div[7]/div[2]/div/div[2]/label/span
const groupRule22 = baseGroupRuleDOM2.child('div').child('div').nth(1).child('label').child('span')
// ? 人員加總
// /html/body/div/div/div/div[3]/div/div/div/div/div/div/div/div/div/div[1]/div/div[2]/div/div/section/div/div/div[7]/div[2]/div/div[3]/label/span
const groupRule23 = baseGroupRuleDOM2.child('div').child('div').nth(2).child('label').child('span')
// ? 時段加總
const groupRule32 = baseGroupRuleDOM2.child('div').child('div').nth(1).child('label').child('span')
// /html/body/div/div/div/div[3]/div/div/div/div/div/div/div/div/div/div[1]/div/div[2]/div/div/section/div/div/div[7]/div[2]/div/div[2]/label/span

const Button = Selector('#app').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(0).child('div').child('div').nth(0).child('div').child('button').nth(1).child('span')
// /html/body/div/div/div/div[3]/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div/button[2]
// /html/body/div/div/div/div[3]/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div/button[2]/span

// /html/body/div/div
const sumBaseDOM = Selector('#app').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(1).child('div').nth(1)
const sum1 = sumBaseDOM.child('div').child('div').child('table').nth(3).child('tbody').child('tr').child('td').nth(2).child('span').nth(4).innerText
console.log('sum1', sum1)
//? 掛號小計 /html/body/div/div/div/div[3]/div/div/div/div/div/div/div/div/div/div[2]/div[2]/div/div/table[4]/tbody/tr/td[3]/span[5]
//? 押金小計 /html/body/div/div/div/div[3]/div/div/div/div/div/div/div/div/div/div[2]/div[2]/div/div/table[4]/tbody/tr/td[3]/span[5]
//? 門診小計 /html/body/div/div/div/div[3]/div/div/div/div/div/div/div/div/div/div[2]/div[2]/div/div/table[6]/tbody/tr/td[3]/span[5]
//? 自費小計 /html/body/div/div/div/div[3]/div/div/div/div/div/div/div/div/div/div[2]/div[2]/div/div/table[8]/tbody/tr/td[3]/span[5]
//? 總計 /html/body/div/div/div/div[3]/div/div/div/div/div/div/div/div/div/div[2]/div[2]/div/div/table[9]/tbody/tr[5]/td[9]/span

fixture('護理長登入')
  .page('http://test.hixcare.tw/dashboard').skipJsErrors()

// ! test.skip ＝ 跳過此測試區域指令
// ! .wait(1000)
test('結帳交班表', async t => {
  // ? Hix登入操作
  await t.useRole(userA)
  // 結帳交班表
  await t
    .click(receiptReportButton)
    // 選日期區間
    .click(dateFromButton1)
    .click(dateFromButton2)
    // 日期+時段+明細
    .click(Button)
    .wait(1000)
    // 日期+時段+時段加總
    .click(groupRule32)
    .click(Button)
    .wait(1000)
    // 不設定+明細
    .click(groupRule1)
    .click(Button)
    .wait(1000)
    // 日期+明細
    .click(groupRule2)
    .click(Button)
    .wait(1000)
    // 日期+日期加總
    .click(groupRule22)
    .click(Button)
    .wait(1000)
    // 日期+人員加總
    .click(groupRule23)
    .click(Button)
})
