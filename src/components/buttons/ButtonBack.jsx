import './buttons.scss'

import arrow from './../../assets/img/arrow-back.svg'

const ButtonBack = () => {
    return (
        <div className="button" style={{ position: 'absolute' }}>
            <img src={arrow} alt="arrow" />
            <button className="button-back">GO BACK</button>
        </div>
    )
}

export default ButtonBack