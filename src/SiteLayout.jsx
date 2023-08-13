import {Link, Outlet, useNavigate} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {useGlobalContext} from "./context/globalContext"
import {reset} from "./features/smallSlice"
import "./components/Navbar/smalllink.css"
import UserButton from "./components/User/UserButton"

const SiteLayout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {isLogged} = useSelector((store) => store.user)
    const {showSmallLinks} = useSelector((store) => store.small)
    const {screenWidth, setScreenWidth} = useGlobalContext()

    useEffect(() => {
        window.onresize = () => setScreenWidth(window.screen.width)
    }, [])

    useEffect(() => {
        if (screenWidth > 900) {
            dispatch(reset())
        }
    }, [screenWidth])

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
            {showSmallLinks ? (
                <div className="small-links">
                    <div className="links">
                        <Link
                            className="link"
                            to={isLogged ? "/dashboard" : "/landing"}
                            onClick={() => dispatch(reset())}>
                            {isLogged ? "Dashboard" : "Landing"}
                        </Link>
                        <Link
                            className="link"
                            to="/about"
                            onClick={() => dispatch(reset())}>
                            About
                        </Link>
                        <Link
                            className="link"
                            to="/pricing"
                            onClick={() => dispatch(reset())}>
                            Pricing
                        </Link>
                        <Link
                            className="link"
                            to="/contact"
                            onClick={() => dispatch(reset())}>
                            Contact
                        </Link>
                    </div>
                    <div className="login">
                        {!isLogged && (
                            <Link className="signup-btn" to="/signup">
                                Sign up
                            </Link>
                        )}
                        {isLogged ? (
                            <UserButton />
                        ) : (
                            <Link className="login-btn" to="/login">
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            ) : (
                <Outlet />
            )}
        </main>
    )
}
export default SiteLayout
