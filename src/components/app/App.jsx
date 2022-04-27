import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Spinner from '../spinner/Spinner'
import AppHeader from '../appHeader/AppHeader'

import './app.scss'

const CharactersListPage = lazy(() => import('../pages/CharactersListPage'))
const LocationsListPage = lazy(() => import('../pages/LocationsListPage'))
const EpisodesListPage = lazy(() => import('../pages/EpisodesListPage'))
const CharPage = lazy(() => import('../pages/charPage/CharPage'))
const CardPage = lazy(() => import('../pages/cardPage/CardPage'))
const Page404 = lazy(() => import('../pages/404/404'))

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
                                <Route path='/character/:cardId' element={<CharPage />} />
                                <Route path='/locations' element={<LocationsListPage />} />
                                <Route path='/episodes' element={<EpisodesListPage />} />
                                <Route path='/location/:cardId' element={<CardPage />} />
                                <Route path='/episode/:cardId' element={<CardPage />} />
                                <Route path='*' element={<Page404 />} />
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