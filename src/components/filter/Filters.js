import { useState, useEffect } from 'react'

import SearchPanel from '../filter/SearchPanel'
import FilterPanel from '../filter/FilterPanel'


import '../filter/filters.scss'

const Filters = ({ transferFilters, category, widthSearch }) => {
    const [nameCategory, setNameCategory] = useState('')
    const [nameFilter, setNameFilter] = useState('')
    const [searchRequest, setSearchRequest] = useState('')

    useEffect(() => { getTransferredFilters() }, [nameCategory, nameFilter, searchRequest])

    // console.log(category)

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

    const getSearchRequest = (req) => {
        setSearchRequest(req)
    }

    const getTransferredFilters = () => {
        transferFilters(nameFilter, nameCategory, searchRequest)
    }

    const clearFilter = () => {
        setNameCategory('')
    }

    const buttonClearFilter = () => {
        return (
            <button
                onClick={() => clearFilter()}
                className="button-filter">Clear filter
            </button>
        )
    }


    const filters = Object.entries(Object.fromEntries(category.map(key => [key, arrNameCategory[key]]))).map((item, index) => {
        return (
            <FilterPanel
                key={index}
                nameFilter={item[0]}
                nameCategory={item[1]}
                onClickName={getNameCategory}
                onMouseOverFilter={getNameFilter} />
        )
    })
    return (
        <>
            <div className="filter__wrapper">
                <SearchPanel
                    onUpdateSearch={getSearchRequest}
                    width={widthSearch}
                />
                {filters}
            </div>
            <div className="button">
                {nameCategory ? buttonClearFilter() : null}
            </div>
        </>
    )
}

export default Filters