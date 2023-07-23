import "../Login/login.css"
import SignupForm from "./SignupForm"
import "./signup.css"
import {SlSocialGoogle, SlSocialFacebook} from "react-icons/sl"
import {useGlobalContext} from "../../context/globalContext"

const Signup = () => {
    const {isHovered} = useGlobalContext()

    return (
        <main>
            <div className="card-page">
                <div
                    className={`signup-box ${
                        isHovered ? "signup-box-hovered" : ""
                    }`}>
                    <div className="signup-title">
                        <h2>Sign Up</h2>
                    </div>
                    <div className="login-main">
                        <SignupForm />
                    </div>
                    <div className="social-signup">
                        <p>or sign up with</p>
                        <div className="social-login-buttons">
                            <a
                                href="http://localhost:3000/auth/google"
                                className="social-button"
                                role="button">
                                <SlSocialGoogle className="social-icon" />
                            </a>
                            <a
                                href="http://localhost:3000/auth/facebook"
                                className="social-button"
                                role="button">
                                <SlSocialFacebook className="social-icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Signup
