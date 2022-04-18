// import ButtonBack from "../../buttons/ButtonBack"
import CharsList from "../../charsList/CharsList"

import './cardPage.scss'

function CardPage() {
    return (
        <div className="card-page">
            <div className="card-page__info">
                <div className="card-page__row">
                    {/* <ButtonBack /> */}
                    <div className="card-page__body">
                        <div className="card-page__wrapper">
                            <div className="card-page__title">Earth (Replacement Dimension)
                            </div>
                            <div className="card-page__category">
                                <div className="card-page__category-wrapper">
                                    <p className="card-page__category-title">Type</p>
                                    <p className="card-page__category-info">Planet</p>
                                </div>
                                <div className="card-page__category-wrapper">
                                    <p className="card-page__category-title">Dimension</p>
                                    <p className="card-page__category-info">Replacement Dimension</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="card-page__name">Residents</p>
            <CharsList />
        </div>
    )
}
export default CardPage