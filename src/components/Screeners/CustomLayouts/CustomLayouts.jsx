import "./layouts.css"
import {AiOutlinePlus} from "react-icons/ai"
import {useEffect, useState} from "react"
import Temp from "./Temp"
import {useGlobalContext} from "../../../context/globalContext"

const CustomLayouts = () => {
    const [userLayout, setUserLayout] = useState([])
    const [notAllowedHover, setNotAllowedHover] = useState(false)

    const {setIsDone, layoutParams, isAddingScreener, setIsAddingScreener} =
        useGlobalContext()

    useEffect(() => {
        console.log(layoutParams)
    }, [layoutParams])

    const handleSubmit = async (e) => {
        e.preventDefault()
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
                <div className="layout-buttons">
                    {isAddingScreener && notAllowedHover && (
                        <p>Press "Done" to add next screener</p>
                    )}
                    <select
                        onMouseEnter={() => setNotAllowedHover(true)}
                        onMouseLeave={() => setNotAllowedHover(false)}
                        name="addScreener"
                        id="addScreener"
                        onChange={(e) => {
                            setUserLayout([...userLayout, e.target.value])
                            setIsAddingScreener(true)
                        }}
                        disabled={isAddingScreener ? true : false}>
                        <option value="">Add Screener</option>
                        <option value="gap">Gap Screener</option>
                        <option value="hod">HOD Screener</option>
                    </select>
                    {isAddingScreener ? (
                        <button
                            type="button"
                            style={{backgroundColor: "green"}}
                            onClick={() => setIsDone(true)}>
                            Done
                        </button>
                    ) : (
                        <button type="button">
                            <AiOutlinePlus />
                        </button>
                    )}

                    <button type="button" onClick={handleSubmit}>
                        Save
                    </button>
                </div>
            </div>
            <div className="layouts-main">
                <div id="lines">
                    {userLayout.map((layout, index) => {
                        return (
                            <Temp key={index} layout={layout} inedx={index} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default CustomLayouts
