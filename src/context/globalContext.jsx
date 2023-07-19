import {useContext, createContext, useState} from "react"

const GlobalContext = createContext()
export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = ({children}) => {
    const [isHovered, setIsHovered] = useState(false)

    // ADD TRADE FORM
    const [stock, setStock] = useState("")
    const [accBefore, setAccBefore] = useState("")
    const [accAfter, setAccAfter] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [action, setAction] = useState("")

    return (
        <GlobalContext.Provider
            value={{
                isHovered,
                setIsHovered,
                stock,
                setStock,
                accBefore,
                setAccBefore,
                accAfter,
                setAccAfter,
                date,
                setDate,
                time,
                setTime,
                action,
                setAction,
            }}>
            {children}
        </GlobalContext.Provider>
    )
}
export default AppContext
