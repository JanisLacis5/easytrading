import {useEffect, useState} from "react"
import "./tradelog.css"
import {useDispatch, useSelector} from "react-redux"
import Filters from "./Filters"
import {setFilteredProducts} from "../../../features/filterSlice"
import {useGlobalContext} from "../../../context/globalContext"

const TradeLog = () => {
    const dispatch = useDispatch()

    const [filter, setFilter] = useState("all-time")

    const {isFilters, setIsFilters} = useGlobalContext()
    const {user} = useSelector((store) => store.user)

    useEffect(() => {
        dispatch(setFilteredProducts({trades: user.trades}))
    }, [user.trades])

    const {filteredProducts} = useSelector((store) => store.filter)

    return (
        <section className="tradelog">
            <h2>Log</h2>
            <div className="tradelog-filter">
                <select
                    onChange={(e) => {
                        setFilter(e.target.value)
                    }}>
                    <option value="all-time">All time</option>
                    <option value="day">Today</option>
                    <option value="week">This week</option>
                    <option value="month">This month</option>
                    <option value="year">This year</option>
                </select>
                <button type="button" onClick={() => setIsFilters(!isFilters)}>
                    Filters
                </button>
            </div>
            <div className="tradelog-trades-header">
                {isFilters && <Filters />}
                <p>Time</p>
                <p>Stock</p>
                <p>Account Before $</p>
                <p>Account After $</p>
                <p>P/L $</p>
                <p>Action</p>
            </div>
            <div className="tradelog-trades">
                {filteredProducts?.map((trade, index) => {
                    const pl = trade.pl < 0 ? trade.pl * -1 : trade.pl
                    const {date, time, stock, accBefore, accAfter} = trade
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
                            <p>action</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
export default TradeLog
