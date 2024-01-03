import React from 'react'
import "./PortfolioList.css"

function PortfolioList({ id, title, active, setSelected }) {
    return (
        <li
            className={active ? "portfolioList active" : "portfolioList"}
            onClick={() => setSelected(id)}
            style={{ fontSize: "20px", marginTop: "5px" }}
        >
            {title}
        </li>
    )
}

export default PortfolioList