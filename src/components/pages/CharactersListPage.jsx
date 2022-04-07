import SearchPanel from '../filter/SearchPanel'
import FilterPanel from '../filter/FilterPanel'
import CharList from '../charsList/CharsList'

import '../filter/filters.scss'

import banner from '../../assets/img/charspagebanner.png'

const CharactersListPage = () => {
    return (
        <>
            <img className="banner" src={banner} alt="banner" />
            <div className="filter__wrapper">
                <SearchPanel />
                <FilterPanel />
                <FilterPanel />
            </div>
            <CharList />
        </>
    )
}

export default CharactersListPage