import {
    createBrowserRouter,
    RouterProvider,
    useNavigate,
} from "react-router-dom"
import {
    LandingPage,
    About,
    Pricing,
    Contact,
    Login,
    Signup,
    AddTrade,
    Dashboard,
    TradeLog,
    BrokerLogin,
    Stats,
    Calendar,
    SignupInfoForm,
    SignupLayout,
} from "./components"
import {useDispatch} from "react-redux"
import {useEffect} from "react"
import {login} from "./features/userSlice"
import DashboardLayout from "./components/Dashboard/DashboardLayout"
import Loading from "./Loading"
import SiteLayout from "./SiteLayout"

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        try {
            const user = localStorage.getItem("user")
            if (user) {
                dispatch(login(JSON.parse(user)))
            }
        } catch {
            return
        }
    }, [])

    const router = createBrowserRouter([
        {
            path: "/",
            element: <SiteLayout />,
            children: [
                {
                    path: "loading",
                    element: <Loading />,
                },
                {
                    path: "dashboard",
                    element: <DashboardLayout />,
                    children: [
                        {
                            index: true,
                            element: <Dashboard />,
                        },
                        {
                            path: "stats",
                            element: <Stats />,
                        },
                        {
                            path: "addtrade",
                            element: <AddTrade />,
                        },
                        {
                            path: "calendar",
                            element: <Calendar />,
                        },
                        {
                            path: "log",
                            element: <TradeLog />,
                        },
                        {
                            path: "brokerlogin",
                            element: <BrokerLogin />,
                        },
                    ],
                },
                {
                    path: "landing",
                    element: <LandingPage />,
                },
                {
                    path: "login",
                    element: <Login />,
                },
                {
                    path: "signup",
                    element: <SignupLayout />,
                    children: [
                        {
                            index: true,
                            element: <Signup />,
                        },
                        {
                            path: "form",
                            element: <SignupInfoForm />,
                        },
                    ],
                },
                {
                    path: "about",
                    element: <About />,
                },
                {
                    path: "pricing",
                    element: <Pricing />,
                },
                {
                    path: "contact",
                    element: <Contact />,
                },
            ],
        },
    ])
    return <RouterProvider router={router} />
}

export default App
