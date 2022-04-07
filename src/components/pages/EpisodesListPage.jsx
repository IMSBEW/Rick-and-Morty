import SearchPanel from '../filter/SearchPanel'
import CardsList from '../cardList/CardsList'

import banner from '../../assets/img/episodespagebanner.png'

function EpisodesListPage() {
    return (
        <>
            <img className="banner" src={banner} alt="banner" />
            <SearchPanel width={500} />
            <CardsList />
        </>
    )
}

export default EpisodesListPage