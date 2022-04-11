import { useState, useEffect } from 'react'

import useAppService from '../../services/AppService'

import Spinner from '../spinner/Spinner'
import ErrorMessage from '../errorMessage/ErrorMessage'

import './../cardList/cardList.scss'

const CharList = ({ nameCategory }) => {
    const [charList, setCharList] = useState([])
    const [newItemLoading, setNewItemLoading] = useState(false)
    const [offset, setOffset] = useState(2)
    const [req, setReq] = useState('')
    const [amount, setAmount] = useState(20)
    const [indent, setIndent] = useState(8)
    // const [category, setCategory] = useState('')
    const [charEnded, setCharEnded] = useState(false)

    const { loading, error, getAllFilterChars, getAllChars } = useAppService()

    useEffect(() => {
        onRequestFilter(nameCategory)
        setIndent(8)
    }, [nameCategory])

    const onRequestFilter = (category) => {
        getAllFilterChars(category)
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
        const [chars, pages] = data
        console.log(pages)
        if (charList.length - indent <= 8) {
            setOffset(offset => offset !== pages ? offset + 1 : offset)
            setAmount(amount => amount + 20)
            setCharList(charList => [...charList, ...chars])
            setNewItemLoading(false)
        } else {
            setCharList(charList)
        }
    }



    // const onRequest = (offset, amount, category, initial) => {
    //     initial ? setNewItemLoading(false) : setNewItemLoading(true)
    //     getAllCharacters(offset, amount, category)
    //         .then(onCharListLoaded)
    // }

    // const onCharListLoaded = (newCharList) => {
    //     setNewItemLoading(false)
    //     setIndent(indent => indent + 8)
    //     // setCategory(nameCategory)
    //     if (charList.length - indent <= 8) {
    //         setOffset(offset => offset + 1)
    //         setAmount(amount => amount + 20)
    //         setCharList(charList => [...charList, ...newCharList])
    //     } else {
    //         setCharList(charList => [...charList])
    //     }
    // }



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

    const items = renderItems(charList)

    const errorMessage = error ? <ErrorMessage /> : null
    const spinner = loading ? <Spinner /> : null

    return (
        <div className="card-list">
            {errorMessage}
            {spinner}
            {items}
            <div className="button">
                <button
                    disabled={newItemLoading}
                    onClick={() => onRequest(req, offset, amount, true)}
                    className="button-load">Load more
                </button>
            </div>
        </div>
    )
}

export default CharList