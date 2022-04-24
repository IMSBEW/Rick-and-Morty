import arrow from '../../assets/img/arrow.svg'

const FilterPanel = ({ nameFilter, nameCategory, onClickName, onMouseOverFilter }) => {
    const getNameCategory = (e) => {
        onClickName(e.target.textContent)
    }

    const getNameFilter = (e) => {
        onMouseOverFilter(e.target.textContent.toLowerCase())
    }

    return (
        <div className="filter" >
            <div className="filter__name name" onMouseOver={getNameFilter}>
                <p  >{nameFilter}</p>
                <img src={arrow} alt="arrow" />
            </div>
            <ul className="sub-menu__list">
                {nameCategory.map((item, index) =>
                    <li onClick={getNameCategory}
                        key={index}
                        className="filter__name category">{item}</li>
                )}
            </ul>
        </div>
    )
}

export default FilterPanel