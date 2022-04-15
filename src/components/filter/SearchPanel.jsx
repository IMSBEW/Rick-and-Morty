import './filters.scss'

const SearchPanel = ({ onUpdateSearch }) => {
    const getSearchRequest = (e) => {
        onUpdateSearch(e.target.value)
    }

    return (
        <div className="search">
            <form className='search-form'>
                <input
                    type="text"
                    className="filter__item"
                    placeholder="Filter by name..."
                    // style={{ width: width }}
                    onChange={getSearchRequest}
                />
            </form>
        </div>
    )
}

export default SearchPanel