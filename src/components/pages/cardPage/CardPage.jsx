import { useState, useEffect } from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'

import { createBrowserHistory } from "history";




import useAppService from '../../../services/AppService'

import Spinner from './../../spinner/Spinner'
import ErrorMessage from './../../errorMessage/ErrorMessage'

import arrow from './../../../assets/img/arrow-back.svg'

import CardsList from "../../cardsList/CardsList"

import './cardPage.scss'

function CardPage() {
    const [card, setCard] = useState(null)
    const [countCard, setCountCard] = useState([])

    const { cardId } = useParams()
    const { pathname } = useLocation()

    const { loading, error, getCard, clearError } = useAppService()


    useEffect(() => {
        updateCard()
    }, [cardId])

    const updateCard = () => {
        clearError()
        getCard(pathname)
            .then(onCardLoaded)
    }

    const onCardLoaded = (card) => {
        const idCard = card.residents.map(id => +id.replace(/\D+/g, ""))
        setCountCard(idCard)
        setCard(card)
    }

    const errorMessage = error ? <ErrorMessage /> : null
    const spinner = loading ? <Spinner /> : null
    const content = !(loading || error || !card) ? <View card={card} countCard={countCard} /> : null

    return (
        <>
            {errorMessage}
            {spinner}
            {content}
        </>
    )
}

const View = ({ card, countCard }) => {
    const { name, type, dimension, episode, air_date } = card

    const filterItems = () => {
        if (card.dimension) {
            return (
                <div className="card-page__category">
                    <div className="card-page__category-wrapper">
                        <p className="card-page__category-title">Type</p>
                        <p className="card-page__category-info">{type}</p>
                    </div>
                    <div className="card-page__category-wrapper">
                        <p className="card-page__category-title">Dimension</p>
                        <p className="card-page__category-info">{dimension}</p>
                    </div>
                </div>
            )
        } else if (card.air_date) {
            return (
                <div className="card-page__category">
                    <div className="card-page__category-wrapper">
                        <p className="card-page__category-title">Episode</p>
                        <p className="card-page__category-info">{episode}</p>
                    </div>
                    <div className="card-page__category-wrapper">
                        <p className="card-page__category-title">Date</p>
                        <p className="card-page__category-info">{air_date}</p>
                    </div>
                </div>
            )
        }
    }

    const link = card.dimension ? <Link to='/locations'><button className="button-back">GO BACK</button></Link> : <Link to='/episodes'><button className="button-back">GO BACK</button></Link>

    return (
        <div className="card-page">
            <div className="card-page__info">
                <div className="card-page__row">
                    <div className="button" style={{ position: 'absolute' }}>
                        <img src={arrow} alt="arrow" />
                        {link}
                    </div>
                    <div className="card-page__body">
                        <div className="card-page__wrapper">
                            <div className="card-page__title">{name}
                            </div>
                            {filterItems()}
                        </div>
                    </div>
                </div>
            </div>
            <p className="card-page__name">Residents:</p>
            <CardsList
                nameCategory={''}
                nameFilter={''}
                searchRequest={''}
                indentCard={''}
                idCards={countCard}
            />
        </div>
    )
}

export default CardPage