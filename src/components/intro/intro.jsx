import React from 'react';
import "./intro.css"

const Intro = () => {
    return(
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h3 className="i-intro">Hello My name is</h3>
                    <h2 className="i-name">Mahmudul Hasan</h2>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-leads">I am a</div>
                            <div className="i-title-items">
                                <div className="i-title-item">Web Developer</div>
                                <div className="i-title-item">Designer</div>
                                <div className="i-title-item">Digital Marketer</div>
                                <div className="i-title-item">E-com Expert</div>
                            </div>
                        </div>
                    </div>
                    <div className="i-desc">
                        Hi, This is Mahmudul Hasan. Web Developer, Designer, Marketer and E-com expert. I'm experience of developing
                        successful e-com website. 
                    </div>
                </div>
            </div>
            <div className="i-right">
                <img src={'/img/me.jpg'} className="i-img"></img>
            </div>
        </div>
    )
} 

export default Intro