import {useDispatch, useSelector} from "react-redux"
import "./dashboard.css"
import {toggleTrading} from "../../features/asideSlice"
import {Link, useNavigate} from "react-router-dom"

const Aside = () => {
    const {tradingButton} = useSelector((store) => store.aside)
    const dispatch = useDispatch()

    return (
        <>
            <button
                className="dashboard-page"
                type="button"
                onClick={() => dispatch(toggleTrading())}>
                Trading
            </button>
            {tradingButton && (
                <div>
                    <Link className="secondary-link" to="/dashboard/addtrade">
                        Add Trade
                    </Link>
                    <Link className="secondary-link" to="/dashboard/log">
                        Your Trades
                    </Link>
                </div>
            )}
            <button className="dashboard-page" type="button">
                Screeners
            </button>
            <button className="dashboard-page" type="button">
                Chatroom
            </button>
        </>
    )
}
export default Aside
