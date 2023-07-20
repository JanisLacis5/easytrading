import {useDispatch, useSelector} from "react-redux"
import "./tradelog.css"
import {
    updateFilters,
    filterProducts,
    clearFilters,
} from "../../../features/filterSlice"
import {RxCross1} from "react-icons/rx"
import {useGlobalContext} from "../../../context/globalContext"
import Select from "react-select"

const Filters = () => {
    const dispatch = useDispatch()

    const {user} = useSelector((store) => store.user)
    const {filters} = useSelector((store) => store.filter)
    const {stock, date, action, PL} = filters
    const {isFilters, setIsFilters} = useGlobalContext()

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        dispatch(updateFilters({name: name, value: value}))
    }

    return (
        <form
            className="tradelog-filters"
            onChange={() => dispatch(filterProducts({trades: user.trades}))}>
            <div>
                <label htmlFor="stock">Stock: </label>
                <input
                    id="stock"
                    type="text"
                    name="stock"
                    placeholder="AAPL"
                    value={stock}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="date">Date: </label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="action">Action: </label>
                <select
                    id="action"
                    name="action"
                    value={action}
                    onChange={handleChange}>
                    <option value="default">Long / Short</option>
                    <option value="long">Long</option>
                    <option value="short">Short</option>
                </select>
            </div>
            <div>
                <label htmlFor="PL">P/L: </label>
                <select id="PL" name="PL" value={PL} onChange={handleChange}>
                    <option value="default"></option>
                    <option value="positive">+</option>
                    <option value="negative">-</option>
                </select>
            </div>
            <button
                type="button"
                className="tradelog-filters-cross"
                onClick={() => setIsFilters(false)}>
                <RxCross1 />
            </button>

            <button
                type="button"
                className="tradelog-filters-clear"
                onClick={() => {
                    dispatch(clearFilters({trades: user.trades}))
                }}>
                Clear Filters
            </button>
        </form>
    )
}
export default Filters
