import React from "react";

function Tiles() {
    return(
        <section className="tiles"> 
            <div className="iPhone-13-tile">
                <h4>iPhone 13 Pro</h4>
                <h5>Oh. So. Pro.</h5>
            </div>
            <div className="watch-tile">
                <h4 className=""></h4>
                <h5>It's our largest display yet</h5>
            </div>
            <div className='cta'>
                <a href='#' className='cta-link cta-link-after'>Learn more</a>
                <a href='#' className='cta-link cta-link-after'>Buy</a>
            </div>
        </section>
    )
}

export default Tiles