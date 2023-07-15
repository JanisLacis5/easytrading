import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import AppContext from "./context.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AppContext>
            <ToastContainer position="top-center" autoClose={2000} />
            <App />
        </AppContext>
    </React.StrictMode>
)
