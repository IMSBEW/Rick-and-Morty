import { useState } from 'react'

import SearchPanel from '../filter/SearchPanel'
import FilterPanel from '../filter/FilterPanel'
import CharList from '../charsList/CharsList'

import '../filter/filters.scss'

import banner from '../../assets/img/charspagebanner.png'

const CharactersListPage = () => {
    const [nameCategory, setNameCategory] = useState('')
    const [nameFilter, setNameFilter] = useState('')

    const arrNameCategory = {
        Species: [
            'human', 'alien',
            'humanoid', 'unknown',
            'poopybutthole', 'mythologi',
            'animal', 'robot', 'cronenberg',
            'disease'
        ],
        Gender: [
            'female', 'male',
            'genderless', 'unknown'
        ],
        Status: [
            'alive', 'dead', 'unknown'
        ]
    }

    const getNameCategory = (name) => {
        setNameCategory(name)
    }

    const getNameFilter = (name) => {
        setNameFilter(name)
    }

    const filters = Object.entries(arrNameCategory).map((item, index) => {
        return (
            <FilterPanel nameFilter={item[0]} key={index} nameCategory={item[1]} onClickName={getNameCategory} onMouseOverFilter={getNameFilter} />
        )

    })

    return (
        <>
            <img className="banner" src={banner} alt="banner" />
            <div className="filter__wrapper">
                <SearchPanel />
                {filters}
            </div>
            <CharList nameCategory={nameCategory} nameFilter={nameFilter} />
        </>
    )
}

export default CharactersListPage