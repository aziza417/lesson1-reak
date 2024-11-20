
import FromImg from '../../assets/imgfrom.png'
import './from.css'

const From = () => {
    return (
        <div className='From container'>
        <div className='img3'>
            <img src={FromImg} alt="" />
            <div className='works'>
                <h1>we are open from</h1>
                <h2>Monday-Sunday</h2>
                <h3>Launch : Mon-Sun : 11:00am-02:00pm <p>Dinner : sunday : 04:00pm-08:00pm</p></h3>
                <h4>04:00pm-09:00pm</h4>
                <button className='btn1'>Order now</button>
                <button>Reservation</button>
            </div>
        </div>
        </div>
    )}

export default From;