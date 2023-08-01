import {useEffect} from "react"
import {useSearchParams} from "react-router-dom"
import {useDispatch} from "react-redux"
import {login} from "./features/userSlice"
import customFetch from "./utils"

const Loading = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const dispatch = useDispatch()

    const id = searchParams.get("id")

    useEffect(() => {
        const getData = async () => {
            const {data} = await customFetch.post("/socialdata", {id: id})
            dispatch(
                login({
                    id: data.id,
                    trades: data.trades,
                    info: data.info,
                })
            )
        }
        getData()
    }, [])

    return <div className="loading"></div>
}
export default Loading
