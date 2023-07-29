import {useState} from "react"
import userIcon from "../../../assets/user-icon.svg"
import "./signupinfoform.css"

const SignupInfoForm = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [account, setAccount] = useState("")

    return (
        <div className="signup-info-form">
            <h1> hello!</h1>
            <p>
                Hello, we need to collect simple information about the user so
                you can have better experience on our website.
            </p>
            <form>
                <div className="signup-info-form-profile-pic">
                    <h2>Profile picture (optional)</h2>
                    <div className="signup-info-form-profile-pic-input">
                        <input
                            type="file"
                            name="profilePic"
                            id="profilePic"
                            accept="image/*"
                        />
                        <label htmlFor="profilePic">
                            <img src={userIcon} alt="" />
                        </label>
                    </div>
                </div>
                <div className="signup-info-form-input-container">
                    <div class="signup-info-form-field">
                        <div className="floating">
                            <input
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                type="text"
                                name="firstName"
                                id="firstName"
                            />
                            <label
                                className={firstName ? "label-up" : ""}
                                htmlFor="firstName">
                                First Name:{" "}
                            </label>
                        </div>
                    </div>
                    <div class="signup-info-form-field">
                        <div className="floating">
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <label
                                className={lastName ? "label-up" : ""}
                                htmlFor="lastName">
                                Your First Name:{" "}
                            </label>
                        </div>
                    </div>
                    <div class="signup-info-form-field">
                        <div className="floating">
                            <input
                                type="text"
                                name="username"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <label
                                className={username ? "label-up" : ""}
                                htmlFor="username">
                                Create Username:{" "}
                            </label>
                        </div>
                    </div>
                    <div class="signup-info-form-field">
                        <div className="floating">
                            <input
                                type="number"
                                name="account"
                                id="account"
                                value={account}
                                onChange={(e) => setAccount(e.target.value)}
                            />
                            <label
                                className={account ? "label-up" : ""}
                                htmlFor="account">
                                Your Account Balance ($):{" "}
                            </label>
                        </div>
                    </div>
                    <div className="signup-info-form-field">
                        <button>Finish</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default SignupInfoForm
