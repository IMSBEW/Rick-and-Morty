import { useState } from 'react'

import CardsList from '../cardsList/CardsList'

import '../filter/filters.scss'

import banner from '../../assets/img/locationspagebanner.png'
import Filters from '../filter/Filters'

const EpisodeListPage = () => {
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
            />
            <CardsList
                searchRequest={searchRequest}
                indentCard={16}
            />
        </>
    )
}

export default EpisodeListPage


