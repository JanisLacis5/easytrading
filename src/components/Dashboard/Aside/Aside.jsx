import {useDispatch} from "react-redux"
import "./aside.css"
import {toggleTrading} from "../../../features/asideSlice"
import {Link} from "react-router-dom"
import {IoMdOpen} from "react-icons/io"
import {useState} from "react"

const Aside = () => {
    return (
        <aside className="dashboard-pages">
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
                <Link className="secondary-link" to="/dashboard/brokerlogin">
                    Add Broker
                </Link>
            </div>
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
