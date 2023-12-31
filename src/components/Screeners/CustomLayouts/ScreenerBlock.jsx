import {useEffect, useState} from "react"
import "./layouts.css"
import {Rnd} from "react-rnd"
import HodBlock from "./ScreenerBlocks/HodBlock"
import GapBlock from "./ScreenerBlocks/GapBlock"
import {useGlobalContext} from "../../../context/globalContext"

const ScreenerBlock = ({layout, index}) => {
    const [params, setParams] = useState({
        screener: null,
        x: 0,
        y: 0,
        height: 240,
        width: 400,
    })

    const {
        isDone,
        setIsDone,
        layoutParams,
        setLayoutParams,
        setIsAddingScreener,
        activeBlock,
        setActiveBlock,
    } = useGlobalContext()

    const done = () => {
        setLayoutParams({...layoutParams, [index]: params})
        setIsDone(false)
        setIsAddingScreener(false)
        setActiveBlock(null)
        return
    }

    useEffect(() => {
        if (isDone) done()
    }, [isDone])

    if (layout === "hod") {
        params.screener = "hod"
        return (
            <Rnd
                style={
                    activeBlock !== index &&
                    activeBlock !== null && {pointerEvents: "none"}
                }
                default={{
                    x: 0,
                    y: 0,
                    width: 400,
                    height: 250,
                }}
                dragGrid={[40, 25]}
                resizeGrid={[40, 25]}
                bounds={"parent"}
                onDragStart={() => {
                    setIsDone(false)
                    setIsAddingScreener(true)
                    setActiveBlock(index)
                }}
                onResizeStart={() => {
                    setIsDone(false)
                    setIsAddingScreener(true)
                    setActiveBlock(index)
                }}
                onDragStop={(e, d) => {
                    params.x = d.x
                    params.y = d.y
                }}
                onResizeStop={(e, direction, ref, delta, position) => {
                    params.width = Number(ref.style.width.slice(0, -2))
                    params.height = Number(ref.style.height.slice(0, -2))
                }}>
                <HodBlock />
            </Rnd>
        )
    }
    if (layout === "gap") {
        params.screener = "gap"
        return (
            <Rnd
                style={
                    activeBlock !== index &&
                    activeBlock !== null && {pointerEvents: "none"}
                }
                default={{
                    x: 0,
                    y: 0,
                    width: 400,
                    height: 250,
                }}
                dragGrid={[40, 25]}
                resizeGrid={[40, 25]}
                bounds={"parent"}
                onDragStart={() => {
                    setActiveBlock(index)
                    setIsDone(false)
                    setIsAddingScreener(true)
                }}
                onResizeStart={(e, direction, ref, delta, position) => {
                    setIsDone(false)
                    setIsAddingScreener(true)
                    setActiveBlock(index)
                }}
                onDragStop={(e, d) => {
                    if (activeBlock !== index || activeBlock !== null) {
                        return
                    }
                    params.x = d.x
                    params.y = d.y
                }}
                onResizeStop={(e, direction, ref, delta, position) => {
                    if (activeBlock !== index || activeBlock !== null) {
                        return
                    }
                    params.width = Number(ref.style.width.slice(0, -2))
                    params.height = Number(ref.style.height.slice(0, -2))
                }}>
                <GapBlock />
            </Rnd>
        )
    }
}
export default ScreenerBlock
