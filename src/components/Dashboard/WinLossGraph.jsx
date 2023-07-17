import "./dashboard.css"
import {Pie} from "react-chartjs-2"
import {Chart} from "chart.js/auto"
import {useEffect} from "react"

const WinLossGraph = () => {
    const data = {
        labels: ["Won", "Lost"],
        datasets: [
            {
                data: [300, 50],
                backgroundColor: ["rgb(80, 163, 67)", "rgb(218, 71, 58)"],
                hoverOffset: 4,
            },
        ],
    }

    const options = {
        animation: false,
        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    font: {
                        size: 16,
                    },
                },
            },
        },
    }

    return (
        <>
            <h2 className="graph-title">Won / Lost Trades</h2>
            <div className="pie-garph-container">
                <select>
                    <option value="today">Today</option>
                    <option value="this week">This week</option>
                    <option value="this month">This month</option>
                    <option value="this year">This year</option>
                </select>
                <div>
                    <Pie data={data} options={options} />
                </div>
            </div>
            <ul className="overall-stats">
                <li className="stat">
                    <p>Won Trades : </p>
                </li>
                <li className="stat">
                    <p>Lost Trades : </p>
                </li>
                <li className="stat">
                    <p>Total Trades : </p>
                </li>
                <li className="stat">
                    <p>Win % : </p>
                </li>
                <li className="stat">
                    <p>Total profit $ : </p>
                </li>
            </ul>
        </>
    )
}
export default WinLossGraph
