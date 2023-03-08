import { Selector, Role } from 'testcafe'

// ? 使用者名稱 & 密碼 & 登入
const userName = Selector('#app').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(0).child('input')
const userPassword = Selector('#app').child('div').child('div').child('div').child('div').nth(1).child('form').child('div').nth(1).child('div').nth(0).child('input')
const signInButton = Selector('#app').child('div').child('div').child('div').child('div').nth(1).child('form').child('button')

// ? 系統用戶管理頁面 找用戶 改登入密碼
const sysUserButton = Selector('span').withText("系統用戶管理")
// const userAButton = Selector('#app').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(0).child('div').nth(1).child('ol').child('li').nth(78).child('div').nth(0)
const userAPasswordButton = Selector('#app').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(1).child('div').nth(0).child('div').nth(0).child('button').child('span')
const userANewPassword1 = Selector('html').child('body').child('div').nth(1).child('div').nth(0).child('div').child('div').child('div').child('div').child('div').nth(0).child('input')
const userANewPassword2 = Selector('html').child('body').child('div').nth(1).child('div').nth(0).child('div').child('div').child('div').child('div').child('div').nth(1).child('input')
const userANewPasswordOk = Selector('html').child('body').child('div').nth(1).child('div').nth(0).child('div').child('div').child('footer').child('div').child('button').nth(0)

// ? 寫迴圈查找
const baseDOM = Selector('#app').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(0).child('div').nth(1).child('ol')

// ? Hix管理者 登入操作
const userAdmin = Role(`http://test.hixcare.tw/login/signIn`, async t => {
  await t
    .typeText(userName, 'hixadmin')
    .typeText(userPassword, 'Hix1234')
    .click(signInButton)
})

fixture('Admin登入改Users密碼')
  .page('http://test.hixcare.tw/dashboard').skipJsErrors()

// ! test.skip & test.only 
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
      console.log('改密碼---OK')
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