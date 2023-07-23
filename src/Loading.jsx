import {useEffect} from "react"
import {useSearchParams} from "react-router-dom"
import {useDispatch} from "react-redux"
import {login} from "./features/userSlice"

const Loading = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const dispatch = useDispatch()

    const id = searchParams.get("id")
    const trades = searchParams.get("trades")

    useEffect(() => {
        dispatch(login({id: id, trades: JSON.parse(trades)}))
    }, [])

    return <h1>Loading...</h1>
}
export default Loading
