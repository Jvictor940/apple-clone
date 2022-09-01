import React from "react";

function Tiles() {
    return(
        <section className="tiles"> 
        <div className="container">
            <div className="iPhone-13-tile">
                <h4 className="title-heading" >iPhone 13 Pro</h4>
                <h5 className="title-sub-heading">Oh. So. Pro.</h5>
                <div className='cta'>
                    <a href='#' className='cta-link'>Learn more</a>
                    <a href='#' className='cta-link'>Buy</a>
                </div>
                {/* <img src="https://www.apple.com/v/home/ap/images/promos/ipho…o/promo_iphone13pro_avail__beadms4ldidu_large.jpg"></img> */}
            </div>

            <div className="watch-tile">
                <h4 className="watch-logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Apple_Watch_official_logo.svg"></img>
                </h4>
                <h5>It's our largest display yet</h5>
                <div className='cta'>
                    <a href='#' className='cta-link'>Learn more</a>
                    <a href='https://www.apple.com/shop/buy-watch/apple-watch?bfil=2&option.watch_cases=MKND3LL/A&option.watch_bands=MKU83AM/A&product=MKMX3LL/A&step=watchattach' className='cta-link'>Buy</a>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Tiles