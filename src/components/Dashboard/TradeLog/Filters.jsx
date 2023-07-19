import {useDispatch, useSelector} from "react-redux"
import "./tradelog.css"
import {updateFilters} from "../../../features/filterSlice"

const Filters = () => {
    const {filters} = useSelector((store) => store.filter)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        dispatch(updateFilters({name: name, value: value}))
    }

    return (
        <form className="tradelog-filters">
            <div>
                <label htmlFor="stock">Stock: </label>
                <input
                    type="text"
                    name="stock"
                    placeholder="AAPL"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="date">Date: </label>
                <input type="date" name="date" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="action">Action: </label>
                <input
                    type="text"
                    placeholder="Long / Short"
                    name="action"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="action">P/L: </label>
                <select name="PL" onChange={handleChange}>
                    <option value="default"></option>
                    <option value="positive">+</option>
                    <option value="negative">-</option>
                </select>
            </div>
        </form>
    )
}
export default Filters
