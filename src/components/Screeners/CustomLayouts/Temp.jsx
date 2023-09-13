import {useEffect, useState} from "react"
import "./layouts.css"
import {Rnd} from "react-rnd"
import HodBlock from "./ScreenerBlocks/HodBlock"
import GapBlock from "./ScreenerBlocks/GapBlock"
import {useGlobalContext} from "../../../context/globalContext"

const Temp = ({layout}) => {
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
    } = useGlobalContext()

    const done = () => {
        setLayoutParams([...layoutParams, params])
        setIsDone(false)
        setIsAddingScreener(false)
        return
    }

    useEffect(() => {
        if (isDone) done()
    }, [isDone])

    if (layout === "hod") {
        params.screener = "hod"
        return (
            <Rnd
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
                    params.x = d.x
                    params.y = d.y
                }}
                onResizeStop={(e, direction, ref, delta, position) => {
                    params.width = Number(ref.style.width.slice(0, -2))
                    params.height = Number(ref.style.height.slice(0, -2))
                }}>
                <GapBlock />
            </Rnd>
        )
    }
}
export default Temp
