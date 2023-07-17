import {Link} from "react-router-dom"
import "./dashboard.css"
import Aside from "./Aside"
import WinLossGraph from "./WinLossGraph"
import ProfitableStocks from "./ProfitableStocks"
import Screener from "./Screener"

const Dashboard = () => {
    return (
        <main>
            <div className="page">
                <aside className="dashboard-pages">
                    <Aside />
                </aside>
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
        </main>
    )
}
export default Dashboard
