import "./tradelog.css"
import {useDispatch, useSelector} from "react-redux"
import Filters from "./Filters"
import Trades from "./Trades"
import {
    updateSort,
    sortTrades,
    setSortedTrades,
} from "../../../features/sortSlice"
import {toggleFilters} from "../../../features/filterSlice"
import {filterChart} from "../../../functions"
import {useEffect, useState} from "react"

const TradeLog = () => {
    const dispatch = useDispatch()

    const [filter, setFilter] = useState("")

    const {sortedTrades} = useSelector((store) => store.sort)
    const {isFilters} = useSelector((store) => store.filter)
    const {user} = useSelector((store) => store.user)

    useEffect(() => {
        dispatch(setSortedTrades({trades: user.trades}))
    }, [user.trades])

    const handleChange = (e) => {
        dispatch(updateSort({name: e.target.name}))
        dispatch(sortTrades({trades: sortedTrades}))
    }

    const trades = filter ? filterChart(sortedTrades, filter) : sortedTrades

    return (
        <section className="tradelog">
            <h2>Log</h2>
            <div className="tradelog-filter">
                <select
                    onChange={(e) => {
                        setFilter(e.target.value)
                    }}>
                    <option value="">All time</option>
                    <option value="day">Today</option>
                    <option value="week">This week</option>
                    <option value="month">This month</option>
                    <option value="year">This year</option>
                </select>
                <button type="button" onClick={() => dispatch(toggleFilters())}>
                    Filters
                </button>
            </div>
            <div className="tradelog-trades-header">
                {isFilters && <Filters />}
                <button type="button" name="date" onClick={handleChange}>
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
                <Trades trades={trades} />
            </div>
        </section>
    )
}

export default TradeLog
