// import React from "react"
// import ReactDOM from "react-dom"
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"
import "./index.css"

function App(){
    return (
        <div>
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

// ReactDOM.createRoot(document.getElementById("root")).render(<App />)

ReactDOM.render((<App />), document.getElementById("root"))
