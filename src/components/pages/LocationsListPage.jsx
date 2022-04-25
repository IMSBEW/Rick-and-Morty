import { useState } from 'react'

import CardsList from '../cardsList/CardsList'
import Filters from '../filter/Filters'

import banner from '../../assets/img/locationspagebanner.png'

import '../filter/filters.scss'


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
                category={[]}
                widthSearch={500}
            />
            <CardsList
                nameCategory={nameCategory}
                nameFilter={nameFilter}
                searchRequest={searchRequest}
                indentCard={12}
            />
        </>
    )
}

export default LocationsListPage