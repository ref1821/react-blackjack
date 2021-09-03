import React from 'react'
import Nav from './nav'
import Bottom from './bottom'
import { Link } from "react-router-dom";
import './home.css'

const Home = () => {
    return (
        <div className='con'>
            <Nav></Nav>
            <Link  to='/black/play/' className="pla">Play</Link>
            <Bottom></Bottom>
        </div>
    )
}

export default Home;
