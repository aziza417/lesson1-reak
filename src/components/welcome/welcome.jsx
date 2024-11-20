



import WelcomeImg from '../../assets/Picture.png'
import './welcome.css'

const Welcome = () => {
    return (
        <div className='Welcome-wrap'>
            <div className='Welcome container'>
                <div>
                    <img className='pimg' src={WelcomeImg} alt="" />
                </div>
                <div className='words'>
                    <h1>Welcome to </h1>
                    <h2>delizioso</h2>
                    <h3>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Facilisis ultricies at eleifend <br />proin. Congue nibh nulla malesuada <br />ultricies nec quam </h3>
                    <button> <b>See our menu</b></button>
                </div>
            </div>
        </div>
    )
}


export default Welcome;