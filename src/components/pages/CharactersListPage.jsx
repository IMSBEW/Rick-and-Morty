import { useState } from 'react'

// import SearchPanel from '../filter/SearchPanel'
// import FilterPanel from '../filter/FilterPanel'
import CardsList from '../cardsList/CardsList'


import '../filter/filters.scss'

import banner from '../../assets/img/charspagebanner.png'
import Filters from '../filter/Filters'

const CharacterListPage = () => {
    const [nameCategory, setNameCategory] = useState('')
    const [nameFilter, setNameFilter] = useState('')
    const [searchRequest, setSearchRequest] = useState('')

    const getTransferredFilters = (searchRequest, nameFilter, nameCategory) => {
        setSearchRequest(searchRequest)
        setNameCategory(nameCategory)
        setNameFilter(nameFilter)
    }

    return (
        <>
            <img className="banner" src={banner} alt="banner" />
            <Filters
                transferFilters={getTransferredFilters}
                category={['Species', 'Gender', 'Status']}
            />
            <CardsList
                nameCategory={nameCategory}
                nameFilter={nameFilter}
                searchRequest={searchRequest}
                indentCard={8}
            />
        </>
    )
}

export default CharacterListPage