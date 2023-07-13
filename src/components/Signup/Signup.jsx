import "../Login/login.css"
import "./signup.css"
import userIcon from "../../assets/user-icon.svg"
import passwordIcon from "../../assets/password-icon.svg"
import {SlSocialGoogle, SlSocialFacebook, SlSocialTwitter} from "react-icons/sl"

const Signup = () => {
    return (
        <main>
            <div className="page">
                <div className="signup-box">
                    <div className="signup-title">
                        <h2>Sign Up</h2>
                    </div>
                    <div className="login-main">
                        <form className="login-form">
                            <div className="login-input">
                                <div className="icon">
                                    <img
                                        src={userIcon}
                                        alt="icon"
                                        className="user-icon"
                                    />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="login-input">
                                <div className="icon">
                                    <img
                                        src={passwordIcon}
                                        alt="icon"
                                        className="user-icon"
                                    />
                                </div>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="login-input">
                                <div className="icon">
                                    <img
                                        src={passwordIcon}
                                        alt="icon"
                                        className="user-icon"
                                    />
                                </div>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Confirm Password"
                                />
                            </div>
                            <button type="submit" className="login-button">
                                Sign Up
                            </button>
                        </form>
                    </div>
                    <div className="social-signup">
                        <p>or sign up with</p>
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

export default Signup
