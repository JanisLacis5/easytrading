import "./login.css"
import userIcon from "../../assets/user-icon.svg"
import passwordIcon from "../../assets/password-icon.svg"
import {SlSocialGoogle, SlSocialFacebook, SlSocialTwitter} from "react-icons/sl"

const Login = () => {
    return (
        <main>
            <div className="card-page">
                <div className="login-box">
                    <div className="login-title">
                        <h2>User Login</h2>
                    </div>
                    <div className="login-main">
                        <form className="login-form">
                            <div className="login-input">
                                <div className="login-icon">
                                    <img
                                        src={userIcon}
                                        alt="icon"
                                        className="user-icon"
                                    />
                                </div>
                                <input
                                    className="login-input-field"
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="login-input">
                                <div className="login-icon">
                                    <img
                                        src={passwordIcon}
                                        alt="icon"
                                        className="user-icon"
                                    />
                                </div>
                                <input
                                    className="login-input-field"
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                />
                            </div>
                            <button type="submit" className="login-button">
                                Login
                            </button>
                        </form>
                    </div>
                    <div className="social-login">
                        <p>or login with</p>
                        <div className="social-login-buttons">
                            <button type="button" className="social-button">
                                <SlSocialGoogle className="social-icon" />
                            </button>
                            <button type="button" className="social-button">
                                <SlSocialFacebook className="social-icon" />
                            </button>
                            <button type="button" className="social-button">
                                <SlSocialTwitter className="social-icon" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login
