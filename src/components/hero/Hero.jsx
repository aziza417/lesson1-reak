
import HeroImg from '../../assets/Illustration.png'
import WelcomeImg from '../../assets/Picture.png'

import './hero.css'

function Hero() {
    return (
        <div className="hero container">
            <div className="hero-text">
                <p className='p-title'>Restauran</p>
                <h1>Italian <br />Cuisine </h1>
                <p className='p-desc'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales senectus dictum arcu sit tristique donec eget.
                </p>
                <div className='hero-buttons'>
                    <button className="btn">Order now</button>
                    <button className="btn">Reservation</button>
                </div>
            </div>
            <div className="hero-img">
                <img src={HeroImg} alt="" />
            </div>
            <div className='Welcom'>
                <div className='Welcome'>
                    <img className='pimg' src={WelcomeImg} width={700} alt="" />
                    <div className='words'>
                    <h1>Welcome to </h1>
                        <h2>delizioso</h2>
                    <h3>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Facilisis ultricies at eleifend <br />proin. Congue nibh nulla malesuada <br />ultricies nec quam </h3>
                    <button>See our menu</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Hero