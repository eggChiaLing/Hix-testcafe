const axios = require('axios');

console.log('axios', axios.isCancel('something'));

// 錢錢
const moneyFormat = (x) => {
  if (x === undefined || !x) {
    return x
  } else {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
}

const baseURL = 'http://test.hixcare.tw/hixLocal'

// 取 結帳教班表 資料
async function receiptReport2() {
  let data = []
  try {
    const res = await axios({
      method: 'post',
      url: `${baseURL}/report/receiptReport2`,
      headers: {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImhpeGFkbWluIiwiaWF0IjoxNjcxNzc2MjI3LCJleHAiOjE2NzE4NjI2Mjd9.ozmNLsGOCCnHfw590J80mz2_NOPC7p0_F6uyJMhq_dY'
      },
      data: {
        accountingShiftIds: [],
        counterUserIds: [
          "1111",
          "A369",
          "A370",
          "A435",
          "A531",
          "A532",
          "A550",
          "A574",
          "A586",
          "AZ91",
          "AZ92",
          "B109",
          "B373",
          "B451",
          "B454",
          "B478",
          "B498",
          "B525",
          "B539",
          "B542",
          "BZ91",
          "BZ92"
        ],
        dateFrom: "2022-12-20",
        dateTo: "2022-12-23",
        // groupRule: "DATE_SHIFT",
        groupRule: "null",
        printDate: "2022-12-23"
      }
    });
    // console.log('res-data', res.data)
    // console.log('res-data-result', res.data.result)
    // console.log('res', res.data.result.receiptReport)
    // console.log('res', res.data.result.receiptReport[0])
    console.log('【掛號批價】小計', moneyFormat(res.data.result.receiptReport[0].reportReportItemSummary.total))
    console.log('【押金】小計', moneyFormat(res.data.result.receiptReport[0].receiptDepositItemSummary.total))
    console.log('【門診自費/代收】小計', moneyFormat(res.data.result.receiptReport[0].receiptSelfBehalfItemSummary.total))
    console.log('【自費購物】小計', moneyFormat(res.data.result.receiptReport[0].ecReportItemSummary.total))
    console.log('總計', moneyFormat(res.data.result.receiptReport[0].totalReceiptSummary.amount))
    return {
      reportReportItemSummary: moneyFormat(res.data.result.receiptReport[0].reportReportItemSummary.total),
      receiptDepositItemSummary: moneyFormat(res.data.result.receiptReport[0].receiptDepositItemSummary.total),
      receiptSelfBehalfItemSummary: moneyFormat(res.data.result.receiptReport[0].receiptSelfBehalfItemSummary.total),
      ecReportItemSummary: moneyFormat(res.data.result.receiptReport[0].ecReportItemSummary.total),
      totalReceiptSummary: moneyFormat(res.data.result.receiptReport[0].totalReceiptSummary.amount)
    }
    // data.push(moneyFormat(res.data.result.receiptReport[0].reportReportItemSummary.total))
    // return data
  } catch (error) {
    console.log('error', error)
  }
}

// receiptReport2()

export default receiptReport2

// /html/body/div[1]/div
// const baseTotalDOM = Selector('#app').child('div').child('div').nth(2).child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').child('div').nth(1).child('div').nth(1).child('div').child('div')
// const reportReportItemSummary = baseTotalDOM.child('table').nth(1).child('tbody').child('tr').child('td').nth(2).child('span').nth(4)
// const receiptDepositItemSummary = baseTotalDOM.child('table').nth(3).child('tbody').child('tr').child('td').nth(2).child('span').nth(4)
// const receiptSelfBehalfItemSummary = baseTotalDOM.child('table').nth(5).child('tbody').child('tr').child('td').nth(2).child('span').nth(4)
// const ecReportItemSummary = baseTotalDOM.child('table').nth(7).child('tbody').child('tr').child('td').nth(2).child('span').nth(4)
// /html/body/div[1]/div/div/div[3]/div/div/div/div/div/div/div/div/div/div[2]/div[2]/div/div/table[2]/tbody/tr/td[3]/span[5]
// /html/body/div[1]/div/div/div[3]/div/div/div/div/div/div/div/div/div/div[2]/div[2]/div/div/table[4]/tbody/tr/td[3]/span[5]
// /html/body/div[1]/div/div/div[3]/div/div/div/div/div/div/div/div/div/div[2]/div[2]/div/div/table[6]/tbody/tr/td[3]/span[5]
// /html/body/div[1]/div/div/div[3]/div/div/div/div/div/div/div/div/div/div[2]/div[2]/div/div/table[8]/tbody/tr/td[3]/span[5]
// 總計
// const totalReceiptSummary = baseTotalDOM.child('table').nth(8).child('tbody').child('tr').nth(4).child('td').nth(8).child('span')
// /html/body/div[1]/div/div/div[3]/div/div/div/div/div/div/div/div/div/div[2]/div[2]/div/div/table[9]/tbody/tr[5]/td[9]/span