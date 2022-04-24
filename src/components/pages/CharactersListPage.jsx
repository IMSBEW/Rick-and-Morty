import { useState } from 'react'

// import SearchPanel from '../filter/SearchPanel'
// import FilterPanel from '../filter/FilterPanel'
import CharList from '../charsList/CharsList'


import '../filter/filters.scss'

import banner from '../../assets/img/charspagebanner.png'
import Filters from '../filter/Filters'

const CharactersListPage = () => {
    const [nameCategory, setNameCategory] = useState('')
    const [nameFilter, setNameFilter] = useState('')
    const [searchRequest, setSearchRequest] = useState('')

    const getTransferredFilters = (nameFilter, nameCategory, searchRequest) => {
        setNameCategory(nameCategory)
        setNameFilter(nameFilter)
        setSearchRequest(searchRequest)
    }

    return (
        <>
            <img className="banner" src={banner} alt="banner" />
            <Filters
                transferFilters={getTransferredFilters}
                category={['Species', 'Gender']}
                widthSearch={326}
            />
            <CharList
                nameCategory={nameCategory}
                nameFilter={nameFilter}
                searchRequest={searchRequest}
            />
        </>
    )
}

export default CharactersListPage