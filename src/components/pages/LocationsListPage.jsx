import Filters from '../filter/Filters'
import CardsList from '../cardList/CardsList'

import banner from '../../assets/img/locationspagebanner.png'

function LocationsListPage() {
    return (
        <>
            <img className="banner" src={banner} alt="banner" />
            <Filters />
            <CardsList />
        </>
    )
}

export default LocationsListPage