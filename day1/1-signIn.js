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
// /html/body/div[1]/div/div/div/div/div/div[2]/form/div[5]/select 站別
const index1 = Selector('#app').child('div').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(4).child('select')
// /html/body/div[1]/div/div/div/div/div/div[2]/form/div[6]/div 選擇入口頁面
const p = Selector('#app').child('div').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(5).child('div')
// /html/body/div[1]/div/div/div/div/div/div[2]/form/button 登入
const signInButton = Selector('#app').child('div').child('div').child('div').child('div').child('div').nth(1).child('form').child('button')

// ? 角色登入
const userAdmin = Role(`http://test.hixcare.tw/login/signIn`, async t => {
  await t
    // ? Hix登入操作
    .typeText(userName, 'hixadmin')
    .typeText(userPassword, 'Hix1234')
    .click(date1)
    .click(date2)
    .click(time1)
    .click(time1.find("option").withText("晚上"))
    // .click(index1)
    // .click(index1.find("option").withText("櫃檯左"))
    // .click(p)
    .click(signInButton)
})
// 醫生
const userDoctor = Role('http://test.hixcare.tw/login/signIn', async t => {
  await t
    // ? Hix登入操作
    .typeText(userName, '03112')
    .typeText(userPassword, '03112')
    .click(date1)
    .click(date2)
    .click(time1)
    .click(time1.find("option").withText("晚上"))
    .click(signInButton)
})
// 護理師
const userA = Role('http://test.hixcare.tw/login/signIn', async t => {
  await t
    // ? Hix登入操作
    .typeText(userName, 'A369')
    .typeText(userPassword, 'A369')
    .click(date1)
    .click(date2)
    .click(time1)
    .click(time1.find("option").withText("晚上"))
    .click(signInButton)
})
// 復健
const userB = Role('http://test.hixcare.tw/login/signIn', async t => {
  await t
    // ? Hix登入操作
    .typeText(userName, 'B478')
    .typeText(userPassword, 'B478')
    .click(date1)
    .click(date2)
    .click(time1)
    .click(time1.find("option").withText("晚上"))
    .click(signInButton)
})
// 放射
const userD = Role('http://test.hixcare.tw/login/signIn', async t => {
  await t
    // ? Hix登入操作
    .typeText(userName, 'D070')
    .typeText(userPassword, 'D070')
    .click(date1)
    .click(date2)
    .click(time1)
    .click(time1.find("option").withText("晚上"))
    .click(signInButton)
})

// ? 角色登入確認
// /html/body/div/div/div/div[1]/div[2]/div[4]/span
const confirmUser = Selector('html').child('body').child('div').child('div').child('div').child('div').nth(0).child('div').nth(1).child('div').nth(3).child('span')
// /html/body/div/div/div/div[1]/div[2]/div[4]/div/div[1]/div[2]/div/div
const confirmUserName = Selector('html').child('body').child('div').child('div').child('div').child('div').nth(0).child('div').nth(1).child('div').nth(3).child('div').child('div').nth(0).child('div').nth(1).child('div').child('div')

fixture('Hix登入測試')
.page('http://test.hixcare.tw/dashboard').skipJsErrors()


test('各個角色登入', async t => {
  // console.log('ttt', t)
  await t.useRole(userAdmin)
  await t.hover(confirmUser)
  const userName = confirmUserName.innerText
  await t.expect(userName).eql('sysadmin')

  await t.useRole(userDoctor)
  await t.hover(confirmUser)
  await t.expect(userName).eql('吳灝彝')

  await t.useRole(userA)
  await t.hover(confirmUser)
  await t.expect(userName).eql('詹喬齡')

  await t.useRole(userB)
  await t.hover(confirmUser)
  await t.expect(userName).eql('陳昱君')

  await t.useRole(userD)
  await t.hover(confirmUser)
  await t.expect(userName).eql('黃少謙')
})