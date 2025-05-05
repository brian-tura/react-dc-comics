import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className='first-footer'>
                <div className="container">
                    <div className='content'>
                        <div className='d-flex'>
                            <div>
                                <ul>
                                    <li><h2>DC COMICS</h2></li>
                                    <li><a href="#">Characters</a></li>
                                    <li><a href="#">Comics</a></li>
                                    <li><a href="#">Movies</a></li>
                                    <li><a href="#">Tv</a></li>
                                    <li><a href="#">Games</a></li>
                                    <li><a href="#">Videos</a></li>
                                    <li><a href="#">News</a></li>
                                </ul>
                                <ul>
                                    <li><h2>SHOP</h2></li>
                                    <li><a href="#">Shop DC</a></li>
                                    <li><a href="#">Shop DC Collectibles</a></li>
                                </ul>
                            </div>
                            <ul>
                                <li><h2>DC</h2></li>
                                <li><a href="#">Terms Of Use</a></li>
                                <li><a href="#">Privacy policy &#40;New&#41;</a></li>
                                <li><a href="#">Ad Choices</a></li>
                                <li><a href="#">Advertising</a></li>
                                <li><a href="#">Jobs</a></li>
                                <li><a href="#">Subscriptions</a></li>
                                <li><a href="#">Talent Workshops</a></li>
                                <li><a href="#">CPSC Certificates</a></li>
                                <li><a href="#">Ratings</a></li>
                                <li><a href="#">Shop Help</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                            <ul>
                                <li><h2>SITES</h2></li>
                                <li><a href="#">DC</a></li>
                                <li><a href="#">MAD Magazine</a></li>
                                <li><a href="#">DC Kids</a></li>
                                <li><a href="#">DC Universe</a></li>
                                <li><a href="#">DC Power Visa</a></li>
                            </ul>
                        </div>
                        <figure>
                            <img src="../src/assets/img/dc-logo-bg.png" alt="" />
                        </figure>
                    </div>
                </div>
            </div>
            <div className='second-footer'>
                <div className='container'>
                    <div className='bottom-footer'>
                        <div>
                            <button>SIGN-UP NOW!</button>
                        </div>
                        <div className='links'>
                            <a href="#">FOLLOW US</a>
                            <ul>
                                <li><img src="../src/assets/img/footer-facebook.png" alt="" /></li>
                                <li><img src="../src/assets/img/footer-twitter.png" alt="" /></li>
                                <li><img src="../src/assets/img/footer-youtube.png" alt="" /></li>
                                <li><img src="../src/assets/img/footer-pinterest.png" alt="" /></li>
                                <li><img src="../src/assets/img/footer-periscope.png" alt="" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer