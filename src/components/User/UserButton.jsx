import {useDispatch, useSelector} from "react-redux"
import "./user.css"
import {logout, setIsLoading} from "../../features/userSlice"
import {useNavigate} from "react-router-dom"
import {useEffect, useState} from "react"

const UserButton = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [info, setInfo] = useState({})

    const {user} = useSelector((store) => store.user)

    useEffect(() => {
        setInfo(user.info)
    }, [user.info])

    return (
        <div className="user-button">
            <div className="user-button-profile-picture">
                <img src={info.image} alt="profile picture" />
            </div>
            <button
                onClick={() => {
                    navigate("/userpage")
                }}>
                <h3>{info?.username}</h3>
                <p>
                    Account balance: <span>${info?.account}</span>
                </p>
            </button>
        </div>
    )
}
export default UserButton
