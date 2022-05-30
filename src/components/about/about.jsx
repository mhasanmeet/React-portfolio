import React from 'react';
import "./about.css";


const About = () =>{
    return (
        <div className="a">
            
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://source.unsplash.com/eDx3m572SBw" className="a-img"></img>
                </div>
            </div>

            <div className="a-right">
                <div className="a-right-content">
                    <h1 className="a-title">About Me</h1>
                    <p className="a-sub">
                    Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's 
                    </p>

                    <p className="a-desc">
                    Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley
                    </p>

                    <div className="a-award">
                        <img src="https://source.unsplash.com/eDx3m572SBw" className="a-award-img"></img>
                        <div className="a-award-texts">
                            <h4 className="a-award-title">Lorem Ipsum is simply dummy text of the printing and</h4>
                            <p className="a-award-desc">Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and </p>
                        </div>
                    </div>

                    <div className="a-award">
                        <img src="https://source.unsplash.com/eDx3m572SBw" className="a-award-img"></img>
                        <div className="a-award-texts">
                            <h4 className="a-award-title">Lorem Ipsum is simply dummy text of the printing and</h4>
                            <p className="a-award-desc">Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and </p>
                        </div>
                    </div>
                    
                    <div className="a-award">
                        <img src="https://source.unsplash.com/eDx3m572SBw" className="a-award-img"></img>
                        <div className="a-award-texts">
                            <h4 className="a-award-title">Lorem Ipsum is simply dummy text of the printing and</h4>
                            <p className="a-award-desc">Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>        
    )
}

export default About;