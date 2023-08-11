import {useState} from "react"

const ContactForm = () => {
    const [question, setQuestion] = useState("")
    const [message, setMessage] = useState("")

    return (
        <div className="contact-form">
            <h2>Contact us via form</h2>
            <form className="contact-form-main">
                <div className="contact-form-input-container">
                    <div className="floating">
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                        />
                        <label
                            htmlFor="subject"
                            className={question ? "label-up" : ""}>
                            What is the main question?
                        </label>
                    </div>
                </div>
                <div className="contact-form-input-container">
                    <textarea
                        name="mainMessage"
                        id="mainMessage"
                        cols="30"
                        rows="10"
                        placeholder="Enter your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default ContactForm
