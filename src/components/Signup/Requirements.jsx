import "./signup.css"

const Requirements = () => {
    return (
        <div className="password-requirements">
            Password must contain at least :
            <ul>
                <li>
                    <p>8 characters</p>
                </li>
                <li>
                    <p>1 capital letter</p>
                </li>
                <li>
                    <p>1 lowercase letter</p>
                </li>
                <li>
                    <p>1 sybol</p>
                </li>
            </ul>
        </div>
    )
}
export default Requirements
