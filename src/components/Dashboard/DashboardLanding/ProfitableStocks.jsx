import {useEffect, useState} from "react"
import {useSelector} from "react-redux"
import {profitableStocks} from "../../../functions"

const ProfitableStocks = () => {
    const [profitableStockStats, setProfitableStockStats] = useState({})

    const {user} = useSelector((store) => store.user)

    useEffect(() => {
        const tempTrades = user.trades || []
        setProfitableStockStats(profitableStocks(tempTrades))
    }, [user.trades])

    console.log(profitableStockStats)

    return (
        <>
            <h2 className="graph-title">Your most profitable stocks</h2>
        </>
    )
}
export default ProfitableStocks
