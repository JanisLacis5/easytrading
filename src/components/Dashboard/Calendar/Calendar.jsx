import {Calendar, momentLocalizer} from "react-big-calendar"
import moment from "moment"
import "react-big-calendar/lib/css/react-big-calendar.css"
import "./calendar.css"
import {useState} from "react"

const localizer = momentLocalizer(moment)

const MyCalendar = () => {
    const [date, setDate] = useState(new Date())

    return (
        <main className="calendar-main">
            <div className="calendar-container">
                <Calendar
                    localizer={localizer}
                    startAccessor="start"
                    endAccessor="end"
                    style={{
                        height: 500,
                        backgroundColor: "var(--color-grey-600)",
                        color: " var(--color-grey-300)",
                    }}
                    views={["month"]}
                    defaultDate={date}
                    selectable
                    onNavigate={(newDate) => setDate(newDate)}
                />
            </div>
        </main>
    )
}
export default MyCalendar
