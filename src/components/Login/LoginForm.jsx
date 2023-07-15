import "./login.css"
import userIcon from "../../assets/user-icon.svg"
import passwordIcon from "../../assets/password-icon.svg"
import customFetch from "../../utils"
import {useState} from "react"
import md5 from "md5"
import {toast} from "react-toastify"

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const {data} = await customFetch.post("/login", {
                email: email,
                password: md5(password),
            })
            setUser(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-input">
                <div className="login-icon">
                    <img src={userIcon} alt="icon" className="user-icon" />
                </div>
                <input
                    className="login-input-field"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="login-input">
                <div className="login-icon">
                    <img src={passwordIcon} alt="icon" className="user-icon" />
                </div>
                <input
                    className="login-input-field"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit" className="login-button">
                Login
            </button>
        </form>
    )
}
export default LoginForm
