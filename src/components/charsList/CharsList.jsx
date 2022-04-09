import { useState, useEffect } from 'react'

import useAppService from '../../services/AppService'

import Spinner from '../spinner/Spinner'
import ErrorMessage from '../errorMessage/ErrorMessage'

import './../cardList/cardList.scss'

const CharList = ({ nameCategory }) => {
    const [charList, setCharList] = useState([])
    const [newItemLoading, setNewItemLoading] = useState(false)
    const [offset, setOffset] = useState(1)
    const [amount, setAmount] = useState(0)
    const [indent, setIndent] = useState(0)
    const [category, setCategory] = useState('')
    const [charEnded, setCharEnded] = useState(false)

    const { loading, error, getAllCharacters, } = useAppService()


    // console.log(charList)
    console.log(category)


    useEffect(() => {
        onRequest(offset, amount, category, true)

    }, [])

    const onRequest = (offset, amount, category, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true)
        getAllCharacters(offset, amount, category)
            .then(onCharListLoaded)
    }

    const onCharListLoaded = (newCharList) => {
        // setCharList(charList => [...charList, ...newCharList])
        setNewItemLoading(false)
        setIndent(indent => indent + 8)
        setCategory(nameCategory)
        if (charList.length - indent <= 8) {
            setOffset(offset => offset + 1)
            setAmount(amount => amount + 20)
            setCharList(charList => [...charList, ...newCharList])
        } else {
            setCharList(charList => [...charList])
        }

        // setAmount(amount => amount + 20)
    }

    // const newChars = charList.slice(0, indent)

    // console.log(newChars)

    // const indentChar = () => {

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
                                <div className="card__text">{item.gender}</div>
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

    return (
        <div className="card-list">
            {items}
            <div className="button">
                <button onClick={() => onRequest(offset, amount)} className="button-load">Load more</button>
            </div>
        </div>
    )
}

export default CharList