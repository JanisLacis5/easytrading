import "../dashboard.css"
import WinLossGraph from "./WinLossGraph"
import ProfitableStocks from "./ProfitableStocks"
import Screener from "./Screener"
import {useSelector} from "react-redux"

const Dashboard = () => {
    return (
        <div className="dashboard-landing">
            <section className="default-dashboard-graph">
                <WinLossGraph />
            </section>
            <section className="stock-graph">
                <ProfitableStocks />
            </section>
            <section>
                <Screener />
            </section>
        </div>
    )
}
export default Dashboard
