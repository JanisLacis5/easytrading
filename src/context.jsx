import {useContext, createContext, useState} from "react"

const GlobalContext = createContext()
export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = ({children}) => {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <GlobalContext.Provider value={{isHovered, setIsHovered}}>
            {children}
        </GlobalContext.Provider>
    )
}
export default AppContext
