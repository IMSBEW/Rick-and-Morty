import arrow from '../../assets/img/arrow.svg'

const FilterPanel = () => {
    return (
        <div className="filter">
            <div className="filter__name">
                <p>Species</p>
                <img src={arrow} alt="arrow" />
            </div>
            <ul className="sub-menu__list">
                <li className="filter__name">Human1</li>
                <li className="filter__name">Human2</li>
                <li className="filter__name">Human3</li>
            </ul>
        </div>
    )
}

export default FilterPanel