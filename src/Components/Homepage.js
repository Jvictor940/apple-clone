import React from "react";
import Iphonesec from "./Iphonesec";
import './Homepage.css'
import Macairsec from "./Macairsec";
import Macbookprosec from "./Macbookprosec";
import Tiles from "./Tiles";

function Homepage() {
    return(
        <div className="Homepage">
            <Macairsec />
            <Macbookprosec />
            <Iphonesec />
            <Tiles />
        </div>
    )
}
export default Homepage