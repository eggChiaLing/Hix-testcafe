const axios = require('axios');

// console.log('axios', axios.isCancel('something'));
const baseURL = 'http://test.hixcare.tw/hixLocal'
let listPTUsersId = []
let listCounterUsersId = []
let counterUserIds = []

// 取得復健人員列表
getListPTUsers()
// 取得櫃檯人員列表
listCounterUser()

// 取 結帳教班表 資料
async function receiptReport2(accountingShiftIds, groupRule, showGroupRuleValue) {
  try {
    counterUserIds = [...listPTUsersId, ...listCounterUsersId]
    // console.log('counterUserIds', counterUserIds)
    console.log('---API---資料群組----', accountingShiftIds, groupRule, showGroupRuleValue)
    const dateShiftData = []
    const printData = []
    const dateShiftSummaryTotal = []
    const res = await axios({
      method: 'post',
      url: `${baseURL}/report/receiptReport2`,
      headers: {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkEzNjkiLCJpYXQiOjE2NzIxMjM4OTAsImV4cCI6MTY3MjIxMDI5MH0.FP-tolYJTlrZtbj_cEflCoh-oblrqLu_2asdyi6sCNg'
      },
      data: {
        accountingShiftIds,
        counterUserIds,
        printDate: "2022-12-27",
        dateFrom: "2022-12-20",
        dateTo: "2022-12-27",
        groupRule
      }
    })

    // 處理 日期+時段 選項的資料結構
    if (groupRule === 'DATE_SHIFT') {
      for (let i = 0; i < res.data.result.receiptReport.length; i++) {
        // 取 時段加總 資料
        dateShiftData.push(Object.values(res.data.result.receiptReport[i])[0])
        // 取 時段加總 期間的總計
        dateShiftSummaryTotal.push(Object.values(res.data.result.receiptReport[i])[0].summary)
        // 取 時段明細 資料
        Object.values(res.data.result.receiptReport[i])[0].detail.forEach(item => {
          printData.push(item)
        })
      }

      if (showGroupRuleValue === '時段加總') {
        console.log('時段加總 資料', dateShiftData[0].detail[0].totalReceiptSummary.amount)
        console.log('時段加總 資料', dateShiftData[0].detail[1].totalReceiptSummary.amount)
        console.log('時段加總 資料', dateShiftData[0].detail[2].totalReceiptSummary.amount)
        // console.log('時段加總 期間的總計', dateShiftSummaryTotal)
        if (dateShiftSummaryTotal.length === 1) return dateShiftSummaryTotal[0]
        const sum = dateShiftSummaryTotal.reduce((acc, curr) => {
          return [{
            amount: acc[0].amount + curr.amount,
            ar: acc[0].ar + curr.ar,
            behalf: acc[0].behalf + curr.behalf,
            deposit: acc[0].deposit + curr.deposit,
            nhiSelfFee: acc[0].nhiSelfFee + curr.nhiSelfFee,
            registFee: acc[0].registFee + curr.registFee,
            registFee4Nhi: acc[0].registFee4Nhi + curr.registFee4Nhi,
            registFee4NhiPT: acc[0].registFee4NhiPT + curr.registFee4NhiPT,
            selfFee: acc[0].selfFee + curr.selfFee
          }]
        }, [{
          amount: 0,
          ar: 0,
          behalf: 0,
          deposit: 0,
          nhiSelfFee: 0,
          registFee: 0,
          registFee4Nhi: 0,
          registFee4NhiPT: 0,
          selfFee: 0
        }])
        console.warn('總計', sum[0])
        return sum[0]
      }

      // console.log('明細', printData[0])
      if (showGroupRuleValue === '明細') {
        return {
          reportReportItemSummary: moneyFormat(printData[0].reportReportItemSummary.total),
          receiptDepositItemSummary: moneyFormat(printData[0].receiptDepositItemSummary.total),
          receiptSelfBehalfItemSummary: moneyFormat(printData[0].receiptSelfBehalfItemSummary.total),
          ecReportItemSummary: moneyFormat(printData[0].ecReportItemSummary.total),
          totalReceiptSummary: moneyFormat(printData[0].totalReceiptSummary.amount)
        }
      }
    }
    // console.log('res 明細', res.data.result.receiptReport)
    return {
      reportReportItemSummary: moneyFormat(res.data.result.receiptReport[0].reportReportItemSummary.total), // 掛號批價
      receiptDepositItemSummary: moneyFormat(res.data.result.receiptReport[0].receiptDepositItemSummary.total), // 押金
      receiptSelfBehalfItemSummary: moneyFormat(res.data.result.receiptReport[0].receiptSelfBehalfItemSummary.total), // 門診自費/代收
      ecReportItemSummary: moneyFormat(res.data.result.receiptReport[0].ecReportItemSummary.total), // 自費購物
      totalReceiptSummary: moneyFormat(res.data.result.receiptReport[0].totalReceiptSummary.amount) // 總計
    }
  } catch (error) {
    console.log('error', error)
  }
}

// 錢錢
const moneyFormat = (x) => {
  if (x === undefined || !x) {
    return x
  } else {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
}

// 取得復健人員列表
async function getListPTUsers() {
  try {
    const resp = await axios({
      method: 'get',
      url: `${baseURL}/report/listPTUsers`
    })
    if (resp.data.code !== 0) return
    listPTUsersId = resp.data.result.map((item) => { return item.id })
    // console.log('listPTUsersId', listPTUsersId)
  } catch (err) {
    console.error(err)
  }
}

// 取得櫃檯人員列表
async function listCounterUser() {
  try {
    const resp = await axios({
      method: 'get',
      url: `${baseURL}/report/listCounterUsers`
    })
    if (resp.data.code !== 0) return
    // 人員選項
    listCounterUsersId = resp.data.result.map((item) => { return item.id })
    // console.log('listCounterUsersId', listCounterUsersId)
  } catch (err) {
    console.error(err)
  }
}

export default receiptReport2
