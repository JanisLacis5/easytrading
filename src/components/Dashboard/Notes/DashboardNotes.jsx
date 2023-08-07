import "./dashboardnotes.css"
import {useSelector} from "react-redux"

const DashboardNotes = () => {
    const {user} = useSelector((store) => store.user)
    const notes = user.notes || []
    return (
        <section className="dashboard-notes">
            <h1>Notes</h1>
            <div className="dashboard-notes-container">
                {notes.map((note, index) => {
                    return (
                        <div key={index}>
                            <div>
                                <img src={note.image} alt="note image" />
                            </div>
                            <p>{note.note}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
export default DashboardNotes
