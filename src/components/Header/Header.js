import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
                <Link to='/'><h3>Quiz Maker</h3></Link>
            </div>
            <nav>
                <ul>
                    <Link to='/'>Topics</Link>
                    <Link to='/statistics'>Statistics</Link>
                    <Link to='/blog'>Blog</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;