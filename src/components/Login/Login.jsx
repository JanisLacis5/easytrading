import "./login.css"

const Login = () => {
    return (
        <main>
            <div className="page">
                <div className="login-box">
                    <div className="title">
                        <h2>User Login</h2>
                    </div>
                    <div className="login-main">
                        <form className="login-form">
                            <div className="login-input">
                                {/* <div className="icon"></div> */}
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="login-input">
                                {/* <div className="icon"> </div> */}
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Login
