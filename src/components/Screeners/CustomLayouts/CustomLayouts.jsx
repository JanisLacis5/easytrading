import "./layouts.css"
import {AiOutlinePlus} from "react-icons/ai"
import {useState} from "react"
import Temp from "./Temp"
import {useGlobalContext} from "../../../context/globalContext"
import customFetch from "../../../utils"
import {useDispatch, useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import {login} from "../../../features/userSlice"
import {toast} from "react-toastify"

const CustomLayouts = () => {
    const [userLayout, setUserLayout] = useState([])
    const [notAllowedHover, setNotAllowedHover] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {setIsDone, isAddingScreener, setIsAddingScreener, layoutParams} =
        useGlobalContext()
    const {user} = useSelector((store) => store.user)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {data} = await customFetch.post("/new-layout", {
            layout: layoutParams,
            id: user.id,
        })
        const {id, trades, notes, info} = user
        dispatch(login({id, trades, notes, info, layouts: data.layouts}))
        toast.success("success")
    }

    if (!userLayout) {
        return (
            <section className="screener-layout">
                <div className="layouts-header">
                    <div className="layout-buttons">
                        <button type="button">
                            <AiOutlinePlus />
                        </button>
                    </div>
                </div>
                <div className="layouts-main">
                    <h2 className="no-layouts">
                        You have no layouts (click on + to make one)
                    </h2>
                </div>
            </section>
        )
    }
    return (
        <section className="screener-layout">
            <div className="layouts-header">
                {isAddingScreener && notAllowedHover && (
                    <p>Press "Done" to add next screener</p>
                )}
                <div className="layout-buttons">
                    <div
                        className="screener-select-container"
                        onMouseEnter={() => setNotAllowedHover(true)}
                        onMouseLeave={() => setNotAllowedHover(false)}>
                        <select
                            value={""}
                            name="addScreener"
                            onChange={(e) => {
                                setUserLayout([...userLayout, e.target.value])
                                setIsAddingScreener(true)
                            }}
                            disabled={isAddingScreener ? true : false}>
                            <option value="">Add Screener</option>
                            <option value="gap">Gap Screener</option>
                            <option value="hod">HOD Screener</option>
                        </select>
                    </div>

                    <button
                        type="button"
                        style={
                            isAddingScreener
                                ? {backgroundColor: "green"}
                                : {
                                      backgroundColor: "green",
                                      opacity: "0.5",
                                      pointerEvents: "none",
                                  }
                        }
                        onClick={() => setIsDone(true)}>
                        Done
                    </button>

                    <button type="button" onClick={handleSubmit}>
                        Save
                    </button>
                </div>
            </div>
            <div className="layouts-main">
                <div id="lines">
                    {userLayout.map((layout, index) => {
                        return (
                            <Temp key={index} layout={layout} index={index} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default CustomLayouts
