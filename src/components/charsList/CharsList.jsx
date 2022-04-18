import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import useAppService from '../../services/AppService'

import Spinner from '../spinner/Spinner'
import ErrorMessage from '../errorMessage/ErrorMessage'

import './../cardList/cardList.scss'

const CharList = ({ nameCategory, nameFilter, searchRequest }) => {
    const [charList, setCharList] = useState([])
    const [newItemLoading, setNewItemLoading] = useState(false)
    const [offset, setOffset] = useState(2)
    const [req, setReq] = useState('')
    const [amount, setAmount] = useState(20)
    const [amountChars, setAmountChars] = useState(20)
    const [indent, setIndent] = useState(8)

    const { loading, error, clearError, getAllFilterChars, getAllChars } = useAppService()

    useEffect(() => {
        onRequestFilter(nameCategory, nameFilter, searchRequest, true)
        setIndent(8)
    }, [nameCategory, searchRequest])


    const onRequestFilter = (category, filter, search, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true)
        clearError()
        getAllFilterChars(category, filter, search)
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
        setIndent(indent => indent + 8)
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
        if (charList.length - indent <= 8) {
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
                return (
                    <li key={index} className='card' href='#'>
                        <Link to={`/char/${item.id}`}>
                            <div className="card__wrapper">
                                <div className="card__image">
                                    <img src={item.thumbnail} alt={item.name} />
                                </div>
                                <div className="card__info" style={{ textAlign: 'left' }} >
                                    <div className="card__title">{item.name}</div>
                                    <div className="card__text">{item.species}</div>
                                </div>
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
                    {amountChars >= indent && !error && charList.length > 8 ? buttonLoad() : null}
                </div>
            </div>
        </>
    )
}

export default CharList