import { useState, useEffect } from 'react'

import useAppService from '../../services/AppService'

import Spinner from '../spinner/Spinner'
import ErrorMessage from '../errorMessage/ErrorMessage'

import './../cardList/cardList.scss'

const CharList = ({ nameCategory, nameFilter }) => {
    const [charList, setCharList] = useState([])
    const [newItemLoading, setNewItemLoading] = useState(false)
    const [offset, setOffset] = useState(2)
    const [req, setReq] = useState('')
    const [amount, setAmount] = useState(20)
    const [amountChars, setAmountChars] = useState(20)
    const [indent, setIndent] = useState(8)

    const { loading, error, getAllFilterChars, getAllChars } = useAppService()

    useEffect(() => {
        onRequestFilter(nameCategory, nameFilter)
        setIndent(8)
    }, [nameCategory])

    console.log(amountChars, indent)

    const onRequestFilter = (category, filter) => {
        getAllFilterChars(category, filter)
            .then(onCharListFilterLoaded)
    }

    const onCharListFilterLoaded = (newCharList) => {
        setOffset(2)
        setAmount(20)
        setCharList(newCharList[1])
        setReq(newCharList[0])
    }

    const onRequest = (req, offset, amount, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true)
        setIndent(indent => indent + 8)
        if (req !== null) {
            getAllChars(req, offset, amount)
                .then(onCharListLoaded)
        }
    }

    const onCharListLoaded = (data) => {
        const [chars, pages, amountChars] = data
        setAmountChars(amountChars)
        if (charList.length - indent <= 8) {
            setOffset(offset => offset !== pages ? offset + 1 : offset)
            setAmount(amount => amount + 20)
            setCharList(charList => [...charList, ...chars])
            setNewItemLoading(false)
        } else {
            setCharList(charList)
        }
    }

    function renderItems(arr) {
        const items = arr.map((item, index) => {
            if (item.count <= indent) {
                return (
                    <li key={index} className='card' href='#'>
                        <div className="card__wrapper">
                            <div className="card__image">
                                <img src={item.thumbnail} alt={item.name} />
                            </div>
                            <div className="card__info" style={{ textAlign: 'left' }} >
                                <div className="card__title">{item.name}</div>
                                <div className="card__text">{item.species}</div>
                            </div>
                        </div>
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

    function createButton() {
        return (
            <button
                disabled={newItemLoading}
                onClick={() => onRequest(req, offset, amount, true)}
                className="button-load">Load more
            </button>
        )
    }

    const items = renderItems(charList)

    const errorMessage = error ? <ErrorMessage /> : null
    const spinner = loading ? <Spinner /> : null



    const button = createButton()

    return (
        <div className="card-list">
            {errorMessage}
            {spinner}
            {items}
            <div className="button">
                {amountChars >= indent && !error ? button : null}
            </div>
        </div>
    )
}

export default CharList