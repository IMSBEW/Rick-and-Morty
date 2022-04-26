import { useState, useEffect } from 'react'

import usefilterService from "../../services/FilterService"

import SearchPanel from '../filter/SearchPanel'
import FilterPanel from '../filter/FilterPanel'
import FilterSearch from '../filter/FilterSearch'


import '../filter/filters.scss'

const Filters = ({ transferFilters, category, widthSearch, filterSearch }) => {
    const [nameCategory, setNameCategory] = useState('')
    const [nameFilter, setNameFilter] = useState('')
    const [searchRequest, setSearchRequest] = useState('')
    const [valueInput, setValueInput] = useState('')

    const { dataFilterCharacters } = usefilterService()

    useEffect(() => { getTransferredFilters() }, [searchRequest, valueInput, nameCategory, nameFilter])

    const getNameCategory = (name) => {
        setNameCategory(name)
    }

    const getNameFilter = (name) => {
        setNameFilter(name)
    }

    const getSearchRequest = (req) => {
        setSearchRequest(req)
    }

    const getValueInput = (value) => {
        setValueInput(value)
    }

    const getTransferredFilters = () => {
        transferFilters(searchRequest, valueInput, nameFilter, nameCategory)
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


    const filters = Object.entries(Object.fromEntries(category.map(key => [key, dataFilterCharacters[key]]))).map((item, index) => {
        return (
            <FilterPanel
                key={index}
                nameFilter={item[0]}
                nameCategory={item[1]}
                onClickName={getNameCategory}
                onMouseOverFilter={getNameFilter} />
        )
    })

    const formSearchFilter = filterSearch ? <FilterSearch transferValue={getValueInput} width={widthSearch} /> : null

    return (
        <>
            <div className="filter__wrapper">
                <SearchPanel
                    onUpdateSearch={getSearchRequest}
                    width={widthSearch}
                />
                {filters}
                {formSearchFilter}
            </div>
            <div className="button">
                {nameCategory ? buttonClearFilter() : null}
            </div>
        </>
    )
}

export default Filters