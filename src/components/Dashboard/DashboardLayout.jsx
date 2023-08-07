import {Outlet} from "react-router-dom"
import Aside from "./Aside"
import {useSelector} from "react-redux"
import "./dashboard.css"

const DashboardLayout = () => {
    const {isLoading} = useSelector((store) => store.user)

    if (isLoading) {
        return <div className="loading"></div>
    }

    return (
        <section>
            <div className="dashboard-page-1">
                <aside className="dashboard-pages">
                    <Aside />
                </aside>
                <Outlet />
            </div>
        </section>
    )
}
export default DashboardLayout
