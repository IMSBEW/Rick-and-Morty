import './filters.scss'

const SearchPanel = ({ width }) => {
    return (
        <div className="search">
            <input
                type="text"
                className="filter__item"
                placeholder="Filter by name..."
                style={{ width: width }}
            />
        </div>
    )
}

export default SearchPanel