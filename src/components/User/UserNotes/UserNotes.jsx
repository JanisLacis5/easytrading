import {Link} from "react-router-dom"
import "./usernotes.css"
import {useSelector} from "react-redux"

const UserNotes = () => {
    const {user} = useSelector((store) => store.user)
    const lastNotes =
        user.notes.length > 3
            ? user.notes?.slice(user.notes.length - 3, user.notes.length)
            : user.notes

    return (
        <section className="user-notes">
            <h2>Pinned notes:</h2>
            <div className="user-notes-container">
                {lastNotes.map((noteMain, index) => {
                    const {image, note} = noteMain
                    return (
                        <div className="user-note" key={index}>
                            <div>
                                {image ? (
                                    <img src={image} alt="note image" />
                                ) : (
                                    <div></div>
                                )}
                            </div>
                            <p>{note}</p>
                        </div>
                    )
                })}
            </div>
            <div>
                <Link to="/userpage/addnote">Add new note</Link>
            </div>
        </section>
    )
}
export default UserNotes
