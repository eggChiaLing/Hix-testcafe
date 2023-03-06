// ! testcafe --speed 0.8 chrome hix.js --live
import { Selector, Role } from 'testcafe'

// ? Hix登入操作
// /html/body/div[1]/div/div/div/div/div/div[2]/form/div[1]/input 使用者名稱
const userName = Selector('#app').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(0).child('input')
// /html/body/div[1]/div/div/div/div/div/div[2]/form/div[2]/div[1]/input 密碼
const userPassword = Selector('#app').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(1).child('div').nth(0).child('input')
// /html/body/div[1]/div/div/div/div/div/div[2]/form/div[3]/div/label 系統日期
const date1 = Selector('#app').child('div').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(2).child('div').child('label')
// /html/body/div[1]/div/div/div/div/div/div[2]/form/div[3]/div/div/div/div/div[2]/div[3]/div[4]/div[4]/span 指定日期
// const date2 = Selector('#app').child('div').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').nth(1).child('div').nth(2).child('div').nth(3).child('div').nth(3).child('span')
const date2 = Selector('div').withAttribute("aria-label", "2022年11月21日 星期一")
// /html/body/div[1]/div/div/div/div/div/div[2]/form/div[4]/select 帳務時段
const time1 = Selector('#app').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(3).child('select')
// /html/body/div[1]/div/div/div/div/div/div[2]/form/div[5]/select 站別
// const index1 = Selector('#app').child('div').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(4).child('select')
// /html/body/div[1]/div/div/div/div/div/div[2]/form/div[6]/div 選擇入口頁面
// const p = Selector('#app').child('div').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(5).child('div')
// /html/body/div[1]/div/div/div/div/div/div[2]/form/button 登入
const signInButton = Selector('#app').child('div').child('div').child('div').child('div').nth(1).child('form').child('button')

// ? 門診操作
// /html/body/div[1]/div/div/div[3]/div/div/div/div[3]/div/div/div[2]/section[3]/div[2]/div/div/div/ol/li/span[2]
const optV2Button = Selector('html').child('body').child('div').nth(0).child('div').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').nth(2).child('div').child('div').child('div').nth(1).child('section').nth(2).child('div').nth(1).child('div').child('div').child('div').child('ol').child('li').child('span').nth(1)
// /html/body/div/div/div/div[1]/div/div[1]/button/i 候診清單
const optIButton = Selector('html').child('body').child('div').child('div').child('div').child('div').nth(0).child('div').child('div').nth(0).child('button').child('i')
// /html/body/div/div/div/div[2]/div/div[1]/button 關候診清單
const optIButtonClose = Selector('html').child('body').child('div').child('div').child('div').child('div').nth(1).child('div').child('div').nth(0).child('button')
// /html/body/div/div/div/div[2]/div/div[2]/table/tbody/tr[1] 選病人
const optPatient = Selector('html').child('body').child('div').child('div').child('div').child('div').nth(1).child('div').child('div').nth(1).child('table').child('tbody').child('tr').nth(0)
// /html/body/div/div/div/div[2]/div/div/div/div[3]/div/div[3]/div/div[3]/div/div[2]/table/tbody/tr/td[1]/div/div/input 開診斷
const optICD10 = Selector('html').child('body').child('div').child('div').child('div').child('div').nth(1).child('div').child('div').child('div').child('div').nth(2).child('div').child('div').nth(2).child('div').child('div').nth(2).child('div').child('div').nth(1).child('table').child('tbody').child('tr').child('td').nth(0).child('div').child('div').child('input')
// /html/body/div/div/div/div[2]/div/div/div/div[3]/div/div[5]/div/div[3]/div/div[2]/table/tbody/tr/td[1]/div/div/input 開藥
const opt = Selector('html').child('body').child('div').child('div').child('div').child('div').nth(1).child('div').child('div').child('div').child('div').nth(2).child('div').child('div').nth(4).child('div').child('div').nth(2).child('div').child('div').nth(1).child('table').child('tbody').child('tr').child('td').nth(0).child('div').child('div').child('input')

