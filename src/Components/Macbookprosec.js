import React from "react";
import { Link } from "react-router-dom";

function Macbookprosec() {
    return(
        <section className='hero MacBook-Pro'>
        <div className='container-pro'>
        <div className='title title-dark'>
            <h4 className='title-heading heading-dark'>MacBook Pro 13"</h4>
            <h5 className='title-sub-heading sub-heading-dark'>
                Supercharged by
            <span className="M2-dark-logo"></span>
            </h5>
            <p className='title-price price-dark'>Available starting 6.24</p>
        </div>
        <div className='cta cta-dark'>
            {/* <a href='https://www.apple.com/macbook-pro-13/' className='cta-link'>Learn more</a> */}
            <Link to='/Macprolearn' className='cta-link'>Learn more</Link>
            <a href='https://www.apple.com/shop/buy-mac/macbook-pro?bfil=2&product=MNEJ3LL/A&step=attach' className='cta-link'>Order now</a>
        </div>
        <figure className="MacBook-Pro-figure"></figure>
        </div>
    </section>
    )
}

export default Macbookprosec