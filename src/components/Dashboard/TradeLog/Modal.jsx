import {RxCross1} from "react-icons/rx"
import {useGlobalContext} from "../../../context/globalContext"
import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {clearTrades} from "../../../features/userSlice"

const Modal = () => {
    const dispatch = useDispatch()
    const {setShowModal} = useGlobalContext()
    const {user} = useSelector((store) => store.user)
    useEffect(() => {
        dispatch(clearTrades())
    }, [])

    return (
        <div className="remove-modal">
            <div>
                <RxCross1 className="remove-modal-cross" />
            </div>
            <h1>Remove all trades?</h1>
            <p>When you click "YES", this change is permanent</p>
            <div className="remove-modal-btn-container">
                <button type="button">YES</button>
                <button
                    type="button"
                    onClick={() => {
                        setShowModal(false)
                    }}>
                    NO
                </button>
            </div>
        </div>
    )
}
export default Modal
