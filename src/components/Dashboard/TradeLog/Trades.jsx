import {useDispatch, useSelector} from "react-redux"
import "./tradelog.css"
import {useEffect, useState} from "react"
import {setSortedTrades} from "../../../features/sortSlice"
import {
    filterProducts,
    setFilteredProducts,
} from "../../../features/filterSlice"

const Trades = ({trades}) => {
    const dispatch = useDispatch()

    const {sortedTrades} = useSelector((store) => store.sort)
    const {user} = useSelector((store) => store.user)
    const {filters, filteredProducts} = useSelector((store) => store.filter)

    useEffect(() => {
        dispatch(filterProducts({trades: sortedTrades}))
        dispatch(setSortedTrades({trades: filteredProducts}))
    }, [filters])

    useEffect(() => {
        dispatch(setSortedTrades({trades: user.trades}))
        dispatch(setFilteredProducts({trades: user.trades}))
    }, [user.trades])

    return (
        <>
            {trades?.map((trade, index) => {
                const pl = trade.pl < 0 ? trade.pl * -1 : trade.pl
                const {date, time, stock, accBefore, accAfter, action} = trade
                return (
                    <div key={index} className="tradelog-trade-container">
                        <div className="tradelog-trade-time">
                            <p>{date}</p>
                            <p>{time}</p>
                        </div>
                        <p>{stock.toUpperCase()}</p>
                        <p>${accBefore}</p>
                        <p>${accAfter}</p>
                        <p
                            style={
                                trade.pl > 0
                                    ? {color: "var(--color-trade-green)"}
                                    : {color: "var(--color-trade-red)"}
                            }>
                            {trade.pl > 0 ? "+" : "-"}${pl}
                        </p>
                        <p>{action}</p>
                    </div>
                )
            })}
        </>
    )
}
export default Trades
