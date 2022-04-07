import AppCard from '../appCard/AppCard'
import ButtonLoad from '../buttons/ButtonLoad'

import './cardList.scss'

const CardsList = () => {
    return (
        <div className="card-list">
            <div className="card-list__row">
                <AppCard />
                <AppCard />
                <AppCard />
                <AppCard />
                <AppCard />
                <AppCard />
                <AppCard />
                <AppCard />
            </div>
            <ButtonLoad />
        </div>
    )
}

export default CardsList