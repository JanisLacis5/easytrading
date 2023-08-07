import {Link} from "react-router-dom"
import "./usernotes.css"
import {useSelector} from "react-redux"
import {useEffect} from "react"

const UserNotes = () => {
    const {user} = useSelector((store) => store.user)
    const lastNotes =
        user.notes.length > 3
            ? user.notes?.slice(user.notes.length - 3, user.notes.length)
            : user.notes

    return (
        <section className="user-notes">
            <h2>Last 3 entires:</h2>
            <div className="user-notes-container">
                {lastNotes.map((note, index) => {
                    console.log(note)
                    return (
                        <div className="user-note" key={index}>
                            <div>
                                <img src={note.image} alt="note image" />
                            </div>
                            <p>{note.note}</p>
                            <a href="">Full note</a>
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
