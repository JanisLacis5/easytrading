import {useState} from "react"
import "../Login/login.css"
import SignupForm from "./SignupForm"
import "./signup.css"
import {SlSocialGoogle, SlSocialFacebook, SlSocialTwitter} from "react-icons/sl"

const Signup = () => {
    return (
        <main>
            <div className="card-page">
                <div className="signup-box">
                    <div className="signup-title">
                        <h2>Sign Up</h2>
                    </div>
                    <div className="login-main">
                        <SignupForm />
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
