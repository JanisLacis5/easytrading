import {Outlet} from "react-router-dom"
import Aside from "./Aside"

const DashboardLayout = () => {
    return (
        <main>
            <div className="dashboard-page-1">
                <aside className="dashboard-pages">
                    <Aside />
                </aside>
                <Outlet />
            </div>
        </main>
    )
}
export default DashboardLayout
