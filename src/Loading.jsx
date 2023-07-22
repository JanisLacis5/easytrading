import {useEffect, useState} from "react"
import {useNavigate, useParams, useSearchParams} from "react-router-dom"
import customFetch from "./utils"
import {useDispatch} from "react-redux"
import {login} from "./features/userSlice"
import {useGlobalContext} from "./context/globalContext"

const Loading = () => {
    const [loading, setLoading] = useState(true)
    const [searchParams, setSearchParams] = useSearchParams()

    const {isSocialLink, setIsSocialLink, isReqLoading, setIsReqLoading} =
        useGlobalContext()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const id = searchParams.get("id")
    const trades = searchParams.get("trades")

    useEffect(() => {
        setIsReqLoading(true)
        setIsSocialLink(true)
        console.log(isReqLoading)
        console.log(isSocialLink)
        dispatch(login({id: id, trades: trades}))
        setIsSocialLink(false)
        if (isReqLoading) {
            navigate("/dashboard")
        }
    }, [])

    return <h1>Loading...</h1>
}
export default Loading
