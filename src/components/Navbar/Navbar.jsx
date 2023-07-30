import {Link, useNavigate} from "react-router-dom"
import "./navbar.css"
import {useDispatch, useSelector} from "react-redux"
import {logout, setIsLoading} from "../../features/userSlice"
import UserButton from "../User/UserButton"

const Navbar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isLogged} = useSelector((store) => store.user)

    return (
        <nav>
            <div className="logo">
                <h1>
                    <span className="logo-easy">Easy</span>
                    <span className="logo-trading">Trading</span>
                </h1>
            </div>
            <div className="links">
                <Link
                    className="link"
                    to={isLogged ? "/dashboard" : "/landing"}>
                    {isLogged ? "Dashboard" : "Landing"}
                </Link>
                <Link className="link" to="/about">
                    About
                </Link>
                <Link className="link" to="/pricing">
                    Pricing
                </Link>
                <Link className="link" to="/contact">
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
                    // <button
                    //     type="button"
                    //     className="login-btn"
                    //     onClick={() => {
                    //         dispatch(logout())
                    //         dispatch(setIsLoading())
                    //         navigate("/landing")
                    //     }}>
                    //     Logout
                    // </button>
                    <UserButton />
                ) : (
                    <Link className="login-btn" to="/login">
                        Login
                    </Link>
                )}
            </div>
        </nav>
    )
}
export default Navbar
