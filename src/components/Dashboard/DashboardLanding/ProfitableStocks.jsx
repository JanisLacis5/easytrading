import {useEffect, useState} from "react"
import {useSelector} from "react-redux"
import {profitableStocks} from "../../../functions"
import {Bar} from "react-chartjs-2"

const ProfitableStocks = () => {
    const [profits, setProfits] = useState([])
    const [stocks, setStocks] = useState([])

    const {user} = useSelector((store) => store.user)

    useEffect(() => {
        const tempTrades = user.trades || []
        setProfits(profitableStocks(tempTrades).profits)
        setStocks(profitableStocks(tempTrades).stocks)
    }, [user.trades])

    const data = {
        labels: stocks,
        datasets: [
            {
                label: "$",
                data: profits,
                backgroundColor: ["rgba(42, 1, 229, 0.981)"],
                borderColor: ["rgba(47, 0, 255, 0.981)"],
                borderWidth: 1,
            },
        ],
    }

    const options = {
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                ticks: {
                    callback: function (value, index, ticks) {
                        return "$ " + value
                    },
                },
            },
        },
    }

    return (
        <>
            <h2 className="graph-title">Your most profitable stocks</h2>
            <div className="profitable-stocks">
                <Bar data={data} options={options} />
            </div>
        </>
    )
}
export default ProfitableStocks
