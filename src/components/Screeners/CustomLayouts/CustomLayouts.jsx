import "./layouts.css"
import {AiOutlinePlus} from "react-icons/ai"
import {useEffect, useState} from "react"
import {Rnd} from "react-rnd"
import HodBlock from "./ScreenerBlocks/HodBlock"
import GapBlock from "./ScreenerBlocks/GapBlock"

const CustomLayouts = () => {
    const [userLayout, setUserLayout] = useState([])
    const [isAddingScreener, setIsAddingScreener] = useState(false)

    let temp = {
        layout: null,
        x: 0,
        y: 0,
        width: 400,
        height: 250,
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(layoutParams)
    }

    useEffect(() => {
        console.log(layoutParams)
    }, [layoutParams])

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
                    <select
                        name="addScreener"
                        id="addScreener"
                        onChange={(e) => {
                            setUserLayout([...userLayout, e.target.value])
                            setIsAddingScreener(true)
                        }}>
                        <option value="">Add Screener</option>
                        <option value="gap">Gap Screener</option>
                        <option value="hod">HOD Screener</option>
                    </select>
                    {isAddingScreener ? (
                        <button
                            type="button"
                            style={{backgroundColor: "green"}}>
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
                        if (layout === "hod") {
                            console.log(`${index} is hod`)
                            return (
                                <Rnd
                                    key={index}
                                    default={{
                                        x: 0,
                                        y: 0,
                                        width: 400,
                                        height: 250,
                                    }}
                                    dragGrid={[40, 25]}
                                    resizeGrid={[40, 25]}
                                    bounds={"parent"}
                                    onDragStop={(e, d) => {
                                        temp.x = d.x
                                        temp.y = d.y
                                    }}
                                    onResizeStop={(
                                        e,
                                        direction,
                                        ref,
                                        delta,
                                        position
                                    ) => {
                                        temp.width = Number(
                                            ref.style.width.slice(0, -2)
                                        )
                                        temp.height = Number(
                                            ref.style.height.slice(0, -2)
                                        )
                                    }}>
                                    <HodBlock />
                                </Rnd>
                            )
                        }
                        if (layout === "gap") {
                            console.log(`${index} is gap`)
                            return (
                                <Rnd
                                    key={index}
                                    default={{
                                        x: 0,
                                        y: 0,
                                        width: 400,
                                        height: 250,
                                    }}
                                    dragGrid={[40, 25]}
                                    resizeGrid={[40, 25]}
                                    bounds={"parent"}
                                    onDragStop={(e, d) => {
                                        temp.x = d.x
                                        temp.y = d.y
                                    }}
                                    onResizeStop={(
                                        e,
                                        direction,
                                        ref,
                                        delta,
                                        position
                                    ) => {
                                        temp.width = Number(
                                            ref.style.width.slice(0, -2)
                                        )
                                        temp.height = Number(
                                            ref.style.height.slice(0, -2)
                                        )
                                    }}>
                                    <GapBlock />
                                </Rnd>
                            )
                        }
                    })}
                </div>
            </div>
        </section>
    )
}
export default CustomLayouts
