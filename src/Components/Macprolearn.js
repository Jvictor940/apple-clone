import React from "react";
import './Mac.css'

function Macprolearn() {
    console.log('Macprolearn working')
    return(
        <div>
            <video className="background-video" autoPlay muted>
                <source className="Video" src="../public/MBPlarge.mp4" type="video/mp4" controls></source>
            </video>
        </div>
    )
}

export default Macprolearn