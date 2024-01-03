import React from 'react'
import { useState, useEffect } from 'react';
import "./Portfolio.css"
import PortfolioList from '../PortfolioList/PortfolioList';
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,

} from "../../Data";

function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "design",
            title: "Design",
        }
    ];

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
    }, [selected]);

    return (
        <div className='portfolio' id='portfolio'>
            <h1>Projects</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                        <img
                            src={d.img}
                            alt=""
                        />
                        <a href={d.a} style={{ color: "inherit", fontSize: "20px" }}>{d.title}</a>
                        {/* <h4>{d.a}</h4> */}
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Portfolio