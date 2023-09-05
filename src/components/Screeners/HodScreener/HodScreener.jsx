import "./hod.css"
import {WebSocket} from "ws"

const HodScreener = () => {
    // GET DATA FROM SERVER
    // const socket = new WebSocket("ws://localhost:3000/api")
    // socket.onopen = (event) => {
    //     console.log("Connected to WebSocket server")
    // }
    // socket.onmessage = (event) => {
    //     const data = JSON.parse(event.data)
    //     console.log(`Received from server: ${data}`)
    // }

    const dataArray = []

    // TEST
    const data = [
        {
            stock: "aapl",
            time: 152447,
            price: 911,
            float: 100_000_000,
            volume: 270_000,
            relVolume: 6.7,
        },
        {
            stock: "tsla",
            time: 152447,
            price: 43,
            float: 100_004_000,
            volume: 100_000,
            relVolume: 6.7,
        },
        {
            stock: "vfs",
            time: 152447,
            price: 112,
            float: 100_000_000,
            volume: 270_000,
            relVolume: 6.7,
        },
        {
            stock: "msft",
            time: 152447,
            price: 547,
            float: 100_000_000,
            volume: 270_000,
            relVolume: 6.7,
        },
        {
            stock: "tsla",
            time: 152447,
            price: 43,
            float: 100_004_000,
            volume: 100_000,
            relVolume: 6.7,
        },
        {
            stock: "vfs",
            time: 152447,
            price: 112,
            float: 100_000_000,
            volume: 270_000,
            relVolume: 6.7,
        },
        {
            stock: "msft",
            time: 152447,
            price: 547,
            float: 100_000_000,
            volume: 270_000,
            relVolume: 6.7,
        },
        {
            stock: "tsla",
            time: 152447,
            price: 43,
            float: 100_004_000,
            volume: 100_000,
            relVolume: 6.7,
        },
        {
            stock: "vfs",
            time: 152447,
            price: 112,
            float: 100_000_000,
            volume: 270_000,
            relVolume: 6.7,
        },
        {
            stock: "msft",
            time: 152447,
            price: 547,
            float: 100_000_000,
            volume: 270_000,
            relVolume: 6.7,
        },
        {
            stock: "tsla",
            time: 152447,
            price: 43,
            float: 100_004_000,
            volume: 100_000,
            relVolume: 6.7,
        },
        {
            stock: "vfs",
            time: 152447,
            price: 112,
            float: 100_000_000,
            volume: 270_000,
            relVolume: 6.7,
        },
        {
            stock: "msft",
            time: 152447,
            price: 547,
            float: 100_000_000,
            volume: 270_000,
            relVolume: 6.7,
        },
        {
            stock: "tsla",
            time: 152447,
            price: 43,
            float: 100_004_000,
            volume: 100_000,
            relVolume: 6.7,
        },
        {
            stock: "vfs",
            time: 152447,
            price: 112,
            float: 100_000_000,
            volume: 270_000,
            relVolume: 6.7,
        },
        {
            stock: "msft",
            time: 152447,
            price: 547,
            float: 100_000_000,
            volume: 270_000,
            relVolume: 6.7,
        },
        {
            stock: "tsla",
            time: 152447,
            price: 43,
            float: 100_004_000,
            volume: 100_000,
            relVolume: 6.7,
        },
        {
            stock: "vfs",
            time: 152447,
            price: 112,
            float: 100_000_000,
            volume: 270_000,
            relVolume: 6.7,
        },
        {
            stock: "msft",
            time: 152447,
            price: 547,
            float: 100_000_000,
            volume: 270_000,
            relVolume: 6.7,
        },
        {
            stock: "tsla",
            time: 152447,
            price: 43,
            float: 100_004_000,
            volume: 100_000,
            relVolume: 6.7,
        },
        {
            stock: "vfs",
            time: 152447,
            price: 112,
            float: 100_000_000,
            volume: 270_000,
            relVolume: 6.7,
        },
        {
            stock: "msft",
            time: 152447,
            price: 547,
            float: 100_000_000,
            volume: 270_000,
            relVolume: 6.7,
        },
        {
            stock: "tsla",
            time: 152447,
            price: 43,
            float: 100_004_000,
            volume: 100_000,
            relVolume: 6.7,
        },
        {
            stock: "vfs",
            time: 152447,
            price: 112,
            float: 100_000_000,
            volume: 270_000,
            relVolume: 6.7,
        },
        {
            stock: "msft",
            time: 152447,
            price: 547,
            float: 100_000_000,
            volume: 270_000,
            relVolume: 6.7,
        },
    ]

    const formatFloat = (flt) => {
        if (flt > 1_000_000_000) {
            return String(flt / 1_000_000_000) + "B"
        }

        if (flt > 1_000_000) {
            return String(flt / 1_000_000) + "M"
        }

        if (flt > 1_000) {
            return String(flt / 1_000) + "K"
        }
    }

    return (
        <section className="hod">
            <div className="screener-header">
                <div>
                    <p>Time</p>
                </div>
                <div>
                    <p>Stock</p>
                </div>
                <div>
                    <p>Price</p>
                </div>
                <div>
                    <p>Float</p>
                </div>
                <div>
                    <p>Volume</p>
                </div>
                <div>
                    <p>Relative volume</p>
                </div>
            </div>
            <div className="screener-main">
                {data.map((stockObj) => {
                    const {stock, time, price, float, volume, relVolume} =
                        stockObj
                    return (
                        <div className="hod-stock">
                            <div>
                                <p>{time}</p>
                            </div>
                            <div>
                                <p>{stock.toUpperCase()}</p>
                            </div>
                            <div>
                                <p>${price}</p>
                            </div>
                            <div>
                                <p>{formatFloat(float)}</p>
                            </div>
                            <div>
                                <p>{formatFloat(volume)}</p>
                            </div>
                            <div>
                                <p>{relVolume}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
export default HodScreener