// /html/body/div[1]/div/div/div[2]/div/div/div/div[3]/div/div[9]/div/div[1]/span/button 完診確認
const optOk1 = Selector('html').child('body').child('div').nth(0).child('div').child('div').child('div').nth(1).child('div').child('div').child('div').child('div').nth(2).child('div').child('div').nth(8).child('div').child('div').nth(0).child('span').child('button')
// /html/body/div/div/div/div[2]/div/div/div[2]/div[3]/span[1]/button 完診
const optOk2 = Selector('html').child('body').child('div').child('div').child('div').child('div').nth(1).child('div').child('div').child('div').nth(1).child('div').nth(2).child('span').nth(0).child('button')

// /html/body/div/div/div/div[2]/div/div[2]/div/button[3] 候診清單的完診列表
const opt0 = Selector('html').child('body').child('div').child('div').child('div').child('div').nth(1).child('div').child('div').nth(1).child('div').child('button').nth(2)
// /html/body/div/div/div/div[2]/div/div[2]/table/tbody/tr 選 完診未批價病人
const opt1 = Selector('html').child('body').child('div').child('div').child('div').child('div').nth(1).child('div').child('div').nth(1).child('table').child('tbody').child('tr').nth(0)
// /html/body/div/div/div/div[2]/div/div/div/div[3]/div/div[9]/div/div[1]/button[1] 重新看診
const opt2 = Selector('html').child('body').child('div').child('div').child('div').child('div').nth(1).child('div').child('div').child('div').child('div').nth(2).child('div').child('div').nth(8).child('div').child('div').nth(0).child('button').nth(0)
// /html/body/div/div/div/div[2]/div/div/div[2]/div/div[3]/div[2]/button[1] 確定要執行 重新看診 嗎？ OR
const opt3 = Selector('html').child('body').child('div').child('div').child('div').child('div').nth(1).child('div').child('div').child('div').nth(1).child('div').child('div').nth(2).child('div').nth(1).child('button').nth(0)
// /html/body/div/div/div/div[2]/div/div/div/div[3]/div/div[9]/div/div[1]/button[2] 清除資料
const opt4 = Selector('html').child('body').child('div').child('div').child('div').child('div').nth(1).child('div').child('div').child('div').child('div').nth(2).child('div').child('div').nth(8).child('div').child('div').nth(0).child('button').nth(1)


// ? 登入角色設定
const userDoctor = Role('http://test.hixcare.tw/login/signIn', async t => {
  await t
    // ? Hix登入操作
    .typeText(userName, '03112')
    .typeText(userPassword, '03112')
    // .click(date1)
    // .click(date2)
    .click(time1)
    .click(time1.find("option").withText("晚上"))
    .click(signInButton)
})

fixture('門診操作')
  .page('http://test.hixcare.tw/dashboard').skipJsErrors()

test.skip('開藥完診', async t => {
  // ? Hix登入操作
  await t.useRole(userDoctor)
  // ? 門診操作
  await t
    .click(optV2Button)
    .maximizeWindow()
    .click(optIButton)
    .click(optIButtonClose)
    .click(optIButton)
    .click(optPatient)
    .typeText(optICD10, 'M8080XD')
    .click(opt)
    .typeText(opt, '48002')
    .pressKey('enter')
    .click(optOk1)
    .click(optOk2)
})

// test('重新看診-清除資料', async t => {
//   // ? Hix登入操作
//   await t.useRole(userDoctor)
//   // ? 門診操作
//   await t
//     .click(optV2Button)
//     .maximizeWindow()
//     .click(optIButton)
//     .click(opt0)
//     .click(opt1)
//     .click(opt2)
//     .click(opt4)
//     .click(opt3)
// })