import AppHeader from '../appHeader/AppHeader'
import CharactersListPage from '../pages/CharactersListPage'
// import LocationsListPage from '../pages/LocationsListPage'
// import EpisodesListPage from '../pages/EpisodesListPage'
// import CardPage from '../pages/cardPage/CardPage'

import './app.scss'

const App = () => {
    return (
        <>
            <AppHeader />
            <main className="main">
                <div className="container">
                    <CharactersListPage />
                </div>
            </main>
            <footer className="footer">
                <p>Developer by Andrey Sugako</p>
            </footer>
        </>
    )

}

export default App