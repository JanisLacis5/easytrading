import {useState} from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import "./calendar.css"

const MyCalendar = () => {
    const calendars = () => {
        let ansArr = []
        let date = 0
        for (let i = 0; i < 12; i++) {
            const [value, onChange] = useState(new Date(2023, date, 1))
            ansArr.push(
                <Calendar
                    tileClassName="calendar-component"
                    value={value}
                    onChange={onChange}
                    onClickDay={() => console.log("clicked on day")}
                />
            )
            date++
        }
        return ansArr
    }

    return (
        <main className="calendar-main">
            <div className="calendar-year">
                {calendars().map((item, index) => {
                    return (
                        <div key={index} className="calendar-container">
                            {item}
                        </div>
                    )
                })}
            </div>
        </main>
    )
}
export default MyCalendar
