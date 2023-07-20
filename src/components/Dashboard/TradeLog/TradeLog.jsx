import {useEffect, useState} from "react"
import "./tradelog.css"
import {useDispatch, useSelector} from "react-redux"
import Filters from "./Filters"
import {setFilteredProducts} from "../../../features/filterSlice"
import {useGlobalContext} from "../../../context/globalContext"
import {updateSort, sortTrades} from "../../../features/sortSlice"

const TradeLog = () => {
    const dispatch = useDispatch()

    const [filter, setFilter] = useState("all-time")

    const {isFilters, setIsFilters} = useGlobalContext()
    const {user} = useSelector((store) => store.user)
    const {option, value} = useSelector((store) => store.sort)

    useEffect(() => {
        dispatch(setFilteredProducts({trades: user.trades}))
    }, [user.trades])

    const {filteredProducts} = useSelector((store) => store.filter)
    // console.log(filteredProducts)

    // useEffect(() => {
    //     console.log(dispatch(updateSort({trades: filteredProducts})))
    // }, [])

    const handleChange = (e) => {
        dispatch(updateSort({name: e.target.name}))
        const tradesArray = dispatch(sortTrades({trades: filteredProducts}))
        dispatch(setFilteredProducts({trades: tradesArray}))
    }

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
                <button type="button" name="time" onClick={handleChange}>
                    Time
                </button>
                <button type="button" name="stock" onClick={handleChange}>
                    Stock
                </button>
                <button type="button" name="accBefore" onClick={handleChange}>
                    Account Before $
                </button>
                <button type="button" name="accAfter" onClick={handleChange}>
                    Account After $
                </button>
                <button type="button" name="pl" onClick={handleChange}>
                    P/L $
                </button>
                <button type="button" name="action" onClick={handleChange}>
                    Action
                </button>
            </div>
            <div className="tradelog-trades">
                {/* {filteredProducts?.map((trade, index) => {
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
                })} */}
            </div>
        </section>
    )
}
export default TradeLog
