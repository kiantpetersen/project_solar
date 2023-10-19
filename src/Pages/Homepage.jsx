import React from 'react';
import Header from '../Components/Header';
import '../App.css'
import HomepageHero from '../Components/HomepageHero';
import PlanetsList from '../Components/PlanetsList';

function Homepage(props) {
    return (
        <div className='homepage'>
            <Header />
            <HomepageHero />
            <PlanetsList />
        </div>
    );
}

export default Homepage;