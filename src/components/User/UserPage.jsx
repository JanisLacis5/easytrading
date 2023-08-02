import {useSelector} from "react-redux"
import {Link, Outlet} from "react-router-dom"
import {useGlobalContext} from "../../context/globalContext"
import DeleteProfileModal from "../../components/User/UserDangerZone/DeleteProfileModal"

const UserPage = () => {
    const {user} = useSelector((store) => store.user)
    const {isDelete} = useGlobalContext()
    const info = user.info

    return (
        <div className="user-page">
            {isDelete && <DeleteProfileModal />}
            <div className="user-page-container">
                <div className="user-page-image">
                    <img src={info.image} alt="user profile picture" />
                </div>
                <div className="user-page-main-info">
                    <h2>
                        {info.firstName} {info.lastName}
                    </h2>
                    <h4>{info.email}</h4>
                </div>
                <aside className="user-page-aside">
                    <div className="user-page-link-container">
                        <Link to="/userpage">Update info</Link>
                        <Link to="/userpage/pricing">Pricing plans</Link>
                        <Link to="/userpage/notes">Notes</Link>
                        <Link to="/userpage/danger">Danger zone</Link>
                    </div>
                </aside>
                <div className="user-page-content">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
export default UserPage
