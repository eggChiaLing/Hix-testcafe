const axios = require('axios')

const today = new Date()
const year = today.getFullYear()
const month = ('0' + (today.getMonth() + 1)).slice(-2)
const day = ('0' + today.getDate()).slice(-2)
const formattedDate = year + '-' + month + '-' + day
console.log('今天的日期', formattedDate, month)

const baseURL = 'http://test.hixcare.tw/hixLocal'
let listPTUsersId = []
let listCounterUsersId = []
let counterUserIds = []

// 取得復健人員列表
getListPTUsers()
// 取得櫃檯人員列表
listCounterUser()

// 取 結帳教班表 資料
async function receiptReport2(dateFromNumber, accountingShiftIds, groupRule, showGroupRuleValue) {
  try {
    counterUserIds = [...listPTUsersId, ...listCounterUsersId]
    // console.log('counterUserIds', counterUserIds)
    console.log('---API---資料群組----', dateFromNumber, accountingShiftIds, groupRule, showGroupRuleValue)
    const dateFromDay = dateFromNumber.length === 1 ? `0${dateFromNumber}` : dateFromNumber
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
        printDate: formattedDate,
        dateFrom: year + '-' + month + '-' + dateFromDay,
        dateTo: formattedDate,
        groupRule
      }
    })

    // 日期-資料
    if (groupRule === 'DATE') {
      if (showGroupRuleValue === '明細') {
        return {
          reportReportItemSummary: moneyFormat(res.data.result.receiptReport[0].reportReportItemSummary.total), // 掛號批價
          receiptDepositItemSummary: moneyFormat(res.data.result.receiptReport[0].receiptDepositItemSummary.total), // 押金
          receiptSelfBehalfItemSummary: moneyFormat(res.data.result.receiptReport[0].receiptSelfBehalfItemSummary.total), // 門診自費/代收
          ecReportItemSummary: moneyFormat(res.data.result.receiptReport[0].ecReportItemSummary.total), // 自費購物
          totalReceiptSummary: moneyFormat(res.data.result.receiptReport[0].totalReceiptSummary.amount) // 總計
        }
      }
      
      if (showGroupRuleValue === '日期加總') {
        // 取得 各日期的加總
        const all = res.data.result.receiptReport.map((item) => {
          return {
            date: item.dateInfo.date,
            shift: item.dateInfo.shift,
            totalReceiptSummary: item.totalReceiptSummary
          }
        })
        // console.log('日期加總', all[0].date, all[0].totalReceiptSummary.amount)
        // console.log('日期加總', res.data.result.dateRangeSummary)
        // 回傳的第一筆資料
        return {
          data: all[0].date, // 日期
          registFee: moneyFormat(all[0].totalReceiptSummary.registFee), // 掛號費
          registFee4Nhi: moneyFormat(all[0].totalReceiptSummary.registFee4Nhi), // 掛號費部份負擔	
          registFee4NhiPT: moneyFormat(all[0].totalReceiptSummary.registFee4NhiPT), // 復健部份負擔	
          nhiSelfFee: moneyFormat(all[0].totalReceiptSummary.nhiSelfFee), // 藥費負擔	
          selfFee: moneyFormat(all[0].totalReceiptSummary.selfFee), // 自費
          behalf: moneyFormat(all[0].totalReceiptSummary.behalf), // 代收
          deposit: moneyFormat(all[0].totalReceiptSummary.deposit), // 押金
          ar: moneyFormat(all[0].totalReceiptSummary.ar), // 欠款
          amount: moneyFormat(all[0].totalReceiptSummary.amount) // 實收
        }
        // TODO: 總計區 需要要根據長度計算DOM位置
        // return {
        //   registFee: moneyFormat(res.data.result.dateRangeSummary.registFee), // 掛號費
        //   registFee4Nhi: moneyFormat(res.data.result.dateRangeSummary.registFee4Nhi), // 掛號費部份負擔	
        //   registFee4NhiPT: moneyFormat(res.data.result.dateRangeSummary.registFee4NhiPT), // 復健部份負擔	
        //   nhiSelfFee: moneyFormat(res.data.result.dateRangeSummary.nhiSelfFee), // 藥費負擔	
        //   selfFee: moneyFormat(res.data.result.dateRangeSummary.selfFee), // 自費
        //   behalf: moneyFormat(res.data.result.dateRangeSummary.behalf), // 代收
        //   deposit: moneyFormat(res.data.result.dateRangeSummary.deposit), // 押金
        //   ar: moneyFormat(res.data.result.dateRangeSummary.ar), // 欠款
        //   amount: moneyFormat(res.data.result.dateRangeSummary.amount) // 實收
        // }
      }
      
      if (showGroupRuleValue === '人員加總') {
        console.log('人員加總', res.data.result.receiptReport[0].receiptSummaryByUsers[0].userName)
        console.log('人員加總', res.data.result.receiptReport[0].receiptSummaryByUsers[0].amount)
        console.log('人員加總', res.data.result.receiptReport[0].receiptSummaryByUsers[0].expend)
        console.log('人員加總', res.data.result.receiptReport[0].receiptSummaryByUsers[0].total)
        return {
          receiptSummaryByUsersName: res.data.result.receiptReport[0].receiptSummaryByUsers.userName, // 名稱
          receiptSummaryByUsersAmount: moneyFormat(res.data.result.receiptReport[0].receiptSummaryByUsers[0].amount), // 
          receiptSummaryByUsersExpend: moneyFormat(res.data.result.receiptReport[0].receiptSummaryByUsers[0].expend), // 
          receiptSummaryByUsersTotal: moneyFormat(res.data.result.receiptReport[0].receiptSummaryByUsers[0].total), // 
        }
      }
    }

    // 日期+時段-資料
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
        // console.log('時段加總 資料', dateShiftData, dateShiftSummaryTotal, printData)
        if (dateShiftSummaryTotal.length === 1) {
          console.log('!!! 時段加總????????????????????????????????????????????????????')
          // return {
          //   amAmount: moneyFormat(dateShiftData[0].detail[0].totalReceiptSummary.amount),
          //   pmAmount: moneyFormat(dateShiftData[0].detail[1].totalReceiptSummary.amount),
          //   eveAmount: moneyFormat(dateShiftData[0].detail[2].totalReceiptSummary.amount),
          //   data: dateShiftData[0].detail[0].dateInfo.date,
          //   dataAmount: moneyFormat(dateShiftData[0].summary.amount),
          //   allAmount: moneyFormat(dateShiftSummaryTotal[0].amount)
          // }
        }
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
        // console.warn('總計', sum[0])
        // 日期+時段--時段加總
        return {
          amAmount: moneyFormat(dateShiftData[0].detail[0].totalReceiptSummary.amount),
          pmAmount: moneyFormat(dateShiftData[0].detail[1].totalReceiptSummary.amount),
          eveAmount: moneyFormat(dateShiftData[0].detail[2].totalReceiptSummary.amount),
          data: dateShiftData[0].detail[0].dateInfo.date,
          dataAmount: moneyFormat(dateShiftData[0].summary.amount),
          allAmount: moneyFormat(sum[0].amount)
        } 
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
    // 不設定-明細
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
