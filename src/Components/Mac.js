import React from "react";
import './Mac.css'

function Mac() {
    console.log("yes it workks")
    return(
        <div className="Mac">
            {/* <h2 className="Mac1">Jerry Victor</h2> */}
            <video className="background-video" autoPlay muted>
                <source className="Video" src="../MacVid1medium_2x.mp4" type="video/mp4" controls></source>
            </video>
        </div>
    )
}

export default Mac