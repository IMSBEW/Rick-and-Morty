import logo from '../../assets/img/logo.svg'

import './appHeader.scss'

const AppHeader = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__row">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <nav className="nav">
                        <ul className="nav__list">
                            <li className="nav__item">Characters</li>
                            <li className="nav__item">Locations</li>
                            <li className="nav__item">Episodes</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default AppHeader