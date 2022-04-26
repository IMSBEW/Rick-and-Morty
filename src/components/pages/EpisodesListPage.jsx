import { useState } from 'react'

import CardsList from '../cardsList/CardsList'

import '../filter/filters.scss'

import banner from '../../assets/img/locationspagebanner.png'
import Filters from '../filter/Filters'

const EpisodesListPage = () => {
    const [searchRequest, setSearchRequest] = useState('')

    const getTransferredFilters = (searchRequest) => {
        console.log(searchRequest)
        setSearchRequest(searchRequest)
    }

    return (
        <>
            <img className="banner" src={banner} alt="banner" />
            <Filters
                transferFilters={getTransferredFilters}
                category={[]}
                widthSearch={500}
                filterSearch={false}
            />
            <CardsList
                searchRequest={searchRequest}
                indentCard={16}
            />
        </>
    )
}

export default EpisodesListPage


