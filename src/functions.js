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

    if (trades) {
        trades?.map((trade) => {
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
