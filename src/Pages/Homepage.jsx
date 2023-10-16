import React from 'react';
import Header from '../Components/Header';
import '../App.css'
import HomepageHero from '../Components/HomepageHero';

function Homepage(props) {
    return (
        <div className='homepage'>
            <Header />
            <HomepageHero />
        </div>
    );
}

export default Homepage;