// ! testcafe --speed 0.8 chrome hix.js --live
import { Selector, Role } from 'testcafe'

// ? Hix登入操作 hixadmin / Hix1234
// /html/body/div[1]/div/div/div/div/div/div[2]/form/div[1]/input 使用者名稱
const userName = Selector('#app').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(0).child('input')
// /html/body/div[1]/div/div/div/div/div/div[2]/form/div[2]/div[1]/input 密碼
const userPassword = Selector('#app').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(1).child('div').nth(0).child('input')
// /html/body/div[1]/div/div/div/div/div/div[2]/form/div[3]/div/label 系統日期
const date1 = Selector('#app').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(2).child('div').child('label')
// /html/body/div[1]/div/div/div/div/div/div[2]/form/div[3]/div/div/div/div/div[2]/div[3]/div[4]/div[4]/span 指定日期
// const date2 = Selector('#app').child('div').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').nth(1).child('div').nth(2).child('div').nth(3).child('div').nth(3).child('span')
// const date2 = Selector('div').withAttribute("aria-label", "2022年11月21日 星期一")
const date2 = Selector('div').withAttribute("aria-label", "2022年12月2日 星期五")
// /html/body/div[1]/div/div/div/div/div/div[2]/form/div[4]/select 帳務時段
const time1 = Selector('#app').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(3).child('select')
// /html/body/div[1]/div/div/div/div/div/div[2]/form/div[4]/select/option[1] 指定時段
// const time2 = Selector('#app').child('div').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(3).child('select').child('option').nth(2)
// /html/body/div[1]/div/div/div/div/div/div[2]/form/div[5]/select 站別
const index1 = Selector('#app').child('div').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(4).child('select')
// /html/body/div[1]/div/div/div/div/div/div[2]/form/div[5]/select/option[1] 指定站別
// const index2 = Selector('#app').child('div').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(4).child('select').child('option').nth(2)
// /html/body/div[1]/div/div/div/div/div/div[2]/form/div[6]/div 選擇入口頁面
const p = Selector('#app').child('div').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(5).child('div')
// /html/body/div[1]/div/div/div/div/div/div[2]/form/button 登入
const signInButton = Selector('#app').child('div').child('div').child('div').child('div').nth(1).child('form').child('button')

// ? 掛號操作
const registButton = Selector('span').withText("掛號作業")
const f2Button = Selector('html').child('body').child('div').nth(0).child('div').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(0).child('div').nth(0).child('div').nth(0).child('button')
const patientTextInput = Selector('html').child('body').child('div').nth(0).child('div').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(0).child('div').nth(1).child('div').nth(1).child('div').nth(0).child('div').child('div').child('section').nth(0).child('div').nth(1).child('div').child('div').nth(0).child('div').nth(1).child('div').child('div').nth(0).child('span').child('input')
// /html/body/div[3]/div[1]/div/div/header/button
const closeModel = Selector('html').child('body').child('div').nth(2).child('div').nth(0).child('div').child('div').child('header').child('button')
// /html/body/div[1]/div/div/div[3]/div/div/div/div/div/div/div[1]/div[2]/div[2]/div[1]/div/div/section[1]/div[2]/div/div[12]/div[2]/div/div[1]/label
// /html/body/div[1]/div/div/div[3]/div/div/div/div/div/div/div[1]/div[2]/div[2]/div[1]/div/div/section[1]/div[2]/div/div[12]/div[2]/div/div[1]/label
const x = Selector('html').child('body').child('div').nth(0).child('div').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(0).child('div').nth(1).child('div').nth(1).child('div').nth(0).child('div').child('div').child('section').nth(0).child('div').nth(1).child('div').child('div').nth(11).child('div').nth(1).child('div').child('div').nth(1).child('label')



// ? 角色登入確認
// /html/body/div/div/div/div[1]/div[2]/div[4]/span
const confirmUser = Selector('html').child('body').child('div').child('div').child('div').child('div').nth(0).child('div').nth(1).child('div').nth(3).child('span')
// /html/body/div/div/div/div[1]/div[2]/div[4]/div/div[1]/div[2]/div/div
const confirmUserName = Selector('html').child('body').child('div').child('div').child('div').child('div').nth(0).child('div').nth(1).child('div').nth(3).child('div').child('div').nth(0).child('div').nth(1).child('div').child('div')

// 護理師
const userA = Role('http://test.hixcare.tw/login/signIn', async t => {
  await t
    // ? Hix登入操作
    .typeText(userName, 'A369')
    .typeText(userPassword, 'A369')
    // .click(date1)
    // .click(date2)
    .click(time1)
    .click(time1.find("option").withText("晚上"))
    .click(signInButton)
  await t.hover(confirmUser)
  const user = confirmUserName.innerText
  await t.expect(user).eql('詹喬齡')
})

fixture('掛號操作')
  .page('http://test.hixcare.tw/dashboard').skipJsErrors()

test('掛號-換藥的前天病人', async t => {
  // ? Hix登入操作
  await t.useRole(userA)
  // ? 掛號操作
  await t
    .click(registButton)
    .click(patientTextInput)
    .typeText(patientTextInput, 'zxc')
    .click(closeModel)
    .click(x)
    .click(f2Button)
})