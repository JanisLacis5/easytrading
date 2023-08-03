import {useNavigate} from "react-router-dom"
import "./pricing.css"
import {useGlobalContext} from "../../context/globalContext"
import {toast} from "react-toastify"
import customFetch from "../../utils"
import {login, setIsLoading, setIsNotLoading} from "../../features/userSlice"
import {useDispatch} from "react-redux"
import md5 from "md5"
import userIcon from "../../assets/user-icon.svg"

const Pricing = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {
        choosePricing,
        setChoosePricing,
        email,
        firstName,
        lastName,
        username,
        account,
        image,
        password,
        setPassword,
        setEmail,
        setConfirmPassword,
        pricingPlan,
        setPricingPlan,
        setFirstName,
        setLastName,
        setUsername,
        setAccount,
        setImage,
    } = useGlobalContext()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!choosePricing) {
            setChoosePricing(true)
            navigate("/signup")
            return
        }

        dispatch(setIsLoading())

        const {data} = await customFetch.post("/signup", {
            email: email,
            userData: {
                email: email,
                firstName,
                lastName,
                username,
                startingAccount: account,
                account,
                image,
                pricing: pricingPlan,
            },
            password: md5(password),
        })
        if (data.message !== "success") {
            dispatch(setIsNotLoading())
            setEmail("")
            setPassword("")
            setConfirmPassword("")
            toast.error(data.message)
            return
        }
        localStorage.setItem("token", data.token)
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        setFirstName("")
        setLastName("")
        setUsername("")
        setAccount("")
        setImage(userIcon)
        setChoosePricing(false)
        dispatch(login({id: data.id, info: data.info}))
        toast.success("success")
        dispatch(setIsNotLoading())
        navigate("/dashboard")
    }

    const onClickFunc = (e) => {
        setPricingPlan(e.target.id)
        handleSubmit(e)
    }

    return (
        <main>
            <div className="card-page">
                <div className="card-container">
                    <div className="card">
                        <h2 className="card-title">Free</h2>
                        <div className="features">
                            <h3 className="feature">
                                Access to trading tracker
                            </h3>
                            <h3 className="feature">
                                Add up to 20 trades per day
                            </h3>
                            <h3 className="feature">24/7 support</h3>
                        </div>{" "}
                        <div className="price">
                            <button
                                type="button"
                                className="price-button"
                                id="free"
                                onClick={onClickFunc}>
                                Start free
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <h2 className="card-title">Basic</h2>
                        <div className="features">
                            <h3 className="feature">
                                Access to basic screeners
                            </h3>
                            <h3 className="feature">
                                Unlimited trades per day
                            </h3>
                            <h3 className="feature">7 day free trial</h3>
                        </div>
                        <div className="price">
                            <button
                                type="button"
                                className="price-button"
                                id="basic"
                                onClick={onClickFunc}>
                                10.00 $/month
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <h2 className="card-title">Pro</h2>
                        <div className="features">
                            <h3 className="feature">Access to every tool</h3>
                            <h3 className="feature">
                                Access to community chatroom
                            </h3>
                            <h3 className="feature">
                                Watch my trading streams
                            </h3>
                        </div>
                        <div className="price">
                            <button
                                type="button"
                                className="price-button"
                                id="pro"
                                onClick={onClickFunc}>
                                35.00 $/month
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Pricing
