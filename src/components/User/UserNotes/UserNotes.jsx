import {Link} from "react-router-dom"
import "./usernotes.css"

const UserNotes = () => {
    return (
        <section className="user-notes">
            <h2>Last 3 entires:</h2>
            <div className="user-notes-container"></div>
            <Link to="/userpage/addnote">Add new note</Link>
        </section>
    )
}
export default UserNotes
