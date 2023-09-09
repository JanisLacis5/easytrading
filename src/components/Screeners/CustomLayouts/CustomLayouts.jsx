import "./layouts.css"
import {AiOutlinePlus} from "react-icons/ai"
import {useEffect, useState} from "react"
import {Rnd} from "react-rnd"
import HodBlock from "./ScreenerBlocks/HodBlock"
import GapBlock from "./ScreenerBlocks/GapBlock"

const CustomLayouts = () => {
    const [state, setState] = useState({
        height: 250,
        width: 400,
    })
    const [userLayout, setUserLayout] = useState([])

    useEffect(() => {
        console.log(userLayout)
    }, [userLayout])

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
                        onChange={(e) =>
                            setUserLayout([...userLayout, e.target.value])
                        }>
                        <option value="">Add Screener</option>
                        <option value="gap">Gap Screener</option>
                        <option value="hod">HOD Screener</option>
                    </select>
                    <button type="button">
                        <AiOutlinePlus />
                    </button>
                    <button type="button">Save</button>
                </div>
            </div>
            <div className="layouts-main">
                <div id="lines">
                    {userLayout.map((layout, index) => {
                        console.log(layout)
                        if (layout === "hod") {
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
                                    bounds={"parent"}>
                                    <HodBlock />
                                </Rnd>
                            )
                        }
                        if (layout === "gap") {
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
                                    bounds={"parent"}>
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
