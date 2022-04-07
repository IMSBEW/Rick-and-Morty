import useAppService from '../../services/AppService'

import arrow from '../../assets/img/arrow.svg'

const FilterPanel = ({ nameFilter, nameCategory, onClickName }) => {
    const getNameCategory = (e) => {
        onClickName(e.target.textContent)
    }

    return (
        <div className="filter">
            <div className="filter__name">
                <p>{nameFilter}</p>
                <img src={arrow} alt="arrow" />
            </div>
            <ul className="sub-menu__list">
                {nameCategory.map((item, index) =>
                    <li onClick={getNameCategory}
                        key={index}
                        className="filter__name">{item}</li>
                )}
            </ul>
        </div>
    )
}

export default FilterPanel