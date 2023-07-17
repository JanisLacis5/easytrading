import {Link} from "react-router-dom"
import "./dashboard.css"
import Aside from "./Aside"
import WinLossGraph from "./WinLossGraph"

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
                <div></div>
                <div></div>
            </div>
        </main>
    )
}
export default Dashboard
