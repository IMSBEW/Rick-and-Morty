import { useState } from "react"
import usefilterService from "../../services/FilterService"

const FilterSearch = ({ transferValue, width }) => {
    const [value, setValue] = useState('')
    const [openListFilter, setOpenListFilter] = useState(true)

    const { dataFilterLocations } = usefilterService()
    const filterLocations = dataFilterLocations.filter(filter => {
        return filter.toLowerCase().includes(value.toLowerCase())
    })


    const getValueInput = (e) => {
        setValue(e.target.textContent)
        transferValue(e.target.textContent)
        setOpenListFilter(false)
    }



    const inputClick = () => {
        setOpenListFilter(true)
    }

    return (
        <div className="search">
            <form className='search__form'>
                <input
                    type="text"
                    className="filter__item"
                    placeholder={'Filter by type...'}
                    onChange={e => setValue(e.target.value)}
                    style={{ width: width }}
                    value={value}
                    onClick={inputClick}
                />
                <ul className="autocomplete">
                    {
                        value && openListFilter
                            ? filterLocations.map((filter, index) => {
                                return (
                                    <li
                                        key={index}
                                        className="autocomplete__item"
                                        onClick={getValueInput}>
                                        {filter}
                                    </li>
                                )
                            })
                            : null
                    }
                </ul>
            </form>
        </div>
    )
}

export default FilterSearch