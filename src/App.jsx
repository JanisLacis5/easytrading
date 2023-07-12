import {createBrowserRouter, RouterProvider} from "react-router-dom"
import {
    SiteLayout,
    LandingPage,
    About,
    Pricing,
    Contact,
    Login,
} from "./components"

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <SiteLayout />,
            children: [
                {
                    index: true,
                    element: <LandingPage />,
                },
                {
                    path: "login",
                    element: <Login />,
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
