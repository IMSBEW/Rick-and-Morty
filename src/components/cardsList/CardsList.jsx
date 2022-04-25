import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import useAppService from '../../services/AppService'

import Spinner from '../spinner/Spinner'
import ErrorMessage from '../errorMessage/ErrorMessage'

import './cardsList.scss'

const CardsList = ({ nameCategory, nameFilter, searchRequest, indentCard }) => {
    const [cardList, setCardList] = useState([])
    const [newItemLoading, setNewItemLoading] = useState(false)
    const [offset, setOffset] = useState(2)
    const [req, setReq] = useState('')
    const [amount, setAmount] = useState(20)
    const [amountCards, setAmountCards] = useState(20)
    const [indent, setIndent] = useState(indentCard)

    const { loading, error, clearError, getAllFilterCards, getAllCards } = useAppService()
    const { pathname } = useLocation()

    useEffect(() => {
        onRequestFilter(nameCategory, nameFilter, searchRequest, pathname, true)
        setIndent(indentCard)
    }, [nameCategory, searchRequest])


    const onRequestFilter = (category, filter, search, pathname, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true)
        clearError()
        getAllFilterCards(category, filter, search, pathname)
            .then(onCardListFilterLoaded)
    }


    const onCardListFilterLoaded = (data) => {
        const [request, chars] = data
        setOffset(2)
        setAmount(20)
        setCardList(chars)
        setReq(request)
    }

    const onRequest = (req, offset, amount) => {
        setIndent(indent => indent + indentCard)
        if (req !== null) {
            clearError()
            getAllCards(req, offset, amount)
                .then(onCardListLoaded)
        }
    }


    const onCardListLoaded = (data) => {
        const [cards, pages, amountCards] = data
        setAmountCards(amountCards)
        setNewItemLoading(false)
        if (cardList.length - indent <= indentCard) {
            setOffset(offset => offset !== pages ? offset + 1 : offset)
            setAmount(amount => amount + 20)
            setCardList(cardList => [...cardList, ...cards])
        } else {
            setCardList(cardList)
            setAmount(amount)
        }
    }

    function renderItems(arr) {
        const items = arr.map((item, index) => {
            if (item.count <= indent && !error) {
                const filterItems = () => {
                    if (item.status) {
                        return (
                            <>
                                <div className="card__image">
                                    <img src={item.thumbnail} alt={item.name} />
                                </div>
                                <div className="card__info" style={{ textAlign: 'left' }} >
                                    <div className="card__title">{item.name}</div>
                                    <div className="card__text">{item.species}</div>
                                </div>
                            </>
                        )
                    } else if (item.dimension) {
                        return (
                            <>
                                <div className="card__info" >
                                    <div className="card__title">{item.name}</div>
                                    <div className="card__text">{item.type}</div>
                                </div>
                            </>
                        )
                    } else {
                        return (
                            <>
                                <div className="card__title">{item.name}</div>
                                <div className="card__text">{item.air_date}</div>
                                <div className="card__text" style={{ fontWeight: 'bold' }}>{item.episode}</div>
                            </>
                        )
                    }
                }
                return (
                    <div key={index} className='card' href='#'>
                        <Link className={'card__wrapper'} to={`/char/${item.id}`}>
                            {filterItems()}
                        </Link>
                    </div >
                )
            }
        })
        return (
            <div className="card-list__row" >
                {items}
            </div>
        )
    }

    const items = renderItems(cardList)

    const buttonLoad = () => {
        return (
            <button
                disabled={newItemLoading}
                onClick={() => onRequest(req, offset, amount)}
                className="button-load">Load more
            </button>
        )
    }
    const errorMessage = error ? <ErrorMessage /> : null
    const spinner = loading ? <Spinner /> : null

    return (
        <>
            <div className="card-list">
                {errorMessage}
                {spinner}
                {items}
                <div className="button">
                    {amountCards >= indent && !error && cardList.length > indentCard ? buttonLoad() : null}
                </div>
            </div>
        </>
    )
}

export default CardsList