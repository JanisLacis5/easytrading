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

    // REQUIREMENTS
    const [isMetReq, setIsMetReq] = useState(true)

    // FILTERS
    const [isFilters, setIsFilters] = useState(false)

    // MODAL
    const [showModal, setShowModal] = useState(false)

    //USER INFO FORM
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    // ACCOUNT UPDATE FORM
    const [updatedUsername, setUpdatedUsername] = useState("")
    const [updatedEmail, setUpdatedEmail] = useState("")
    const [updatedAccountBalance, setUpdatedAccountBalance] = useState("")
    const [updatedProfilePicture, setUpdatedProfilePicture] = useState("")

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
                isFilters,
                setIsFilters,
                isMetReq,
                setIsMetReq,
                showModal,
                setShowModal,
                email,
                setEmail,
                password,
                setPassword,
                confirmPassword,
                setConfirmPassword,
                updatedUsername,
                setUpdatedUsername,
                updatedEmail,
                setUpdatedEmail,
                updatedAccountBalance,
                setUpdatedAccountBalance,
                updatedProfilePicture,
                setUpdatedProfilePicture,
            }}>
            {children}
        </GlobalContext.Provider>
    )
}
export default AppContext
