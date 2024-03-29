import React from "react";
import "./Topbar.css"
import { Person, Mail } from "@mui/icons-material";

function Topbar({ menuOpen, setMenuOpen }) {

    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href='#intro' className='logo'> genius.</a>

                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+91 821 946 3320</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>15chandel2000@.com</span>
                    </div>
                </div>

                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar