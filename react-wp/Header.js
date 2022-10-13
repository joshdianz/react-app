import React from "react"
import ReactDOM from "react-dom"
import logo from "./react-logo.png"
import "./index.css"

export default function Header(){
    return (
            <header>
               <nav>
                  <img src={logo} className="recat-logo" />
                  <ul className="nav-items">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>
               </nav>
            </header>
    )
}
