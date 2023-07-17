import {Link} from "react-router-dom"
import backImage from "../../photos/candlestick-chart.jpg"
import "./landingpage.css"

const LandingPage = () => {
    return (
        <main>
            <img
                className="background-image"
                src={backImage}
                alt="background image"
            />
            <div className="starter-page">
                <div className="title">
                    <h1>EasyTrading</h1>
                </div>
                <div className="description">
                    <h3>Trading trackers, screeners and more</h3>
                    <div className="buttons">
                        <Link className="landing-button" to="/about">
                            Read more
                        </Link>
                        <Link to="/pricing" className="landing-button">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default LandingPage
