import './charPage.scss'

import arrow from './../../../assets/img/arrow-back.svg'
import arrowMore from './../../../assets/img/arrow-more.svg'
import charImg from './../../../assets/img/char.png'

function CharPage() {
    return (
        <div className="char-page">
            <div className="button" style={{ position: 'absolute' }}>
                <img src={arrow} alt="arrow" />
                <button className="button-back">GO BACK</button>
            </div>
            <div className='char-page__header'>
                <img className='char-page__image' src={charImg} alt="img" />
                <div className="char-page__title">RIck Sanchez</div>
            </div>
            <div className="char-page__description">
                <div className="char-page__column">
                    <p className="char-page__column-title">Informations</p>
                    <div className="char-page__category">
                        <div className='char-page__category-wrapper'>
                            <div className='char-page__category-info'>
                                <div className="char-page__category-title">Gender</div>
                                <div className="char-page__category-subtitle">Male</div>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="char-page__category">
                        <div className='char-page__category-wrapper'>
                            <div className='char-page__category-info'>
                                <div className="char-page__category-title">Gender</div>
                                <div className="char-page__category-subtitle">Male</div>
                            </div>
                            <img src={arrowMore} alt="arrow-more" />
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="char-page__column">
                    <p className="char-page__column-title">Episodes</p>
                    <div className="char-page__category">
                        <div className='char-page__category-wrapper'>
                            <div className='char-page__category-info'>
                                <div className="char-page__category-title">S01E01</div>
                                <div className="char-page__category-subtitle">Pilot</div>
                                <div className="char-page__category-date">December 2, 2013</div>
                            </div>
                            <img src={arrowMore} alt="arrow-more" />
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="char-page__column"></div>
            </div>
        </div>
    )
}
export default CharPage