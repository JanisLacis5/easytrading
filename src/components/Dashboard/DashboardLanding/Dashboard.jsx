import "../dashboard.css"
import WinLossGraph from "./WinLossGraph"
import ProfitableStocks from "./ProfitableStocks"
import Screener from "./Screener"

const Dashboard = () => {
    return (
        <div className="dashboard-landing">
            <WinLossGraph />
            <ProfitableStocks />
            <section>
                <Screener />
            </section>
        </div>
    )
}
export default Dashboard
