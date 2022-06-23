import React from "react";
import './Mac.css'

function Mac() {
    console.log("yes it workks")
    return(
        <div className="Mac">
            <div className="video-container">
                <video className="background-video-1" autoPlay muted>
                    <source className="Video" src="../MacVid1medium_2x.mp4" type="video/mp4" controls></source>
                </video>
                {/* <div className="intro text intro-fade-out">
                    <p className="headline-intro">
                        <span className="word-anime-inside">You've never seen</span>
                        <span className="word-anime-inside">a computer like this before</span>
                    </p>
                </div> */}
            </div>
            <div className="section-content">
                <p className="text-content">
                    <span className="color-spans">
                        <span className="color-green">Say</span>
                        <span className="color-yellow">hello</span>
                        <span className="color-orange">to</span>
                        <span className="color-pink">the</span>
                        <span className="color-purple">new</span>
                        <span className="color-blue">iMac.</span> <br/>
                    </span>
                    Inspired by the best of Apple. Transformed by the M1 chip. Stands out in any space. Fits perfectly into your life.
                </p>
                <p className="price">
                    <span>
                        From $1299
                    </span>
                </p>
                <ul className="cta-mac">
                    <li className="cta-link-mac">Watch the event</li>
                    <li className="cta-link-mac">Watch the film</li>
                </ul>
            </div>
            <h2 className="colors-headline">
                <span className="colors-p">Seven vibrant colors.</span> <br/>
                <span className="colors-p">You do</span>
                <div className="scroller">
                    <span className="color-span">
                        <ul className="color-green">green</ul>
                        <ul className="color-yellow">yellow</ul> 
                        <ul className="color-orange">orange </ul>
                        <ul className="color-pink">pink</ul> 
                        <ul className="color-purple">purple</ul> 
                        <ul className="color-blue">blue </ul>
                        <ul className="color-silver">silver</ul> 
                        <ul className="color-hue">hue</ul> 
                    </span>

                {/* <span className="hidden-word color-green">green.</span> <br/> 
                <span className="hidden-word color-yellow">yellow.</span> <br/>
                <span className="hidden-word color-orange">orange.</span> <br/>
                <span className="hidden-word color-pink">pink.</span> <br/>
                <span className="hidden-word color-purple">purple.</span> <br/>
                <span className="hidden-word color-blue">blue.</span> <br/>
                <span className="hidden-word color-silver">silver.</span> <br/>
                <span className="hidden-word color-hue">hue.</span> <br/> */}

                </div>
            </h2>
            <div>
                <video className="background-video-2" autoPlay muted>
                    <source src="../Mac2large.mp4" type="video/mp4" ></source>
                </video>
            </div>
        </div>
    )
}

export default Mac