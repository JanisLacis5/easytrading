import {Link} from "react-router-dom"
import "./pricing.css"

const Pricing = () => {
    return (
        <main>
            <div className="card-page">
                <div className="card-container">
                    <div className="card">
                        <h2 className="card-title">Free</h2>
                        <div className="features">
                            <h3 className="feature">
                                Access to trading tracker
                            </h3>
                            <h3 className="feature">
                                Add up to 20 trades per day
                            </h3>
                            <h3 className="feature">24/7 support</h3>
                        </div>{" "}
                        <div className="price">
                            <Link className="price-button" to="/signup">
                                Start free
                            </Link>
                        </div>
                    </div>
                    <div className="card">
                        <h2 className="card-title">Basic</h2>
                        <div className="features">
                            <h3 className="feature">
                                Access to basic screeners
                            </h3>
                            <h3 className="feature">
                                Unlimited trades per day
                            </h3>
                            <h3 className="feature">7 day free trial</h3>
                        </div>
                        <div className="price">
                            <Link className="price-button">10.00 $/month</Link>
                        </div>
                    </div>
                    <div className="card">
                        <h2 className="card-title">Pro</h2>
                        <div className="features">
                            <h3 className="feature">Access to every tool</h3>
                            <h3 className="feature">
                                Access to community chatroom
                            </h3>
                            <h3 className="feature">
                                Watch my trading streams
                            </h3>
                        </div>
                        <div className="price">
                            <Link className="price-button">35.00 $/month</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Pricing
