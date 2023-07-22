import {Outlet, useNavigate} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import {useEffect} from "react"
import {useSelector} from "react-redux"
import {useGlobalContext} from "./context/globalContext"

const SiteLayout = () => {
    const {isLogged} = useSelector((store) => store.user)
    const navigate = useNavigate()
    const {isSocialLink, isReqLoading, setIsReqLoading} = useGlobalContext()

    useEffect(() => {
        if (!isReqLoading) {
            if (!isSocialLink) {
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
            }
        } else {
            setIsReqLoading(false)
            navigate("/dashboard")
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
