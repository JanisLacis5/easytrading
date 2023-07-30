import {useSelector} from "react-redux"
import "./user.css"

const UserButton = () => {
    const {user} = useSelector((store) => store.user)
    const info = user.info

    return (
        <div className="user-button">
            <div className="user-button-profile-picture">
                {/* <img src={info.image} alt="profile picture" /> */}
            </div>
            <button>
                <h3>{info.username}</h3>
                <p>content</p>
            </button>
        </div>
    )
}
export default UserButton
