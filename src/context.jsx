import {useContext, createContext, useState} from "react"

const GlobalContext = createContext()
export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = ({children}) => {
    const [isHovered, setIsHovered] = useState(false)

    // ADD TRADE FORM

    const [stock, setStock] = useState("")
    const [accBefore, setAccBefore] = useState("")
    const [accAfter, setAccAfter] = useState("")
    const [pl, setPl] = useState(0.0)
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")

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
                pl,
                setPl,
                date,
                setDate,
                time,
                setTime,
            }}>
            {children}
        </GlobalContext.Provider>
    )
}
export default AppContext
