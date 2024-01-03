import React from 'react';
import "./Intro.css";
import { TypeAnimation } from 'react-type-animation';

function Intro() {

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/m4.png" alt="error" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Akash Chandel</h1>
                    <h3><TypeAnimation
                        sequence={[
                            'React js',
                            2000,
                            ' Web Developer',
                            2000,
                            'Frontend Developer',
                            2000,
                            'Android Developer',
                            1000
                        ]}
                        speed={50}
                        style={{ fontSize: '1em' }}
                        repeat={Infinity}
                    />
                    </h3>
                    <div className='git'>
                        <a href='https://github.com/Aka5hChandel'>
                            <img src='../assets/github.png' alt='' target="_blank" style={{ width: "30px", marginTop: "15px" }} />
                        </a>
                        <a href='https://www.instagram.com/__akash_chandel__?igsh=OG40eGJiODd3NGk0'>
                            <img src='../assets/instagram.png' alt='' target="_blank" style={{ width: "30px", marginTop: "15px", marginLeft: "10px" }} />
                        </a>
                        <a href='https://github.com/Aka5hChandel'>
                            <img src='../assets/facebook.png' alt='' target="_blank" style={{ width: "30px", marginTop: "15px", marginLeft: "10px" }} />
                        </a>
                    </div>
                </div>
                {/* <div>
                    <a href="#portfolio">
                        <img src="assets/down.png" alt="" />
                    </a>
                </div> */}

            </div>
        </div>
    )
}

export default Intro