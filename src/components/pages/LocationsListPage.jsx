import { useState } from 'react'
import CharsList from '../charsList/CharsList'


import '../filter/filters.scss'

import banner from '../../assets/img/locationspagebanner.png'
import Filters from '../filter/Filters'

const LocationsListPage = () => {
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
                category={['Type', 'Dimension']}
                widthSearch={326}
            />
            <CharsList
                nameCategory={nameCategory}
                nameFilter={nameFilter}
                searchRequest={searchRequest}
                indentCard={12}
            />
        </>
    )
}

export default LocationsListPage