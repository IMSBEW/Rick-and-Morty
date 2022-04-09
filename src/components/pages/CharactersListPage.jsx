import { useState } from 'react'

import SearchPanel from '../filter/SearchPanel'
import FilterPanel from '../filter/FilterPanel'
import CharList from '../charsList/CharsList'

import '../filter/filters.scss'

import banner from '../../assets/img/charspagebanner.png'

const CharactersListPage = () => {
    const [nameCategory, setNameCategory] = useState('')

    const arrNameCategory = {
        Species: [
            'Species', 'Gender', 'Status'
        ],
        Gender: [
            'female', 'male', 'genderless', 'unknown'
        ],
        Status: [
            'alive', 'dead', 'unknown'
        ]
    }

    const getNameCategory = (name) => {
        setNameCategory(name)
    }

    const filters = Object.entries(arrNameCategory).map((item, index) => {
        return (
            <FilterPanel nameFilter={item[0]} key={index} nameCategory={item[1]} onClickName={getNameCategory} />
        )

    })

    return (
        <>
            <img className="banner" src={banner} alt="banner" />
            <div className="filter__wrapper">
                <SearchPanel />
                {filters}
            </div>
            <CharList nameCategory={nameCategory} />
        </>
    )
}

export default CharactersListPage