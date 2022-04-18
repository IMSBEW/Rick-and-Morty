import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Spinner from '../spinner/Spinner'
import AppHeader from '../appHeader/AppHeader'

import './app.scss'

const CharactersListPage = lazy(() => import('../pages/CharactersListPage'))
const LocationsListPage = lazy(() => import('../pages/LocationsListPage'))
const EpisodesListPage = lazy(() => import('../pages/EpisodesListPage'))
const CharPage = lazy(() => import('../pages/charPage/CharPage'))
// import CardPage from '../pages/cardPage/CardPage'

const App = () => {
    return (
        <Router>
            <>
                <AppHeader />
                <main className="main">
                    <div className="container">
                        <Suspense fallback={<Spinner />}>
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