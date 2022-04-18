import { Link, NavLink } from 'react-router-dom'

import logo from '../../assets/img/logo.svg'

import './appHeader.scss'

const AppHeader = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__row">
                    <Link to='/'>
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                    </Link>
                    <nav className="nav">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <NavLink
                                    end
                                    style={({ isActive }) => ({ color: isActive ? '#00a2b8' : '#000000' })}
                                    to='/'>Characters
                                </NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink
                                    end
                                    style={({ isActive }) => ({ color: isActive ? '#00a2b8' : '#000000' })}
                                    to='/locations'>Locations
                                </NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink
                                    end
                                    style={({ isActive }) => ({ color: isActive ? '#00a2b8' : '#000000' })}
                                    to='/episodes'>Episodes
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default AppHeader