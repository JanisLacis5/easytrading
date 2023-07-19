import {Outlet, useNavigate} from "react-router-dom"
import Navbar from "./Navbar/Navbar"
import {useEffect} from "react"
import {useSelector} from "react-redux"

const SiteLayout = () => {
    const {isLogged} = useSelector((store) => store.user)
    const navigate = useNavigate()

    useEffect(() => {
        const currentPage = localStorage.getItem("currentPage")
        if (isLogged) {
            if (currentPage) {
                navigate(currentPage)
            } else {
                navigate("/dashboard")
            }
        } else {
            navigate("/landing")
        }
    }, [])

    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.setItem("currentPage", window.location.pathname)
        }
        window.addEventListener("beforeunload", handleBeforeUnload)
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload)
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
