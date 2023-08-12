import {useDispatch, useSelector} from "react-redux"
import "./dashboard.css"
import {toggleTrading} from "../../features/asideSlice"
import {Link} from "react-router-dom"
import {IoMdOpen} from "react-icons/io"
import {useState} from "react"

const Aside = () => {
    const {tradingButton} = useSelector((store) => store.aside)
    const dispatch = useDispatch()

    const [show, setShow] = useState(false)

    return (
        <aside className={show ? "dashboard-pages show" : "dashboard-pages"}>
            {show ? (
                <button
                    className="dashboard-page"
                    type="button"
                    onClick={() => dispatch(toggleTrading())}>
                    Trading
                </button>
            ) : (
                <button
                    className="no-show-button"
                    type="button"
                    onClick={() => setShow(true)}>
                    <IoMdOpen size={20} />
                </button>
            )}
            {tradingButton && (
                <div className={!show && "no-show"}>
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
            <button
                className={show ? "dashboard-page" : "no-show"}
                type="button">
                Screeners
            </button>
            <button
                className={show ? "dashboard-page" : "no-show"}
                type="button">
                Chatroom
            </button>
        </aside>
    )
}
export default Aside
