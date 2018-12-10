import React from 'react'
import { Logo } from './icons'

const Header = ({ isAuthenticated, logout, login }) => (
    <header>
        <div className="inner">
            <div className="logo__container">
                <Logo />
            </div>
            <div className="navigation__items">
                {isAuthenticated &&
                    <a onClick={() => logout()}>Logout</a>
                }
            </div>
        </div>
    </header>
)

export default Header