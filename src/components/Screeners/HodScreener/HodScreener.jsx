import "./hod.css"

const HodScreener = () => {
    // GET DATA FROM SERVER
    const socket = new WebSocket("ws://localhost:3000/api") // Replace with your server's URL
    socket.onopen = (event) => {
        console.log("Connected to WebSocket server")
    }
    socket.onmessage = (event) => {
        const data = event.data
        console.log(`Received from server: ${data}`)
    }

    return <div className="hod"></div>
}
export default HodScreener
