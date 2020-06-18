import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

function Menu(props) {
    return (
        <nav>
            <h1 className='AppName'>Fantasy League</h1>
            <ul>
                <li><Link to='/'>Landingpage</Link></li>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/newbet'>New Bet</Link></li>
            </ul>
        </nav>
    );
}

export default Menu;