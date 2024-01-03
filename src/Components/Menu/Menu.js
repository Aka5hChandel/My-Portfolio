import React from "react"
import "./Menu.css"

function Menu({ menuOpen, setMenuOpen }) {

    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <img src="./assets/home.png" alt="" style={{ width: "20px" }} />

                    <a href="#intro">&nbsp;Home</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <img src="./assets/freelance.png" alt="" style={{ width: "20px" }} />
                    <a href="#portfolio">&nbsp;Projects</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <img src="./assets/skills.png" alt="" style={{ width: "20px" }} />
                    <a href="#work">&nbsp;Skills</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <img src="./assets/contact-mail.png" alt="" style={{ width: "20px" }} />
                    <a href="#contact">&nbsp;Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu