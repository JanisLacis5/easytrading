import "./layouts.css"
import {AiOutlinePlus} from "react-icons/ai"
import Draggable from "react-draggable"
import {useGlobalContext} from "../../../context/globalContext"

const CustomLayouts = () => {
    const totalLayouts = 5
    const layouts = Array.from({length: totalLayouts}, (_, i) => i + 1)
    const {screenWidth} = useGlobalContext()

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
            <div className="layouts-main">
                <div id="lines">
                    <Draggable
                        handle=".handle"
                        defaultPosition={{x: 0, y: 0}}
                        position={null}
                        grid={[40, 25]}
                        scale={1}
                        bounds={{
                            left: 0,
                            top: 0,
                            right: screenWidth - 400,
                        }}>
                        <div className="layout">
                            <div className="handle"></div>
                        </div>
                    </Draggable>
                </div>
            </div>
        </section>
    )
}
export default CustomLayouts
