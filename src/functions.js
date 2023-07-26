import dayjs from "dayjs"
import("dayjs/locale/en")

dayjs.locale("en", {
    weekStart: 1,
})

export const filterChart = (trades, filter) => {
    const res = trades?.filter((trade) => dayjs().isSame(trade.date, filter))
    return res
}

export const countStats = (trades) => {
    let wonTrades = 0
    let lostTrades = 0
    let totalProfit = 0

    if (trades && trades.length) {
        trades.map((trade) => {
            if (trade.pl > 0) {
                wonTrades++
            }
            if (trade.pl < 0) {
                lostTrades++
            }
            totalProfit += trade.pl
        })
    }

    return {wonTrades, lostTrades, totalProfit}
}

export const passwordRequirements = (password) => {
    if (
        password.length < 8 ||
        !/[A-Z]/.test(password) ||
        !/[a-z]/.test(password) ||
        !/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)
    ) {
        return false
    }
    return true
}

export const profitableStocks = (trades) => {
    let tempTrades = [...trades]
    console.log(trades)
    const tempTradesSet = new Set()
    let ansArr = Array(tempTrades.length).fill(0)

    let j = 0

    tempTrades = tempTrades.sort((a, b) => a.stock.localeCompare(b.stock))
    ansArr[0] += tempTrades[0].pl
    tempTradesSet.add(tempTrades[0].stock)

    for (let i = 1; i < tempTrades.length; i++) {
        tempTradesSet.add(tempTrades[i].stock)
        if (tempTrades[i].stock !== tempTrades[i - 1].stock) {
            j++
        }
        ansArr[j] += tempTrades[i].pl
    }

    ansArr = ansArr.slice(0, tempTradesSet.size)
    let profits = ansArr.slice(0, tempTradesSet.size)
    let returnProfits = []
    let returnStocks = []
    let stocks = Array(...tempTradesSet)

    for (let i = 0; i < 5; i++) {
        const maxElement = Math.max(...profits)
        const indexMain = ansArr.indexOf(maxElement)
        const indexTemp = profits.indexOf(maxElement)
        returnProfits.push(maxElement)
        returnStocks.push(stocks[indexMain])
        profits.splice(indexTemp, 1)
    }

    return {
        profits: returnProfits,
        stocks: returnStocks,
    }
}
