// ? 啟動 testcafe chrome test1.js
// ? 啟動 testcafe chrome test1.js --live 
// testcafe --speed 0.8 chrome test1.js 
//? Ctrl+C關閉打開的瀏覽器並終止進程。
// !fixture('名稱？').page(測試網址)
fixture('My first test1')
  .page('https://devexpress.github.io/testcafe/example');

// ? 使用該test方法聲明一個新測試
// 操作 1：輸入文字 await t.typeText('#developer-name', 'John Smith');
// 第一個參數是標識目標元素的CSS選擇器。第二個參數包含輸入值
// 動作二：點擊按鈕 await t.click('#submit-button');

import { Selector } from 'testcafe';
// ? nth(?)數字從0 開始所以要 減1

// /div[2]/fieldset[1]/label/input
// /html/body/form/div/div[2]/fieldset[1]/label
// /html/body/form/div/div[2]/fieldset[2]/div/div[1]/span

const bb = Selector('.main-content').child('div').nth(1).child('fieldset').nth(0).child('label')
const cc = Selector('.main-content').child('div').nth(1).child('fieldset').nth(1).child('div').child('div').nth(0).child('span')
///Selector('') html/body/form/div/div[1]/div[1]/fieldset[1]/ child('input').nth(0)  input[1]
test('My first test2', async t => {
  const fieldsetChildren = await Selector('#preferred-interface')
  console.log('1', fieldsetChildren)
  const headerText = await Selector('legend').innerText
  const AA = Selector('#preferred-interface')
  // const headerText = await Selector('legend').textContent
  console.log('2', headerText)
  // console.log('2', headerText[Symbol(functionBuilder)])
  await t
    // .typeText('#developer-name', 'test1 輸入測試')
    // .click('#remote-testing')
    // .click('#reusing-js-code')
    // .click('#macos')
    // .click('#preferred-interface')
    // .click(AA.find('option').withText('JavaScript API'))
    // .click(bb)
    .click(cc.scrollLeft(100%))
    .click('#submit-button')
});

// fixture('google test1')
//   .page('https://www.google.com/');

// // ? 使用該test方法聲明一個新測試
// // 操作 1：輸入文字 await t.typeText('#developer-name', 'John Smith');
// // 第一個參數是標識目標元素的CSS選擇器。第二個參數包含輸入值
// // 動作二：點擊按鈕 await t.click('#submit-button');

// test('google test2', async t => {
//   await t
//     // .typeText('.gLFy', 'egg google 輸入測試')
//     .typeText('.gLFyf', 'egg google 輸入測試')
//     // .click('#submit-button');
// });
