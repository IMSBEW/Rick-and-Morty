import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import useAppService from '../../services/AppService'

import Spinner from '../spinner/Spinner'
import ErrorMessage from '../errorMessage/ErrorMessage'

import '../cardList/cardList.scss'

const CharList = ({ nameCategory, nameFilter, searchRequest, indentCard }) => {
    const [charList, setCharList] = useState([])
    const [newItemLoading, setNewItemLoading] = useState(false)
    const [offset, setOffset] = useState(2)
    const [req, setReq] = useState('')
    const [amount, setAmount] = useState(20)
    const [amountChars, setAmountChars] = useState(20)
    const [indent, setIndent] = useState(12)
    console.log(indent)
    console.log(charList)
    const { loading, error, clearError, getAllFilterChars, getAllChars } = useAppService()
    const { pathname } = useLocation()

    useEffect(() => {
        onRequestFilter(nameCategory, nameFilter, searchRequest, pathname, true)
        setIndent(indentCard)
    }, [nameCategory, searchRequest])


    const onRequestFilter = (category, filter, search, pathname, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true)
        clearError()
        getAllFilterChars(category, filter, search, pathname)
            .then(onCharListFilterLoaded)
    }


    const onCharListFilterLoaded = (data) => {
        const [request, chars] = data
        setOffset(2)
        setAmount(20)
        setCharList(chars)
        setReq(request)
    }

    const onRequest = (req, offset, amount) => {
        setIndent(indent => indent + indentCard)
        if (req !== null) {
            clearError()
            getAllChars(req, offset, amount)
                .then(onCharListLoaded)
        }
    }

    const onCharListLoaded = (data) => {
        const [chars, pages, amountChars] = data
        setAmountChars(amountChars)
        setNewItemLoading(false)
        if (charList.length - indent <= indentCard) {
            console.log('r')
            setOffset(offset => offset !== pages ? offset + 1 : offset)
            setAmount(amount => amount + 20)
            setCharList(charList => [...charList, ...chars])

        } else {
            setCharList(charList)
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
                                    <div className="card__text">{item.dimension}</div>
                                </div>
                            </>
                        )
                    } else {
                        return (
                            <>
                                <div className="card__info" >
                                    <div className="card__title">{item.name}</div>
                                    <div className="card__text">{item.air_date}</div>
                                    <div className="card__text">{item.episode}</div>
                                </div>
                            </>
                        )
                    }
                }
                return (
                    <li key={index} className='card' href='#'>
                        <Link to={`/char/${item.id}`}>
                            <div className="card__wrapper">
                                {filterItems()}
                            </div>
                        </Link>
                    </li >
                )
            }
        })
        return (
            <ul className="card-list__row" >
                {items}
            </ul>
        )
    }

    const items = renderItems(charList)

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
                    {amountChars >= indent && !error && charList.length > indentCard ? buttonLoad() : null}
                </div>
            </div>
        </>
    )
}

export default CharList