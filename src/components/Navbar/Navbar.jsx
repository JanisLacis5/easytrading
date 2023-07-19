import {Link} from "react-router-dom"
import "./navbar.css"
import {useDispatch, useSelector} from "react-redux"
import {logout} from "../../features/userSlice"

const Navbar = () => {
    const dispatch = useDispatch()
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
                    <button
                        type="button"
                        className="login-btn"
                        onClick={() => {
                            dispatch(logout())
                            location.assign("http://localhost:5173")
                        }}>
                        Logout
                    </button>
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
