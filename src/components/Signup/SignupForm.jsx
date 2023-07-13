import "./signup.css"
import "../Login/login.css"
import userIcon from "../../assets/user-icon.svg"
import passwordIcon from "../../assets/password-icon.svg"
import {useState} from "react"
import customFetch from "../../utils"
import {toast} from "react-toastify"

const SignupForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        //TODO: make requriments for passwords strength
        if (password === confirmPassword) {
            const res = await customFetch.post("/signup", {
                email: email,
                password: password,
            })
            console.log(res)
        } else {
            toast.error("Passwords do not match")
            setEmail("")
            setPassword("")
            setConfirmPassword("")
        }
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <div className="signup-input">
                <div className="signup-icon">
                    <img src={userIcon} alt="icon" className="user-icon" />
                </div>
                <input
                    className="signup-input-field"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="signup-input">
                <div className="signup-icon">
                    <img src={passwordIcon} alt="icon" className="user-icon" />
                </div>
                <input
                    className="signup-input-field"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="signup-input">
                <div className="signup-icon">
                    <img src={passwordIcon} alt="icon" className="user-icon" />
                </div>
                <input
                    className="signup-input-field"
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            <button type="submit" className="login-button">
                Sign Up
            </button>
        </form>
    )
}
export default SignupForm
