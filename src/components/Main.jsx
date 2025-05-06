import React from 'react'
import ListComics from './ListComics'

const Main = () => {
    return (
        <main>
            <div className='jumbotron'>
                <h4>current series</h4>
            </div>
            <div className='big-container'>
                <div className='container'>
                    <div className='content-goes-here'>
                        <div className='comic-list'>
                            <ListComics />
                        </div>
                    </div>
                </div>
            </div>
            <div className='big-container-img'>
                <div className='container'>
                    <ul className='img-list'>
                        <li><img src="../src/assets/img/buy-comics-digital-comics.png" alt="" /> DIGITAL COMICS</li>
                        <li><img src="../src/assets/img/buy-comics-merchandise.png" alt="" /> DC MERCHANDISE</li>
                        <li><img src="../src/assets/img/buy-comics-subscriptions.png" alt="" /> SUBSCRIPTION</li>
                        <li><img src="../src/assets/img/buy-comics-shop-locator.png" alt="" /> COMICS SHOP LOCATOR</li>
                        <li><img src="../src/assets/img/buy-dc-power-visa.svg" alt="" /> CD POWER VISA</li>
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default Main