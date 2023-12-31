import {useSelector} from "react-redux"
import "./user.css"
import {useNavigate} from "react-router-dom"
import {useEffect, useState} from "react"

const UserButton = () => {
    const navigate = useNavigate()

    const [info, setInfo] = useState({})

    const {user} = useSelector((store) => store.user)

    useEffect(() => {
        setInfo(user.info)
    }, [user.info])

    return (
        <div className="user-button">
            <div className="user-button-profile-picture">
                <img
                    src={info.image}
                    referrerPolicy="no-referrer"
                    alt="profile picture"
                />
            </div>
            <button
                onClick={() => {
                    navigate("/userpage")
                }}>
                <h3>{info?.username}</h3>
                <p>
                    Balance: <span>${info?.account}</span>
                </p>
            </button>
        </div>
    )
}
export default UserButton
