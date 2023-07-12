import {Link} from "react-router-dom"
import "./navbar.css"

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>
                    <span className="logo-easy">Easy</span>
                    <span className="logo-trading">Trading</span>
                </h1>
            </div>
            <div className="links">
                <Link className="link" to="/">
                    Home
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
                <Link className="login-btn" to="/login">
                    Login
                </Link>
            </div>
        </nav>
    )
}
export default Navbar
