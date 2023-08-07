import {Outlet, useNavigate} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import {useEffect} from "react"
import {useSelector} from "react-redux"

const SiteLayout = () => {
    const {isLogged} = useSelector((store) => store.user)
    const navigate = useNavigate()

    useEffect(() => {
        if (window.location.pathname !== "/loading") {
            const currentPage = sessionStorage.getItem("currentPage")
            if (isLogged) {
                if (currentPage && currentPage !== "/landing") {
                    navigate(currentPage)
                } else {
                    navigate("/dashboard")
                }
            } else {
                navigate("/landing")
            }
        } else {
            navigate("/dashboard")
        }
    }, [])

    useEffect(() => {
        const handleBeforeUnload = () => {
            sessionStorage.setItem("currentPage", window.location.pathname)
        }
        window.addEventListener("beforeunload", handleBeforeUnload)
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload)
        }
    }, [])

    return (
        <main>
            <Navbar />
            <Outlet />
        </main>
    )
}
export default SiteLayout
