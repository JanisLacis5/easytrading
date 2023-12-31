import {useState} from "react"
import "./userdangerzone.css"
import "../../Signup/signup.css"
import {useGlobalContext} from "../../../context/globalContext"
import {toast} from "react-toastify"
import customFetch from "../../../utils"
import {useDispatch, useSelector} from "react-redux"
import md5 from "md5"
import {FiInfo} from "react-icons/fi"
import {passwordRequirements} from "../../../functions"
import Requirements from "../../Signup/Requirements"
import {
    logout,
    setIsLoading,
    setIsNotLoading,
} from "../../../features/userSlice"
import {useNavigate} from "react-router-dom"

const ChangePasswordForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const {isLoading} = useSelector((store) => store.user)

    const {
        setChangePassword,
        setIsMetReq,
        isMetReq,
        setIsRequirements,
        isRequirements,
    } = useGlobalContext()
    const {user} = useSelector((store) => store.user)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            toast.error("Passwords do not match")
            setPassword("")
            setConfirmPassword("")
            return
        }
        dispatch(setIsLoading())
        // if (!passwordRequirements(password)) {
        //     dispatch(setIsNotLoading())
        //     setIsMetReq(false)
        //     setPassword("")
        //     setConfirmPassword("")
        //     return
        // }

        const {data} = await customFetch.post("/changepassword", {
            id: user.id,
            password: md5(password),
        })

        dispatch(setIsNotLoading())
        if (data.message === "success") {
            setPassword("")
            setConfirmPassword("")
            dispatch(logout())
            navigate("/login")
            toast.success("Login with your new password")
        }
    }

    if (isLoading) {
        return <div className="loading"></div>
    }

    return (
        <form className="change-password-form" onSubmit={handleSubmit}>
            <div className="change-password-form-main">
                <h2>Change Password</h2>
                <div className="change-password-input-container">
                    <div className="change-password-form-floating">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                                setIsMetReq(true)
                            }}
                        />
                        <label
                            htmlFor="password"
                            className={password ? "label-up" : ""}>
                            New password:
                        </label>
                        <button
                            type="button"
                            onClick={() => setIsRequirements(!isRequirements)}>
                            <FiInfo color="var(--color-grey-300)" />
                        </button>
                        <h6 className={isMetReq ? "hide" : ""}>
                            Password does not meet the requirements (click on
                            <span>
                                <FiInfo color="var(--color-trade-red)" />
                            </span>
                            button)
                        </h6>
                    </div>
                    {isRequirements && (
                        <div className="change-password-requiements">
                            <Requirements />
                        </div>
                    )}
                </div>
                <div className="change-password-input-container">
                    <div className="change-password-form-floating">
                        <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <label
                            htmlFor="confirmPassword"
                            className={confirmPassword ? "label-up" : ""}>
                            Confirm password:
                        </label>
                    </div>
                </div>
                <div className="change-password-form-button-container">
                    <div>
                        <button
                            type="button"
                            onClick={() => setChangePassword(false)}>
                            Cancel
                        </button>
                        <button type="submit">Finish</button>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default ChangePasswordForm