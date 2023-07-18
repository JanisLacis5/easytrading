import "./login.css"
import {SlSocialGoogle, SlSocialFacebook, SlSocialTwitter} from "react-icons/sl"
import LoginForm from "./LoginForm"

const Login = () => {
    return (
        <main>
            <div className="card-page">
                <div className="login-box">
                    <div className="login-title">
                        <h2>User Login</h2>
                    </div>
                    <div className="login-main">
                        <LoginForm />
                    </div>
                    <div className="social-login">
                        <p>or login with</p>
                        <div className="social-login-buttons">
                            <a
                                href="http://localhost:3000/auth/google"
                                className="social-button">
                                <SlSocialGoogle className="social-icon" />
                            </a>
                            <a
                                href="http://localhost:3000/auth/facebook"
                                className="social-button">
                                <SlSocialFacebook className="social-icon" />
                            </a>
                            {/* <a
                                href="http://localHost:3000/auth/twitter"
                                className="social-button">
                                <SlSocialTwitter className="social-icon" />
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login
