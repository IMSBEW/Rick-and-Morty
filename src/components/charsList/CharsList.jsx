// import ButtonLoad from '../ButtonLoad'

import './../cardList/cardList.scss'

import image from './../../assets/img/char.png'

const CharList = ({ nameCategory }) => {
    console.log(nameCategory)
    return (
        <div className="card-list">
            <div className="card-list__row">
                <button className='card' href='#'>
                    <div className="card__wrapper">
                        <div className="card__image">
                            <img src={image} alt="card" />
                        </div>
                        <div className="card__info" style={{ textAlign: 'left' }} >
                            <div className="card__title">Rick Sanchez</div>
                            <div className="card__text">Human</div>
                        </div>
                    </div>
                </button >
            </div>
            {/* <ButtonLoad /> */}
        </div>
    )
}

export default CharList