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
const userAdmin = Role(`http://test.hixcare.tw/login/signIn`, async t => {
  await t
    // ? Hix登入操作
    .typeText(userName, 'hixadmin')
    .typeText(userPassword, 'Hix1234')
    // .click(date1)
    // .click(date2)
    // .click(time1)
    // .click(time1.find("option").withText("晚上"))
    // .click(index1)
    // .click(index1.find("option").withText("櫃檯左"))
    // .click(p)
    .click(signInButton)
})

// ? 系統用戶管理
const sysUserButton = Selector('span').withText("系統用戶管理")
const userAButton = Selector('#app').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(0).child('div').nth(1).child('ol').child('li').nth(78).child('div').nth(0)
// /html/body/div/div
// /html/body/div/div/div/div[3]/div/div/div/div/div/div/div/div/div/div/div[1]/div[2]/ol
// /html/body/div/div/div/div[3]/div/div/div/div/div/div/div/div/div/div/div[1]/div[2]/ol/li[79]/div[1]
// /html/body/div/div/div/div[3]/div/div/div/div/div/div/div/div/div/div/div[1]/div[2]/ol/li[220]


const userAPasswordButton = Selector('#app').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(1).child('div').nth(0).child('div').nth(0).child('button').child('span')
const userANewPassword1 = Selector('html').child('body').child('div').nth(1).child('div').nth(0).child('div').child('div').child('div').child('div').child('div').nth(0).child('input')
const userANewPassword2 = Selector('html').child('body').child('div').nth(1).child('div').nth(0).child('div').child('div').child('div').child('div').child('div').nth(1).child('input')
const userANewPasswordOk = Selector('html').child('body').child('div').nth(1).child('div').nth(0).child('div').child('div').child('footer').child('div').child('button').nth(0)
// /html/body/div/div/div/div[3]/div/div/div/div/div/div/div/div/div/div/div[2]/div[1]/div[1]/button/span
// /html/body/div[2]/div[1]/div/div/div/div/div[1]/input
// /html/body/div[2]/div[1]/div/div/div/div/div[2]/input
// /html/body/div[2]/div[1]/div/div/footer/div/button[1]

// ? 寫迴圈查找
const baseDOM = Selector('#app').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(0).child('div').nth(1).child('ol')

fixture('Admin登入改Users密碼')
  .page('http://test.hixcare.tw/dashboard').skipJsErrors()

// ? 要測試動作指令 .navigateTo('') .pressKey('delete') .typeText(userPassword, 'Hix1234')
// ! test.skip ＝ 跳過此測試區域指令
test.skip('登入改護理長密碼', async t => {
  // ? Hix登入操作
  await t.useRole(userAdmin)
  // ? 系統用戶管理 改密碼
  // await t
  //   .click(sysUserButton)
  //   .click(userAButton)
  //   .click(userAPasswordButton)
  //   .typeText(userANewPassword1, 'A369')
  //   .typeText(userANewPassword2, 'A369')
  //   .click(userANewPasswordOk)
  // ? 系統用戶管理 改密碼2
  await t.click(sysUserButton)
  let i = 0
  while (i < 220) {
    // console.log(await baseDOM.child('li').nth(i).child('div').nth(0).innerText)
    if (await baseDOM.child('li').nth(i).child('div').nth(0).innerText === 'A369') {
      const userAButton123 = await baseDOM.child('li').nth(i).child('div').nth(0)
      console.log('1234123412341234123412341234123412341234')
      await t
        .click(userAButton123)
        .click(userAPasswordButton)
        .typeText(userANewPassword1, 'A369')
        .typeText(userANewPassword2, 'A369')
        .click(userANewPasswordOk)
      i = 220
    }
    i++
  }
})