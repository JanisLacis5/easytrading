import {useDispatch, useSelector} from "react-redux"
import "./aside.css"
import {toggleTrading} from "../../../features/asideSlice"
import {Link} from "react-router-dom"
import {resetAside} from "../../../features/smallSlice"
import {RxCross1} from "react-icons/rx"

const Aside = () => {
    const dispatch = useDispatch()
    const {tradingButton} = useSelector((store) => store.aside)
    return (
        <aside className="dashboard-pages">
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
                    <Link className="secondary-link" to="/dashboard/calendar">
                        Calendar
                    </Link>
                    <Link className="secondary-link" to="/dashboard/stats">
                        Detailed stats
                    </Link>
                    <Link className="secondary-link" to="/dashboard/log">
                        My Trades
                    </Link>
                    <Link className="secondary-link" to="/dashboard/notes">
                        Notes
                    </Link>
                    <Link
                        className="secondary-link"
                        to="/dashboard/brokerlogin">
                        Add Broker
                    </Link>
                </div>
            )}
            <button className="dashboard-page" type="button">
                Screeners
            </button>
            <button className="dashboard-page" type="button">
                Chatroom
            </button>
        </aside>
    )
}
export default Aside
