import {useState} from "react"
import userIcon from "../../../assets/user-icon.svg"
import "./signupinfoform.css"

const SignupInfoForm = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [account, setAccount] = useState("")
    const [image, setImage] = useState(userIcon)

    const temp = (e) => {
        const tgt = e.target
        const files = tgt.files

        if (FileReader && files && files.length) {
            const fr = new FileReader()
            fr.onload = function () {
                setImage(fr.result)
            }
            fr.readAsDataURL(files[0])
        }
    }

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
                            onChange={temp}
                            type="file"
                            name="profilePic"
                            id="profilePic"
                            accept="image/*"
                        />
                        <label htmlFor="profilePic" id="outImage">
                            <img src={image} alt="profile picture" />
                        </label>
                    </div>
                    <p>
                        *for better image design it would be great to choose
                        image with aspect ratio oh 1:1 of crop your chosen image
                        to this aspect ratio
                    </p>
                </div>
                <div className="signup-info-form-input-container">
                    <div className="signup-info-form-field">
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
                    <div className="signup-info-form-field">
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
                    <div className="signup-info-form-field">
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
                    <div className="signup-info-form-field">
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
