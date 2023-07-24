import "./signup.css"

const Requirements = () => {
    return (
        <div className="password-requirements">
            Password must contain at least :
            <ul>
                <li>
                    <h4>8 characters</h4>
                </li>
                <li>
                    <h4>1 capital letter</h4>
                </li>
                <li>
                    <h4>1 lowercase letter</h4>
                </li>
                <li>
                    <h4>1 sybol</h4>
                </li>
            </ul>
        </div>
    )
}
export default Requirements
