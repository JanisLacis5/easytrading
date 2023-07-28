import {useSelector} from "react-redux"
import "../dashboard.css"
import "./stats.css"
import {useEffect, useState} from "react"
import {lostPl, wonPl} from "./statsFunc"

const Stats = () => {
    const [wonPlState, setWonPlState] = useState({})
    const [lostPlState, setLostPlState] = useState({})
    const {user} = useSelector((store) => store.user)

    useEffect(() => {
        setLostPlState(lostPl(user.trades))
        setWonPlState(wonPl(user.trades))
    }, [user.trades])

    console.log(wonPlState)
    console.log(lostPlState)

    return (
        <div className="detailed-stats">
            <h1 className="graph-title">Statistics</h1>
            <div className="detailed-stats-table">
                <div>
                    {/* TODO */}
                    <span>Your starting account balance: </span>
                </div>
                <div>
                    {/* TODO */}
                    <span>Your account balance now: </span>
                </div>
                <div>
                    {/* TODO */}
                    <span>Account increase / decrease: </span>
                </div>
                <div>
                    {/* DONEEEEE */}
                    <span>Average won day P/L: </span>
                    <span className="detailed-stats-stat">
                        {wonPlState.averageWonDayPl}
                    </span>
                </div>
                <div>
                    {/* DONEEEEE */}
                    <span>Average lost day P/L: </span>
                    <span className="detailed-stats-stat">
                        {lostPlState.averageLostDayPl}
                    </span>
                </div>
                <div>
                    {/* DONEEEEE */}
                    <span>Biggest win: </span>
                    <span className="detailed-stats-stat">
                        {wonPlState.biggestWin}
                    </span>
                </div>
                <div>
                    {/* DONEEEEE */}
                    <span>Biggest loss: </span>
                    <span className="detailed-stats-stat">
                        {lostPlState.biggestLoss}
                    </span>
                </div>
                <div>
                    {/* DONEEEEE */}
                    <span>Won days: </span>
                    <span className="detailed-stats-stat">
                        {wonPlState.wonDays}
                    </span>
                </div>
                <div>
                    {/* DONEEEEE */}
                    <span>Lost days: </span>
                    <span className="detailed-stats-stat">
                        {lostPlState.lostDays}
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Stats
