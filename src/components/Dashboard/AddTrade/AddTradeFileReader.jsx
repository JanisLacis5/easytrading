import {useEffect, useState} from "react"
import customFetch from "../../../utils"
import "./addtrade.css"
import Papa from "papaparse"
import {useDispatch, useSelector} from "react-redux"
import {login} from "../../../features/userSlice"
import {useNavigate} from "react-router-dom"

const AddTradeFileReader = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [file, setFile] = useState("")
    const [platform, setPlatform] = useState("")
    const [extention, setExtention] = useState("")
    const [tradeData, setTradeData] = useState([])

    const {user} = useSelector((store) => store.user)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const {data} = await customFetch.post("/tradesfile", {
                data: tradeData,
                id: user.id,
            })
            dispatch(login({id: user.id, trades: data.trades, info: user.info}))
        } catch (error) {
            console.log(error)
        }
        setFile("")
        setPlatform("")
        setExtention("")
        setTradeData("")
        navigate("/dashboard")
    }

    const prepareFile = () => {
        if (file) {
            const reader = new FileReader()

            reader.onload = (e) => {
                const content = e.target.result
                const lines = content.split("\n")
                let tempArr = []

                for (let i = 1; i < lines.length - 1; i++) {
                    const LINE = lines[i].split(",")
                    const stock = LINE[4].split(" ")[5].split(":")[1]
                    const accBefore = parseFloat(LINE[1].replace(/\s/g, ""))
                    const accAfter = parseFloat(LINE[2].replace(/\s/g, ""))
                    const pl = parseFloat(LINE[3])
                    const date = LINE[0].slice(1, 11)
                    const time = LINE[0].slice(11, 17)
                    const action = LINE[4].slice(8, 13)
                    tempArr.push({
                        stock,
                        accAfter,
                        accBefore,
                        pl,
                        date,
                        time,
                        action,
                    })
                }
                setTradeData([...tempArr])
            }
            reader.readAsText(file)
        }
    }

    useEffect(() => {
        prepareFile()
    }, [file])

    return (
        <section className="addtrade-filereader">
            <h2>File info</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="file">File:</label>
                    <input
                        type="file"
                        name="file"
                        id="file"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>
                <div>
                    <label htmlFor="platform">
                        Please provide from where you downloaded your file:
                    </label>
                    <select
                        name="platform"
                        id="platform"
                        value={platform}
                        onChange={(e) => setPlatform(e.target.value)}>
                        <option value="">Choose platform</option>
                        <option value="tradingview">Tradingview</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="ext">File extention:</label>
                    <select
                        name="ext"
                        id="ext"
                        value={extention}
                        onChange={(e) => setExtention(e.target.value)}>
                        <option value="">Choose extention</option>
                        <option value="csv">.csv</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Read</button>
                </div>
            </form>
        </section>
    )
}
export default AddTradeFileReader
