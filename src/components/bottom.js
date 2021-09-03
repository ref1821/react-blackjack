import React from 'react'
import './bottom.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faHome, faPhone } from '@fortawesome/free-solid-svg-icons'



const Bottom = () => {
    return (
        <div className="container">
            
            <div>
                <a href="https://www.instagram.com/wdes798/">
                    <FontAwesomeIcon icon={faInstagram} className="insta"/>
                </a>
            </div>
            <div>
                <a href='https://ref1821.github.io/wdes798/'>
                    <FontAwesomeIcon icon={faHome} className="home"/>
                </a>
            </div>
            <div>
                <a href='https://ref1821.github.io/wdes798/about'>
                    <FontAwesomeIcon icon={faPhone} className="contact"/>
                </a>
            </div>
            <h3 className='h'></h3>
        </div>
    )
}

export default Bottom;
