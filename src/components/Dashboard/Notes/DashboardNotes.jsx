import "./dashboardnotes.css"
import {useSelector} from "react-redux"

const DashboardNotes = () => {
    const {user} = useSelector((store) => store.user)
    const notes = user.notes || []
    return (
        <section className="dashboard-notes">
            <h1>Notes</h1>
            <div className="dashboard-notes-container">
                {notes.map((noteMain) => {
                    const {image, note} = noteMain
                    return (
                        <div className="dashboard-note">
                            <div>
                                {image.length ? (
                                    <img src={image} alt="note image" />
                                ) : (
                                    <div></div>
                                )}
                            </div>
                            <div>
                                <p>{note}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
export default DashboardNotes
