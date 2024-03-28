import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>            
            <header>
                <div className="logo">
                    <img src="EVS logo.png" alt="E-Voting System Logo" />
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Contact">Contact Us</Link></li>
                        <li><Link to="/About">About Us</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
