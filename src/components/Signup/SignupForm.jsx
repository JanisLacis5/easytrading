import "./signup.css"
import "../Login/login.css"
import userIcon from "../../assets/user-icon.svg"
import infoIcon from "../../assets/info-icon.svg"
import passwordIcon from "../../assets/password-icon.svg"
import {useState} from "react"
import customFetch from "../../utils"
import {toast} from "react-toastify"
import md5 from "md5"
import {useGlobalContext} from "../../context/globalContext"
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import {login} from "../../features/userSlice"
import {passwordRequirements} from "../../functions"

const SignupForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const {isHovered, setIsHovered, isMetReq, setIsMetReq} = useGlobalContext()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password === confirmPassword) {
            // if (!passwordRequirements(password)) {
            //     setIsMetReq(false)
            //     setPassword("")
            //     setConfirmPassword("")
            //     return
            // }
            const {data} = await customFetch.post("/signup", {
                email: email,
                password: md5(password),
            })
            setEmail("")
            setIsMetReq(true)
            setPassword("")
            setConfirmPassword("")
            if (data.message !== "success") {
                toast.error(data.message)
                return
            }
            localStorage.setItem("token", data.token)
            dispatch(login({id: data.id}))
            toast.success("success")
            navigate("/dashboard")
        } else {
            toast.error("Passwords do not match")
            setEmail("")
            setPassword("")
            setConfirmPassword("")
        }
    }

    return (
        <form className="signup-form" onSubmit={handleSubmit}>
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
                    required
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
                    required
                />
                <img
                    src={infoIcon}
                    alt="info-icon"
                    className="info-icon"
                    onClick={() => setIsHovered(!isHovered)}
                />
                <h6
                    className={
                        isMetReq
                            ? "requirements-not-met"
                            : "requirements-not-met-show"
                    }>
                    Password does not meet the requirements (click on
                    <span>&#9432;</span>
                    button)
                </h6>
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
                    required
                />
            </div>
            <button type="submit" className="login-button">
                Sign Up
            </button>
        </form>
    )
}
export default SignupForm
