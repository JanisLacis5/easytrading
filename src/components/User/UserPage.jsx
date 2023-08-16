import {useDispatch, useSelector} from "react-redux"
import {Link, Outlet, useNavigate} from "react-router-dom"
import {useGlobalContext} from "../../context/globalContext"
import DeleteProfileModal from "../../components/User/UserDangerZone/DeleteProfileModal"
import {logout} from "../../features/userSlice"
import {RxHamburgerMenu} from "react-icons/rx"
import {useState} from "react"
import {IoMdOpen} from "react-icons/io"
import UserMenu from "./UserMenu"

const UserPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [showMenu, setShowMenu] = useState(false)

    const {user} = useSelector((store) => store.user)
    const {isDelete} = useGlobalContext()
    const info = user.info

    return (
        <div className="user-page">
            {isDelete && <DeleteProfileModal />}
            <div className="user-page-container">
                <button
                    type="button"
                    className="burger-menu"
                    onClick={() => setShowMenu(!showMenu)}>
                    <RxHamburgerMenu size={20} />
                </button>
                <div className="user-page-main-info">
                    <div className="user-page-image">
                        <img
                            src={info.image}
                            referrerPolicy="no-referrer"
                            alt="user profile picture"
                        />
                    </div>
                    <h2>
                        {info.firstName} {info.lastName}
                    </h2>
                    <h4>{info.email}</h4>
                </div>
                {showMenu ? (
                    <aside className="user-page-aside">
                        <UserMenu />
                    </aside>
                ) : (
                    <div className="user-page-content">
                        <Outlet />
                    </div>
                )}
            </div>
        </div>
    )
}
export default UserPage
