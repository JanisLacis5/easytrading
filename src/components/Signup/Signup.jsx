import {useState} from "react"
import "../Login/login.css"
import SignupForm from "./SignupForm"
import "./signup.css"
import {SlSocialGoogle, SlSocialFacebook, SlSocialTwitter} from "react-icons/sl"
import {useGlobalContext} from "../../context"
import axios from "axios"
import customFetch from "../../utils"

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
                            <button
                                type="button"
                                className="social-button"
                                onClick={async () => {
                                    window.location.replace(
                                        "http://localhost:3000/api/login/google"
                                    )
                                    const {data} = await customFetch.get(
                                        "/login/google"
                                    )
                                }}>
                                <SlSocialGoogle className="social-icon" />
                            </button>
                            <button
                                type="button"
                                className="social-button"
                                onClick={async () => {
                                    window.location.replace(
                                        "http://localhost:3000/api/login/facebook"
                                    )
                                    const {data} = await customFetch.get(
                                        "/login/facebook"
                                    )
                                }}>
                                <SlSocialFacebook className="social-icon" />
                            </button>
                            <button
                                type="button"
                                className="social-button"
                                onClick={async () => {
                                    window.location.replace(
                                        "http://localhost:3000/api/login/twitter"
                                    )
                                    const {data} = await customFetch.get(
                                        "/login/twitter"
                                    )
                                }}>
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
