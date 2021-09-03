import React from 'react'
import { NavLink } from "react-router-dom"
import'./nav.css'

const Nav = () => {
    return (
        <div className="nav">
            <h1 className="title">Blackjack</h1>
            <div className="navi">
                <nav>
                    <NavLink to="/black/home" className="n">
                        Home
                    </NavLink>
                    <NavLink to="/black/games" className="n">
                        Games
                    </NavLink>
                    <NavLink to="/black/about" className="n">
                        About
                    </NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Nav;
