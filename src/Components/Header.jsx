import React from 'react';

function Header(props) {
    return (
        <header className='header'>
            <h2 className='header-title'>SpaceHub</h2>
            <nav className='header-nav'>
                <ul className='nav-list'>
                    <li className='nav-list-item'><a className='nav-link' href='/'>Home</a></li>
                    <li className='nav-list-item'><a className='nav-link' href='/'>About Us</a></li>
                    <li className='nav-list-item'><a className='nav-link' href='/'>Worlds</a></li>
                    <li className='nav-list-item'><a className='nav-link' href='/'>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;