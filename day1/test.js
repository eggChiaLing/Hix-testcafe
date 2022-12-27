import { Selector } from 'testcafe'; // 引入 testcafe 的 html element 選擇器

fixture`Getting Started` // 設定測試集名稱
  .page`http://devexpress.github.io/testcafe/example`; // 測試目標網頁

test('HelloWorld test', async t => { // 一個測試案例
  await t
    .typeText('#developer-name', 'HelloWorld') //在文字框輸入 HelloWorld
    .click('#submit-button') //按下送出按鈕
    .expect(Selector('#article-header').innerText).eql('Thank you, HelloWorld!');
  // 使用 expect 驗證 #article-header 內的文字 等於 Thank you, HelloWorld!
});

// !啟動 Live Mode ，使用 -L or --live 參數即可 測試跑完不會直接關閉結束
// !透過 Ctrl+R 重新跑一次測試流程，Ctrl+S 暫停測試流程
// !CLI 的 --speed 參數 可設定區間，1 最快，0.01 最慢

// 在終端機，輸入指令，執行HelloWorld.js測試檔，用chrome或safari瀏覽器打開
// testcafe chrome HelloWorld.js
// testcafe safari HelloWorld.js

// 表示執行哪個資料夾且啟動 Live Mode
// testcafe 資料夾 -L

// testcafe -r spec,json:report.json 指定 2種 測試報告格式
// testcafe -S -s screenshots 設定只有失敗時才截圖
// ! testcafe --debug-on-fail 測試有錯誤時才啟動
// ? testcafe chrome:headless --debug-on-fail 不需要看 UI直接跑測試
// testcafe --speed 0.8 chrome hix.js --live 設定速度

// 1.用 Selectors 取得網頁上的 element，例如按鈕、文字方塊等。
// https://testcafe.io/documentation/402829/guides/basic-guides/select-page-elements
// ? <div data-v-5320175c="" class="ml-2">櫃台結帳交班表</div>
// ? <div data-v-5320175c="" class="ml-2">櫃台結帳交班表</div>
// ? #main > div:nth-child(3) > div > div > div > div > div > div > div > div > div > div.info-group.w-20 > div > div.info-header.d-flex.flex-column > div > div > div
// ? document.querySelector("#main > div:nth-child(3) > div > div > div > div > div > div > div > div > div > div.info-group.w-20 > div > div.info-header.d-flex.flex-column > div > div > div")
// ? Copy styles
// ? //*[@id="main"]/div[3]/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div/div/div
// ? /html/body/div[1]/div/div/div[3]/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div/div/div
// 2.對網頁上的 element 進行預定的 Actions 動作，例如按下按鈕、輸入文字等。
// https://testcafe.io/documentation/402833/guides/basic-guides/interact-with-the-page
// ? .typeText(userName, 'hixadmin')
// ? .click(time1.find("option").withText("晚上"))
// 3.使用 Assertions，判斷執行特定動作後的結果，是否如預期。
// https://testcafe.io/documentation/402837/guides/basic-guides/assert
// ? await t.expect(await totalReceiptSummary.innerText).eql(`${get.totalReceiptSummary}`, '合計值錯誤')
// ? await t.expect(await totalReceiptSummary.innerText === get.totalReceiptSummary).ok('合計值錯誤')


// ! fixture('Admin登入改Users密碼'.page('http://test.hixcare.tw/dashboard').skipJsErrors()

// ? test.skip ＝ 跳過 此測試區域指令
// ? test.only ＝ 只要執行 此測試區域指令
// ? .wait(2000) = 停頓2秒
// ? .debug() = 可暫停指定位置 方便除錯用
// ? 
// ? 
// ? 
// ? 