import React from "react";
function Nav() {
    return (
        <header>
        <div className="nav-container">
            <nav className="nav"> 
            {/* Mobile Nav list */}
                {/* <ul className="nav-list nav-list-mobile"> 
                 <li className="nav-item">
                        <div className="mobile-menu">
                            <span className="line line-top"></span>
                            <span className="line line-bottom"></span>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link nav-link-apple">
                            <img src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_small.svg" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link nav-link-bag"></a>
                    </li>
                </ul> */}
                {/* Main Nav */}
                <ul className="nav-list nav-list-larger"> 
                    <li className="nav-item nav-item-hidden">
                        <a href="/" className="nav-link nav-link-apple"></a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Store</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Mac</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">iPad</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">iPhone</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Watch</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Airpods</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">TV & Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Only on Apple</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Accessories</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Support</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link nav-link-search">
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link nav-link-bag"></a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    )
}
export default Nav