// ! testcafe --speed 0.8 chrome hix.js --live
import { Selector } from 'testcafe'

fixture('Hix登入測試')
  .page('http://test.hixcare.tw/login/signIn').skipJsErrors()

// ? Hix登入操作 hixadmin / Hix1234
// /html/body/div[1]/div/div/div/div/div/div[2]/form/div[1]/input 使用者名稱
const userName = Selector('#app').child('div').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(0).child('input')
// /html/body/div[1]/div/div/div/div/div/div[2]/form/div[2]/div[1]/input 密碼
const userPassword = Selector('#app').child('div').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(1).child('div').nth(0).child('input')
// /html/body/div[1]/div/div/div/div/div/div[2]/form/div[3]/div/label 系統日期
const date1 = Selector('#app').child('div').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(2).child('div').child('label')
// /html/body/div[1]/div/div/div/div/div/div[2]/form/div[3]/div/div/div/div/div[2]/div[3]/div[4]/div[4]/span 指定日期
const date2 = Selector('#app').child('div').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').nth(1).child('div').nth(2).child('div').nth(3).child('div').nth(3).child('span')
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

// ? 掛號操作
// /html/body/div[1]/div/div/div[3]/div/div/div/div[3]/div/div/div[2]/section[3]/div[2]/div/div[1]/div/ol/li[2]/span[2] 掛號作業
const registButton = Selector('html').child('body').child('div').nth(0).child('div').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').nth(2).child('div').child('div').child('div').nth(1).child('section').nth(1).child('div').nth(1).child('div').child('div').nth(0).child('div').child('ol').child('li').nth(1).child('span').nth(1)
const patientTextInput = Selector('html').child('body').child('div').nth(0).child('div').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(0).child('div').nth(1).child('div').nth(1).child('div').nth(0).child('div').child('div').child('section').nth(0).child('div').nth(1).child('div').child('div').nth(0).child('div').nth(1).child('div').child('div').nth(0).child('span').child('input')
//*[@id="main"]/div[3]/div/div/div/div/div/div/div[1]/div[2]/div[1]/div[2]/button[5]
// /html/body/div[1]/div/div/div[3]/div/div/div/div/div/div/div[1]/div[2]/div[1]/div[2]/button[5]
const button = Selector('html').child('body').child('div').nth(0).child('div').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(0).child('div').nth(1).child('div').nth(0).child('div').nth(1).child('button').nth(4)
// /html/body/div[3]/div[1]/div/div/header/button
const closeModel = Selector('html').child('body').child('div').nth(2).child('div').nth(0).child('div').child('div').child('header').child('button')
// /html/body/div[1]/div/div/div[3]/div/div/div/div/div/div/div[1]/div[1]/div[1]/button
const f2Button = Selector('html').child('body').child('div').nth(0).child('div').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(0).child('div').nth(0).child('div').nth(0).child('button')
// /html/body/div[1]/div/div/div[1]/div[1]/ol/li[1]/a/span
const back = Selector('html').child('body').child('div').nth(0).child('div').child('div').child('div').nth(0).child('div').nth(0).child('ol').child('li').nth(0).child('a').child('span')

