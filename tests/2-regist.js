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

// ? 掛號操作
const registButton = Selector('span').withText("掛號作業")
const addButton = Selector('button').withText("Ctrl+B 初診")
const input1 = Selector('input').withAttribute("placeholder", "點兩下可選取罕見字")
// /html/body/div[3]/div[1]/div/div/div/div[3]/form[1]/input
const input2 = Selector('html').child('body').child('div').nth(2).child('div').nth(0).child('div').child('div').child('div').child('div').nth(2).child('form').nth(0).child('input')
// /html/body/div[3]/div[1]/div/div/div/div[1]/form[2]/div[1]/input
const input3 = Selector('html').child('body').child('div').nth(2).child('div').nth(0).child('div').child('div').child('div').child('div').nth(0).child('form').nth(1).child('div').nth(0).child('input')
// /html/body/div[3]/div[1]/div/div/div/div[2]/form[2]/select
const input4 = Selector('html').child('body').child('div').nth(2).child('div').nth(0).child('div').child('div').child('div').child('div').nth(1).child('form').nth(1).child('select')
const inputButton = Selector('button').withText("新增")
const f2Button = Selector('html').child('body').child('div').nth(0).child('div').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(0).child('div').nth(0).child('div').nth(0).child('button')
// /html/body/div[1]/div/div/div[1]/div[1]/ol/li[1]/a/span
const back = Selector('html').child('body').child('div').nth(0).child('div').child('div').child('div').nth(0).child('div').nth(0).child('ol').child('li').nth(0).child('a').child('span')
const patientTextInput = Selector('html').child('body').child('div').nth(0).child('div').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(0).child('div').nth(1).child('div').nth(1).child('div').nth(0).child('div').child('div').child('section').nth(0).child('div').nth(1).child('div').child('div').nth(0).child('div').nth(1).child('div').child('div').nth(0).child('span').child('input')
// /html/body/div[3]/div[1]/div/div/header/button
const closeModel = Selector('html').child('body').child('div').nth(2).child('div').nth(0).child('div').child('div').child('header').child('button')

// ?退掛
const unButton = Selector('button').withText("批退補")
// /html/body/div/div/div/div[3]/div/div/div/div/div/div/div[1]/div/div/div[1]/div[1]/div/input
const unInput1 = Selector('html').child('body').child('div').child('div').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(0).child('div').child('div').child('div').nth(0).child('div').nth(0).child('div').child('input')
const unInput2 = Selector('input').withAttribute("placeholder", "輸入病歷號或姓名、生日")
// /html/body/div[1]/div/div/div[3]/div/div/div/div/div/div/div[1]/div/div/div[2]/section/div[2]/table/tbody/tr/td[11]/div/button[2]/i
const unInput3 = Selector('html').child('body').child('div').nth(0).child('div').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(0).child('div').child('div').child('div').nth(1).child('section').child('div').nth(1).child('table').child('tbody').child('tr').child('td').nth(10).child('div').child('button').nth(1).child('i')
// /html/body/div[3]/div[1]/div/div/div/div/textarea
const unInput4 = Selector('html').child('body').child('div').nth(2).child('div').nth(0).child('div').child('div').child('div').child('div').child('textarea')
const unInput5 = Selector('span').withText("確認")

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

// ? 要測試動作指令 .navigateTo('') .pressKey('delete') .typeText(userPassword, 'Hix1234')
// ! test.skip 跳過此測試區域指令
test.skip('掛號-新病人', async t => {
  // ? Hix登入操作
  await t.useRole(userA)
  // ? 掛號操作
  await t
    .click(registButton)
    .click(addButton)
    .typeText(input1, 'zxc')
    .typeText(input2, 'A118882508')
    .typeText(input3, '1111208')
    .click(input4)
    .click(input4.find("option").withText("男"))
    .click(inputButton)
    .click(f2Button)
  // .click(back)
})

test.skip('退-掛號', async t => {
  // ? Hix登入操作
  await t.useRole(userA)
  // ? 掛號操作
  await t
    .click(registButton)
    .click(unButton)
    .maximizeWindow()
    .click(unInput1)
    .typeText(unInput2, '11227')
    .click(unInput3)
    .typeText(unInput4, '測試退掛')
    .click(unInput5)
})

test('掛號-原病人', async t => {
  // ? Hix登入操作
  await t.useRole(userA)
  // ? 掛號操作
  await t
    .click(registButton)
    .click(patientTextInput)
    .typeText(patientTextInput, '6666')
    // .click(closeModel)
    .click(f2Button)
})