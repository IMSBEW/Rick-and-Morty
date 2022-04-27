import { Link } from "react-router-dom"

import arrow from './../../../assets/img/arrow-back.svg'
import img from './404.png'

const Page404 = () => {
    return (
        <div>
            <div className="button" style={{ position: 'absolute' }}>
                <img src={arrow} alt="arrow" />
                <Link to='/'><button className="button-back">GO home</button></Link>
            </div>
            <h1 style={{ color: 'gold' }} className='error__title'>Ooops... Page not found(</h1>
            <img
                style={{
                    width: '100%'
                }}
                src={img}
                alt="Error" />
        </div>
    )
}

export default Page404