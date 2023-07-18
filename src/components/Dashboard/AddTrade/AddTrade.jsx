import "../dashboard.css"
import "./addtrade.css"
import {useGlobalContext} from "../../../context"
import customFetch from "../../../utils"

const AddTrade = () => {
    const {
        isHovered,
        setIsHovered,
        stock,
        setStock,
        accBefore,
        setAccBefore,
        accAfter,
        setAccAfter,
        pl,
        setPl,
        date,
        setDate,
        time,
        setTime,
    } = useGlobalContext()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const {data} = await customFetch.post("/newtrade", {
            stock: stock,
            accBefore: accBefore,
            accAfter: accAfter,
            pl: pl,
            date: date,
            time: time,
        })
    }

    return (
        <form className="addtrade" onSubmit={handleSubmit}>
            <h2 className="graph-title">Add trade</h2>
            <div className="addtrade-stock-input">
                <label htmlFor="stock">Stock : </label>
                <input
                    type="text"
                    name="stock"
                    id="stock"
                    placeholder="AAPL"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                />
            </div>
            <div className="addtrade-account-input-container">
                <div className="addtrade-account-input">
                    <label htmlFor="stock">Account Before : </label>
                    <input
                        type="number"
                        name="acc-bef"
                        id="acc-bef"
                        placeholder="1000.00"
                        value={accBefore}
                        onChange={(e) => setAccBefore(e.target.value)}
                    />
                </div>
                <div className="addtrade-account-input">
                    <label htmlFor="stock">Account After : </label>
                    <input
                        type="number"
                        name="acc-aft"
                        id="acc-aft"
                        placeholder="10000.00"
                        value={accAfter}
                        onChange={(e) => setAccAfter(e.target.value)}
                    />
                </div>
            </div>
            <div className="addtrade-account-input">
                <label htmlFor="pl" id="pl-label">
                    Trade +/- $ :{" "}
                </label>
                <input
                    type="text"
                    name="pl"
                    id="pl"
                    placeholder="+100.00"
                    value={Number(accBefore) - Number(accAfter)}
                />
            </div>
            <div className="addtrade-daytime-inputs-container">
                <div className="addtrade-daytime-inputs">
                    <div className="addtrade-daytime-input">
                        <label htmlFor="date">Date :</label>
                        <input
                            type="date"
                            name="date"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div className="addtrade-daytime-input">
                        <label htmlFor="time">Time :</label>
                        <input
                            type="time"
                            name="time"
                            id="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className="addtrade-btn">
                <button type="submit">Add Trade</button>
            </div>
        </form>
    )
}
export default AddTrade
