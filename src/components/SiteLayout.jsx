import {Outlet} from "react-router-dom"
import Navbar from "./Navbar/Navbar"

const SiteLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}
export default SiteLayout
