import {Outlet, useNavigate} from "react-router-dom"
import Navbar from "./Navbar/Navbar"
import {useEffect} from "react"
import {useSelector} from "react-redux"

const SiteLayout = () => {
    const {isLogged} = useSelector((store) => store.user)
    const navigate = useNavigate()

    useEffect(() => {
        if (isLogged) {
            navigate("/dashboard")
        } else {
            navigate("/landing")
        }
    }, [])

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}
export default SiteLayout
