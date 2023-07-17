import {createBrowserRouter, RouterProvider} from "react-router-dom"
import {
    SiteLayout,
    LandingPage,
    About,
    Pricing,
    Contact,
    Login,
    Signup,
    Dashboard,
} from "./components"
import {useSelector} from "react-redux"

function App() {
    const {isLogged} = useSelector((store) => store.user)
    const router = createBrowserRouter([
        {
            path: "/",
            element: <SiteLayout />,
            children: [
                {
                    index: isLogged ? true : null,
                    element: <Dashboard />,
                },
                {
                    index: isLogged ? null : true,
                    element: <LandingPage />,
                },
                {
                    path: "login",
                    element: <Login />,
                },
                {
                    path: "signup",
                    element: <Signup />,
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
