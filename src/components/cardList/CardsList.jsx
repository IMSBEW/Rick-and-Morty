import AppCard from '../appCard/AppCard'

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
        </div>
    )
}

export default CardsList