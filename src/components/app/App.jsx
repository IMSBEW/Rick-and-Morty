import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import AppHeader from '../appHeader/AppHeader'
import CharactersListPage from '../pages/CharactersListPage'
import CharPage from '../pages/charPage/CharPage'
import LocationsListPage from '../pages/LocationsListPage'
import EpisodesListPage from '../pages/EpisodesListPage'
// import CardPage from '../pages/cardPage/CardPage'

import './app.scss'

const App = () => {
    return (
        <Router>
            <>
                <AppHeader />
                <main className="main">
                    <div className="container">
                        <Suspense>
                            <Routes>
                                <Route path='/' element={<CharactersListPage />} />
                                <Route path='/char/:charId' element={<CharPage />} />
                                <Route path='/locations' element={<LocationsListPage />} />
                                <Route path='/epsodes' element={<EpisodesListPage />} />
                            </Routes>
                        </Suspense>
                    </div>
                </main>
                <footer className="footer">
                    <p>Developer by Andrey Sugako</p>
                </footer>
            </>
        </Router>
    )

}

export default App