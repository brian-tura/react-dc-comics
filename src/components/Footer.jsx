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
                                    <li>Characters</li>
                                    <li>Comics</li>
                                    <li>Movies</li>
                                    <li>Tv</li>
                                    <li>Games</li>
                                    <li>Videos</li>
                                    <li>News</li>
                                </ul>
                                <ul>
                                    <li><h2>SHOP</h2></li>
                                    <li>Shop DC</li>
                                    <li>Shop DC Collectibles</li>
                                </ul>
                            </div>
                            <ul>
                                <li><h2>DC</h2></li>
                                <li>Terms Of Use</li>
                                <li>Privacy policy &#40;New&#41;</li>
                                <li>Ad Choices</li>
                                <li>Advertising</li>
                                <li>Jobs</li>
                                <li>Subscriptions</li>
                                <li>Talent Workshops</li>
                                <li>CPSC Certificates</li>
                                <li>Ratings</li>
                                <li>Shop Help</li>
                                <li>Contact Us</li>
                            </ul>
                            <ul>
                                <li><h2>SITES</h2></li>
                                <li>DC</li>
                                <li>MAD Magazine</li>
                                <li>DC Kids</li>
                                <li>DC Universe</li>
                                <li>DC Power Visa</li>
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