// ? 門診操作
// /html/body/div/div/div/div[3]/div/div/div/div[3]/div/div/div[2]/section[5]/div[2]/div/div/div/ol/li/span[2] 門診 V2
const optButton = Selector('html').child('body').child('div').child('div').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').nth(2).child('div').child('div').child('div').nth(1).child('section').nth(4).child('div').nth(1).child('div').child('div').child('div').child('ol').child('li').child('span').nth(1)
// /html/body/div/div/div/div[1]/div/div[1]/button/i 候診清單
const optIButton = Selector('html').child('body').child('div').child('div').child('div').child('div').nth(0).child('div').child('div').nth(0).child('button').child('i')
// /html/body/div/div/div/div[2]/div/div[1]/button
const optIButtonClose = Selector('html').child('body').child('div').child('div').child('div').child('div').nth(1).child('div').child('div').nth(0).child('button')
// /html/body/div/div/div/div[2]/div/div[2]/table/tbody/tr[1]
const optPatient = Selector('html').child('body').child('div').child('div').child('div').child('div').nth(1).child('div').child('div').nth(1).child('table').child('tbody').child('tr').nth(1)
// /html/body/div/div/div/div[2]/div/div/div/div[3]/div/div[3]/div/div[3]/div/div[2]/table/tbody/tr/td[1]/div/div/input
const optICD10 = Selector('html').child('body').child('div').child('div').child('div').child('div').nth(1).child('div').child('div').child('div').child('div').nth(2).child('div').child('div').nth(2).child('div').child('div').nth(2).child('div').child('div').nth(1).child('table').child('tbody').child('tr').child('td').nth(0).child('div').child('div').child('input')
// /html/body/div[1]/div/div/div[2]/div/div/div/div[3]/div/div[9]/div/div[1]/span/button
const optOk1 = Selector('html').child('body').child('div').nth(0).child('div').child('div').child('div').nth(1).child('div').child('div').child('div').child('div').nth(2).child('div').child('div').nth(8).child('div').child('div').nth(0).child('span').child('button')
// /html/body/div/div/div/div[2]/div/div/div[2]/div[3]/span[1]/button
const optOk2 = Selector('html').child('body').child('div').child('div').child('div').child('div').nth(1).child('div').child('div').child('div').nth(1).child('div').nth(2).child('span').nth(0).child('button')
///html/body/div[1]/div/div/div[2]/div/div[2]/div/button[3]
const opt0 = Selector('html').child('body').child('div').nth(0).child('div').child('div').child('div').nth(1).child('div').child('div').nth(1).child('div').child('button').nth(2)
// /html/body/div[1]/div/div/div[2]/div/div[2]/table/tbody/tr[1]
const opt1 = Selector('html').child('body').child('div').nth(0).child('div').child('div').child('div').nth(1).child('div').child('div').nth(1).child('table').child('tbody').child('tr').nth(0)
// /html/body/div/div/div/div[2]/div/div/div/div[3]/div/div[9]/div/div[1]/button[1]
const opt2 = Selector('html').child('body').child('div').child('div').child('div').child('div').nth(1).child('div').child('div').child('div').child('div').nth(2).child('div').child('div').nth(8).child('div').child('div').nth(0).child('button').nth(0)

// ? 要測試動作指令 .navigateTo('') .pressKey('delete') .typeText(userPassword, 'Hix1234')
test('登入', async t => {
  // const a = await date1.innerText
  // const b = await date2.innerText
  // const a = await Selector('.b-calendar-grid-body')
  // console.log('1111111', a)
  // console.log('1111111', b)
  await t
    .maximizeWindow()
    // ? Hix登入操作
    .typeText(userName, 'hixadmin')
    .typeText(userPassword, 'Hix1234')
    .click(date1)
    .click(date2)
    // .click(date1.find(".no-gutters").withText("6"))
  await t
    .click(time1)
    .click(time1.find("option").withText("晚上"))
    // .click(time2)
    .click(index1)
    .click(index1.find("option").withText("櫃檯左"))
    // .click(index2)
    .click(p)
    .click(signInButton)
    // /html/body/div[1]/div/div/div[3]/div/div/div/div[3]/div/div/div[1]/div/span
  // const msgEl = Selector('html').child('body').child('div').nth(0).child('div').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').nth(2).child('div').child('div').child('div').nth(0).child('div').child('span')
  // const msg = msgEl.innerText
  // await t.expect(msg).eql('執行業務')
    // ? 掛號操作
    // TODO: 直接按會導致輸入時好時壞？
    // .click(registButton)
    // // TODO: 轉址操作 OK 掛號要一直換號碼
    // // .navigateTo('http://test.hixcare.tw/practice/regist')
    // // .click(patientTextInput)
    // .typeText(patientTextInput, '8888', { speed: 0.5 })
    // // .click(closeModel)
    // .click(f2Button)
    // .click(back)
  // ? 門診操作
  // .click(optButton)
  // .maximizeWindow()
  // .typeText(userName, 'hixadmin')
  // .typeText(userPassword, 'Hix1234')
  // .click(signInButton)
  // .click(optButton)
  // .dispatchEvent(optIButton, 'keyup')
  // .click(optIButton)
  // .click(optIButtonClose)
  // .click(optIButton)
  // .click(optPatient)
  // .typeText(optICD10, 'm8000xd')
  // .click(optOk1)
  // .click(optOk2)
  // .click(opt0)
  // .click(opt1)
  // .click(opt2)
})