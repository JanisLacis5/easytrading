import {useEffect} from "react"
import "./layouts.css"
import {AiOutlinePlus} from "react-icons/ai"
import {Outlet} from "react-router-dom"

const CustomLayouts = () => {
    const totalLayouts = 5
    const layouts = Array.from({length: totalLayouts}, (_, i) => i + 1)

    if (totalLayouts === 0) {
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
                    {layouts.map((nr) => {
                        return (
                            <button type="button" key={nr}>
                                {nr}
                            </button>
                        )
                    })}
                    <button type="button">
                        <AiOutlinePlus />
                    </button>
                </div>
            </div>
            <div className="layouts-main"></div>
        </section>
    )
}
export default CustomLayouts
